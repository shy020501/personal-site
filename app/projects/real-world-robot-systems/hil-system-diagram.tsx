export function HilSystemDiagram() {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-labelledby="hil-flow-title hil-flow-description"
      className="block h-full w-full text-foreground"
    >
      <title id="hil-flow-title">Human-in-the-Loop action 선택 흐름</title>
      <desc id="hil-flow-description">
        Dual SpaceMouse 입력과 버튼 및 조작 모드를 처리한 뒤 intervention 여부에
        따라 action을 선택합니다. Intervention이 없으면 policy action을 그대로
        사용하고, 있으면 expert action에 invsymlog와 gripper 끝단 기준 translation
        보정을 적용합니다. 최종 action으로 env.step()을 실행하고 intervention 및
        조작 상태를 info에 기록합니다.
      </desc>

      <defs>
        <marker
          id="hil-arrow"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0 0 8 4 0 8Z" className="fill-muted" />
        </marker>
        <marker
          id="hil-expert-arrow"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0 0 8 4 0 8Z" className="fill-accent" />
        </marker>
      </defs>

      <g
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="stroke-muted"
        markerEnd="url(#hil-arrow)"
      >
        <path d="M109 64V168H243" />
        <path d="M500 64V88" />
        <path d="M500 136V168H397" />
        <path d="M280 190V207H152V228" />
        <path d="M152 280V294H320V306" />
        <path d="M397 326H428" />
      </g>
      <g
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="stroke-accent"
        markerEnd="url(#hil-expert-arrow)"
      >
        <path d="M360 190V207H488V228" />
        <path d="M488 280V294H320V306" />
      </g>

      <g strokeWidth="1" className="fill-surface stroke-border">
        <rect x="24" y="16" width="170" height="48" rx="5" />
        <rect x="384" y="16" width="232" height="48" rx="5" />
        <rect x="384" y="88" width="232" height="48" rx="5" />
        <rect x="44" y="228" width="216" height="52" rx="5" />
        <rect x="430" y="306" width="186" height="40" rx="5" />
      </g>
      <rect
        x="244"
        y="146"
        width="152"
        height="44"
        rx="5"
        className="fill-accent"
      />
      <g strokeWidth="1.5" className="fill-white stroke-accent">
        <rect x="380" y="228" width="216" height="52" rx="5" />
        <rect x="244" y="306" width="152" height="40" rx="5" />
      </g>

      <g lang="en" textAnchor="middle" fill="currentColor" fontSize="18">
        <text x="109" y="46" fontWeight="500">Policy action</text>
        <text x="500" y="46" fontWeight="500">Dual SpaceMouse</text>
        <text x="500" y="108" fontSize="17">Input &amp; mode handling</text>
        <text x="500" y="126" fontSize="14" className="fill-muted">
          6-DoF · buttons · locks
        </text>
        <text x="320" y="174" fontSize="17" className="fill-white">
          Intervened?
        </text>
        <text x="216" y="201" fontSize="15" className="fill-muted">No</text>
        <text x="424" y="201" fontSize="15" className="fill-accent">Yes</text>
        <text x="152" y="250" fontWeight="500">Policy action</text>
        <text x="152" y="270" fontSize="14" className="fill-muted">
          unchanged
        </text>
        <text x="488" y="250" fontWeight="500" className="fill-accent">
          Expert action
        </text>
        <text x="488" y="270" fontSize="14" className="fill-muted">
          invsymlog + tip correction
        </text>
        <text x="320" y="332" className="fill-accent">env.step()</text>
        <text x="523" y="332" fontSize="17">Record info</text>
      </g>
    </svg>
  );
}
