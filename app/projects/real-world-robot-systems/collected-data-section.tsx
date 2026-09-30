import type { ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";

const transitionFields = [
  {
    key: "observations",
    format: "dict",
    description: "현재 step의 카메라 영상과 로봇 상태",
  },
  {
    key: "actions",
    format: "(14,)",
    description: "왼팔과 오른팔의 position, orientation, gripper action",
  },
  {
    key: "next_observations",
    format: "dict",
    description: "다음 step의 관측. observations와 동일한 key 구성",
  },
  {
    key: "rewards",
    format: "0–1",
    description: "보상값. 예시 transition에서는 0",
  },
  {
    key: "masks",
    format: "1.0 - done",
    description: "진행 중에는 1.0, 종료 시에는 0.0",
  },
  {
    key: "dones",
    format: "False / True",
    description: "에피소드 종료 여부",
  },
  {
    key: "infos",
    format: "dict",
    description: "버튼 입력, 작업 성공 여부 및 사용자 개입 정보",
  },
];

const observationFields = [
  {
    key: "left/head_cam",
    shape: "(1, 128, 128, 3)",
    description: "상단 카메라 영상",
  },
  {
    key: "left/wrist_cam",
    shape: "(1, 128, 128, 3)",
    description: "왼팔 손목 카메라 영상",
  },
  {
    key: "right/wrist_cam",
    shape: "(1, 128, 128, 3)",
    description: "오른팔 손목 카메라 영상",
  },
  {
    key: "state",
    shape: "(1, 38)",
    description: "양팔의 gripper 상태, TCP pose·velocity, force·torque",
  },
];

const stateFields = [
  { field: "gripper_pose", left: "0", right: "19" },
  { field: "tcp_force", left: "1–3", right: "20–22" },
  { field: "tcp_pose", left: "4–9", right: "23–28" },
  { field: "tcp_torque", left: "10–12", right: "29–31" },
  { field: "tcp_vel", left: "13–18", right: "32–37" },
];

const actionFields = [
  { field: "position", left: "0–2", right: "7–9" },
  { field: "orientation", left: "3–5", right: "10–12" },
  { field: "gripper_action", left: "6", right: "13" },
];

const infoFields = [
  {
    keys: ["left1", "left2", "right1", "right2"],
    value: "0",
    description: "양팔의 버튼 상태. 수집 샘플에서는 네 버튼 모두 0",
  },
  {
    keys: ["succeed"],
    value: "False",
    description: "작업 성공 여부. 수집 샘플에서는 False",
  },
  {
    keys: ["intervene_action"],
    value: "(14,)",
    description:
      "사용자 개입 시에만 추가되는 action. actions와 동일한 양팔 구성 및 인덱스 순서",
  },
];

function SchemaTable({
  label,
  headers,
  children,
}: {
  label: string;
  headers: string[];
  children: ReactNode;
}) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="overflow-x-auto rounded-sm border border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <table className="w-full text-left text-sm leading-6 [&_code]:text-[0.8125rem]">
        <caption className="sr-only">{label}</caption>
        <thead className="bg-surface text-muted">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-2.5 text-xs font-medium whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_th]:px-4 [&_th]:py-3 [&_th]:align-top [&_th]:font-normal">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function CollectedDataSection() {
  return (
    <section
      aria-labelledby="collection-heading"
      className="border-b border-border py-10 sm:py-12"
    >
      <SectionHeading
        id="collection-heading"
        title="Data Structure"
      />
      <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
        실제 로봇 실험에서 수집한 데이터는 한 step의 관측, 행동, 다음 관측과
        보상·종료 정보를 하나의 transition으로 묶어 저장합니다. 세 카메라 영상과
        양팔 로봇 상태를 포함하며, human intervention이 발생한 경우 해당 action을
        추가로 기록합니다.
      </p>

      <div className="mt-8 space-y-8">
        <div className="space-y-4">
          <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
            Transition
          </h3>
          <SchemaTable
            label="Transition의 최상위 데이터 필드"
            headers={["Key", "Format / range", "내용"]}
          >
            {transitionFields.map((entry) => (
              <tr key={entry.key}>
                <th scope="row" className="whitespace-nowrap">
                  <code>{entry.key}</code>
                </th>
                <td className="whitespace-nowrap"><code>{entry.format}</code></td>
                <td className="min-w-48 break-keep">{entry.description}</td>
              </tr>
            ))}
          </SchemaTable>
        </div>

        <div className="space-y-4">
          <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
            Observations
          </h3>
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            <code className="text-[0.9em]">observations</code>와{" "}
            <code className="text-[0.9em]">next_observations</code>는 아래 네 개의
            key를 공유하며, 각각 행동 실행 전후의 관측을 저장합니다.
          </p>
          <SchemaTable
            label="카메라 관측과 state의 key 및 shape"
            headers={["Key", "Shape", "내용"]}
          >
            {observationFields.map((entry) => (
              <tr key={entry.key}>
                <th scope="row" className="whitespace-nowrap">
                  <code>{entry.key}</code>
                </th>
                <td className="whitespace-nowrap"><code>{entry.shape}</code></td>
                <td className="min-w-48 break-keep">{entry.description}</td>
              </tr>
            ))}
          </SchemaTable>
        </div>

        <div className="space-y-4">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-6">
            <div className="min-w-0 space-y-4">
              <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
                Robot State
              </h3>
              <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
                왼팔 19차원과 오른팔 19차원을 이어 붙인 38차원 state입니다.
              </p>
              <SchemaTable
                label="38차원 state의 팔별 인덱스"
                headers={["Field", "Left index", "Right index"]}
              >
                {stateFields.map((entry) => (
                  <tr key={entry.field}>
                    <th scope="row" className="whitespace-nowrap">
                      <code>{entry.field}</code>
                    </th>
                    <td><code>{entry.left}</code></td>
                    <td><code>{entry.right}</code></td>
                  </tr>
                ))}
              </SchemaTable>
            </div>

            <div className="min-w-0 space-y-4">
              <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
                Actions
              </h3>
              <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
                각 팔의 position 3개, orientation 3개, gripper action 1개를 묶은
                총 14차원 action입니다.
              </p>
              <SchemaTable
                label="14차원 action의 팔별 인덱스"
                headers={["Field", "Left index", "Right index"]}
              >
                {actionFields.map((entry) => (
                  <tr key={entry.field}>
                    <th scope="row" className="whitespace-nowrap">
                      <code>{entry.field}</code>
                    </th>
                    <td><code>{entry.left}</code></td>
                    <td><code>{entry.right}</code></td>
                  </tr>
                ))}
              </SchemaTable>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 lang="en" className="text-base leading-7 font-bold sm:text-lg">
            Episode &amp; Intervention Info
          </h3>
          <p className="text-sm leading-7 break-keep sm:text-base sm:leading-8">
            기본 <code className="text-[0.9em]">infos</code>에는 네 버튼의 입력
            상태와 작업 성공 여부를 저장합니다. 사용자가 개입한 step에는{" "}
            <code className="text-[0.9em]">intervene_action</code>이 추가되어,
            해당 시점의 개입 행동을 함께 확인할 수 있습니다.
          </p>
          <SchemaTable
            label="기본 infos 필드와 사용자 개입 시 추가되는 필드"
            headers={["Key", "Shape / example", "내용"]}
          >
            {infoFields.map((entry) => (
              <tr key={entry.keys[0]}>
                <th scope="row">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {entry.keys.map((key) => <code key={key}>{key}</code>)}
                  </div>
                </th>
                <td className="whitespace-nowrap"><code>{entry.value}</code></td>
                <td className="min-w-48 break-keep">{entry.description}</td>
              </tr>
            ))}
          </SchemaTable>
        </div>
      </div>
    </section>
  );
}
