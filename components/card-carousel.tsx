"use client";

import {
  Children,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

type CardCarouselProps = {
  children: ReactNode;
  label: string;
  columns: 2 | 3;
};

function getStep(track: HTMLUListElement) {
  const card = track.firstElementChild;
  if (!card) return track.clientWidth;

  return (
    card.getBoundingClientRect().width +
    parseFloat(getComputedStyle(track).columnGap)
  );
}

function scrollToPosition(track: HTMLUListElement, left: number) {
  track.scrollTo({
    left,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

export function CardCarousel({ children, label, columns }: CardCarouselProps) {
  const trackId = useId();
  const trackRef = useRef<HTMLUListElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    x: number;
    y: number;
    scrollLeft: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const count = Children.count(children);
  const [position, setPosition] = useState({
    first: 0,
    visible: Math.min(columns, count),
    previous: false,
    next: count > columns,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const style = getComputedStyle(track);
      const width =
        track.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);
      const step = getStep(track);
      if (!step) return;

      const visible = Math.min(
        count,
        Math.max(1, Math.round((width + parseFloat(style.columnGap)) / step)),
      );
      const next = {
        first: Math.max(
          0,
          Math.min(count - visible, Math.round(track.scrollLeft / step)),
        ),
        visible,
        previous: track.scrollLeft > 1,
        next: track.scrollLeft < track.scrollWidth - track.clientWidth - 1,
      };

      setPosition((current) =>
        current.first === next.first &&
        current.visible === next.visible &&
        current.previous === next.previous &&
        current.next === next.next
          ? current
          : next,
      );
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [count, columns]);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep(track);
    scrollToPosition(
      track,
      (Math.round(track.scrollLeft / step) + direction) * step,
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.target !== event.currentTarget) return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      scrollToPosition(
        event.currentTarget,
        event.key === "Home" ? 0 : event.currentTarget.scrollWidth,
      );
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLUListElement>) {
    suppressClickRef.current = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      scrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  }

  function handlePointerMove(event: PointerEvent<HTMLUListElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.x;

    if (!drag.moved) {
      if (
        Math.abs(distance) < 8 ||
        Math.abs(distance) < Math.abs(event.clientY - drag.y)
      ) {
        return;
      }
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "true";
    }

    event.preventDefault();
    suppressClickRef.current = true;
    event.currentTarget.scrollLeft = drag.scrollLeft - distance;
  }

  function finishDrag(event: PointerEvent<HTMLUListElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    const track = event.currentTarget;
    delete track.dataset.dragging;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    if (drag.moved) {
      const step = getStep(track);
      scrollToPosition(track, Math.round(track.scrollLeft / step) * step);
    }
  }

  if (count === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="card-carousel relative flow-root"
    >
      <ul
        id={trackId}
        ref={trackRef}
        tabIndex={0}
        aria-label={`${label} cards`}
        className="-m-2 flex snap-x snap-mandatory scroll-px-2 gap-5 overflow-x-auto overscroll-x-contain p-2 select-none [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent data-[dragging=true]:cursor-grabbing data-[dragging=true]:snap-none [&::-webkit-scrollbar]:hidden"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onPointerLeave={(event) => {
          if (!dragRef.current?.moved) finishDrag(event);
        }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (suppressClickRef.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            suppressClickRef.current = false;
          }
        }}
      >
        {Children.map(children, (child) => (
          <li
            className={`min-w-0 shrink-0 basis-full snap-start ${
              columns === 3
                ? "md:basis-[calc((100%_-_2.5rem)/3)]"
                : "md:basis-[calc((100%_-_1.25rem)/2)]"
            }`}
          >
            {child}
          </li>
        ))}
      </ul>
      {count > position.visible && (
        <>
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {label}: {" "}
            {position.first + 1}
            {position.visible > 1 && `–${position.first + position.visible}`} / {count}
          </span>
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={`${direction === -1 ? "Previous" : "Next"} ${label}`}
              aria-controls={trackId}
              disabled={direction === -1 ? !position.previous : !position.next}
              onClick={() => move(direction)}
              className={`carousel-arrow absolute top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-white/95 text-accent shadow-sm transition-[opacity,background-color,border-color,box-shadow] duration-150 hover:border-accent/40 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-0 motion-reduce:transition-none ${
                direction === -1 ? "-left-4 md:-left-5" : "-right-4 md:-right-5"
              }`}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={direction === -1 ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} />
              </svg>
            </button>
          ))}
        </>
      )}
    </div>
  );
}
