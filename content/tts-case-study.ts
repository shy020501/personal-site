export const ttsSources = [
  {
    id: "v-gps",
    name: "V-GPS",
    title: "Steering Your Generalists: Improving Robotic Foundation Models via Value Guidance",
    url: "https://arxiv.org/abs/2410.13816v2",
    paper: "https://arxiv.org/pdf/2410.13816v2",
    edition: "arXiv:2410.13816v2",
  },
  {
    id: "robomonkey",
    name: "RoboMonkey",
    title: "RoboMonkey: Scaling Test-Time Sampling and Verification for Vision-Language-Action Models",
    url: "https://arxiv.org/abs/2506.17811v2",
    paper: "https://arxiv.org/pdf/2506.17811v2",
    edition: "arXiv:2506.17811v2",
  },
  {
    id: "mg-select",
    name: "MG-Select",
    title: "Verifier-free Test-Time Sampling for Vision-Language-Action Models",
    url: "https://arxiv.org/abs/2510.05681v2",
    paper: "https://arxiv.org/pdf/2510.05681v2",
    edition: "arXiv:2510.05681v2",
  },
  {
    id: "seal",
    name: "SEAL",
    title: "Do What You Say: Steering Vision-Language-Action Models via Runtime Reasoning-Action Alignment Verification",
    url: "https://yilin-wu98.github.io/steering-reasoning-vla/",
    paper: "https://yilin-wu98.github.io/steering-reasoning-vla/static/pdfs/paper_icra.pdf",
    edition: "저자 공식 프로젝트 · ICRA 2026 논문",
  },
  {
    id: "sitcom",
    name: "SITCOM",
    title: "SITCOM: Scaling Inference-Time COMpute for VLAs",
    url: "https://arxiv.org/abs/2510.04041v1",
    paper: "https://arxiv.org/pdf/2510.04041v1",
    edition: "arXiv:2510.04041v1",
  },
  {
    id: "dasip",
    name: "DASIP",
    title: "DASIP: Dynamic Test-Time Compute Scaling for Robot Control with Stochastic Interpolant Policies",
    url: "https://arxiv.org/abs/2511.20906v2",
    paper: "https://arxiv.org/pdf/2511.20906v2",
    edition: "arXiv:2511.20906v2",
  },
  {
    id: "cover-vla",
    name: "CoVer-VLA",
    title: "Scaling Verification Can Be More Effective than Scaling Policy Learning for Vision-Language-Action Alignment",
    url: "https://arxiv.org/abs/2602.12281v2",
    paper: "https://arxiv.org/pdf/2602.12281v2",
    edition: "arXiv:2602.12281v2",
  },
  {
    id: "scale",
    name: "SCALE",
    title: "SCALE: Self-uncertainty Conditioned Adaptive Looking and Execution for Vision-Language-Action Models",
    url: "https://arxiv.org/abs/2602.04208v3",
    paper: "https://arxiv.org/pdf/2602.04208v3",
    edition: "arXiv:2602.04208v3",
  },
  {
    id: "tapsampling",
    name: "TapSampling",
    title: "TapSampling: Inference-Time Sampling with a Task-Progress-Understanding Verifier for Robotic Manipulation",
    url: "https://arxiv.org/abs/2605.25547v1",
    paper: "https://arxiv.org/pdf/2605.25547v1",
    edition: "arXiv:2605.25547v1",
  },
  {
    id: "vla-attc",
    name: "VLA-ATTC",
    title: "VLA-ATTC: Adaptive Test-Time Compute for VLA Models with Relative Action Critic Model",
    url: "https://arxiv.org/abs/2605.01194v2",
    paper: "https://arxiv.org/pdf/2605.01194v2",
    edition: "arXiv:2605.01194v2",
  },
  {
    id: "elastic",
    name: "ELASTIC",
    title: "ELASTIC: Efficiently Learning to Adaptively Scale Test-Time Compute for Generative Control Policies",
    url: "https://arxiv.org/abs/2606.31132v1",
    paper: "https://arxiv.org/pdf/2606.31132v1",
    edition: "arXiv:2606.31132v1",
  },
  {
    id: "e-tts",
    name: "E-TTS",
    title: "E-TTS: A New Embodied Test-Time Scaling Framework for Robotic Manipulation",
    url: "https://arxiv.org/abs/2606.27268v1",
    paper: "https://arxiv.org/pdf/2606.27268v1",
    edition: "arXiv:2606.27268v1",
  },
  {
    id: "sva",
    name: "SVA",
    title: "Look Before You Leap: Distilling Tree Search into Action Evaluation for Frozen VLA Models",
    url: "https://arxiv.org/abs/2607.03751v2",
    paper: "https://arxiv.org/pdf/2607.03751v2",
    edition: "arXiv:2607.03751v2 · 2026.10 개정판",
  },
] as const;

export type TtsMethodId = (typeof ttsSources)[number]["id"];

export type TtsMethod = {
  id: TtsMethodId;
  heading: string;
  takeaway: string;
  paragraphs: string[];
  figure: { file: string; number: number; page: number; caption: string; alt: string };
  base: string;
  addedTraining: string;
  compute: string;
};

export const ttsMethods: TtsMethod[] = [
  {
    id: "v-gps",
    heading: "V-GPS: 장기적인 가치를 기준으로 행동을 다시 정렬합니다",
    takeaway: "행동을 만드는 정책과, 행동의 가치를 평가하는 Q-function을 분리합니다.",
    paragraphs: [
      "V-GPS는 같은 관측과 언어 지시에 대해 정책이 제안한 여러 행동을 언어 조건부 Q-function으로 평가합니다. Q-function은 Cal-QL 기반의 offline reinforcement learning으로 학습하며, 해당 행동이 이후 작업의 보상으로 이어질 가능성을 반영합니다. 정책 자체를 다시 학습하거나 내부 가중치에 접근하지 않고도, 외부 평가기를 붙여 행동 선택을 바꿀 수 있습니다.",
      "핵심은 정책이 이미 만들 수 있는 행동 중 더 나은 것을 선택한다는 점입니다. 논문은 Q-value가 가장 높은 행동을 고르는 경우뿐 아니라, Q-value의 softmax 분포에서 선택하는 방식도 다룹니다. 따라서 V-GPS를 무조건적인 argmax 하나로 제한하기보다는, 학습된 가치로 정책의 제안을 재정렬하는 구조로 이해하는 편이 정확합니다.",
    ],
    figure: { file: "v-gps", number: 1, page: 1, caption: "동결된 정책이 후보를 제안하고, 하나의 가치 함수가 점수를 매겨 실행할 행동을 선택합니다.", alt: "V-GPS 원본 구조: frozen generalist policy, action proposal, Q-value re-ranking, action execution" },
    base: "Octo, RT-1-X, OpenVLA 등",
    addedTraining: "Offline RL Q-function",
    compute: "행동 후보 수",
  },
  {
    id: "robomonkey",
    heading: "RoboMonkey: 시연으로부터 행동 선호도를 학습합니다",
    takeaway: "전문가 행동과의 거리로 선호도 쌍을 만들고, 이를 verifier의 학습 신호로 사용합니다.",
    paragraphs: [
      "RoboMonkey는 전문가 시연의 정답 행동과 정책이 샘플링한 후보들을 비교합니다. 후보를 군집화해 대표 행동을 고른 뒤, 정답과의 RMSE가 작은 행동을 선호하도록 쌍별 학습 데이터를 구성합니다. 이 데이터를 이용해 VLM 기반 action verifier를 학습하므로, V-GPS의 장기 보상과는 다른 평가 신호를 사용합니다.",
      "실행 시에는 정책에서 소수의 초기 행동을 얻고, 연속 이동 성분에 Gaussian을 맞춰 추가 후보를 저렴하게 생성합니다. 그리퍼 상태는 별도로 다수결로 정합니다. 이후 verifier가 최종 후보를 선택합니다. 시트의 ‘5개에서 16개로 확장’은 이러한 생성 비용 절감의 예시이며, 전문가 행동과의 유사성이 실제 장기 성공과 항상 같지는 않다는 점이 평가 기준의 한계입니다.",
    ],
    figure: { file: "robomonkey", number: 2, page: 4, caption: "위쪽은 선호도 데이터와 verifier의 학습 과정이며, 아래쪽은 Gaussian 기반 후보 확장과 실행 시 검증 과정입니다.", alt: "RoboMonkey 원본 구조: expert action에 대한 RMSE로 verifier를 학습하고 Gaussian proposal에서 후보를 생성하여 검증" },
    base: "OpenVLA",
    addedTraining: "쌍별 선호도 verifier",
    compute: "초기 샘플 수·확장 후보 수",
  },
  {
    id: "mg-select",
    heading: "MG-Select: 조건을 가렸을 때의 분포를 비교합니다",
    takeaway: "외부 verifier 대신, 같은 VLA의 조건부·조건 마스킹 분포 차이를 점수로 사용합니다.",
    paragraphs: [
      "MG-Select는 여러 행동을 생성한 다음, 각 후보의 action token 분포가 입력 조건에 얼마나 민감하게 반응하는지 측정합니다. 언어 지시, 로봇 상태 또는 둘 모두를 가린 참조 분포와 모든 조건을 사용한 분포 사이의 KL divergence를 토큰 수준에서 계산하고 집계합니다. 이 점수가 높은 후보를 선택하는 것이 핵심입니다.",
      "기본형은 별도 평가기나 추가 학습 없이 적용할 수 있습니다. 다만 논문에는 조건을 무작위로 생략하는 공동 학습을 통해 참조 분포를 개선하는 MG-Select*도 포함됩니다. 또한 여기서 얻는 confidence는 작업 성공 확률을 직접 측정한 값이 아니라, 조건을 반영하는 정도를 이용한 선택 신호입니다.",
    ],
    figure: { file: "mg-select", number: 1, page: 2, caption: "같은 VLA에서 얻은 두 종류의 분포를 비교하여 후보별 confidence를 계산합니다.", alt: "MG-Select 원본 구조: predicted distribution과 condition-masking distribution을 비교한 confidence로 best-of-N 선택" },
    base: "π0-FAST 등 자기회귀 VLA",
    addedTraining: "기본형 없음 · 확장형은 공동 학습",
    compute: "후보 수·마스킹 조건 평가",
  },
  {
    id: "seal",
    heading: "SEAL: 말로 세운 계획과 행동의 결과를 맞춥니다",
    takeaway: "계획의 문장만 평가하지 않고, 그 계획에 따라 생성한 행동이 만들어 낼 장면을 검증합니다.",
    paragraphs: [
      "추론형 VLA가 ‘수프 캔을 집겠습니다’라고 올바르게 계획해도, 실제 행동은 다른 물체를 집을 수 있습니다. SEAL은 하나의 중간 계획 아래에서 여러 행동 시퀀스를 생성하고, 다음 추론을 시작하는 토큰이 나올 때까지 각 시퀀스를 전개합니다. 따라서 평가 단위는 고정된 한 개의 action chunk보다 길 수 있으며, 계획에 따라 길이도 달라집니다.",
      "예측한 마지막 이미지와 초기 이미지, 계획 문장을 사전 학습된 VLM에 전달해 정합성을 평가합니다. 논문의 실험은 병렬 시뮬레이터로 결과를 예측하며, 실제 로봇에서는 이를 대신할 world model이나 digital twin이 필요합니다. 검증은 비동기로 수행해 먼저 통과한 후보를 실행할 수 있습니다. Steering 자체는 추가 학습이 없지만, 기반이 되는 π0-reason의 준비와 미래 예측 수단까지 불필요하다는 뜻은 아닙니다.",
    ],
    figure: { file: "seal-robotics", number: 1, page: 1, caption: "Textual plan에 조건화한 가변 길이 행동을 병렬 전개하고, 예측 결과가 계획을 실현하는지 VLM으로 확인합니다.", alt: "SEAL 원본 구조: reasoning VLA의 plan, 병렬 행동 시뮬레이션, VLM reasoning-action alignment verifier" },
    base: "π0-reason",
    addedTraining: "Steering 추가 학습 없음",
    compute: "계획별 후보·가변 길이 rollout",
  },
  {
    id: "sitcom",
    heading: "SITCOM: 행동 이후의 장면을 반복해서 예측합니다",
    takeaway: "현재 행동을 평가하는 범위를 여러 단계 뒤의 trajectory까지 확장합니다.",
    paragraphs: [
      "SITCOM은 VLA가 만든 행동을 dynamics model에 넣어 다음 이미지를 예측하고, 그 이미지에서 다시 행동을 생성합니다. 이 과정을 여러 단계 반복해 후보 trajectory를 구성한 뒤, 도착 상태의 보상이 높은 경로를 선택합니다. 후보 수와 rollout 길이가 각각 탐색의 폭과 깊이를 결정합니다.",
      "논문은 실제 시뮬레이터를 사용하는 EnvSim 방식과 학습한 dynamics model을 사용하는 방식을 구분합니다. 또한 평가에서 그리퍼·물체·목표 사이의 거리와 파지 여부처럼 시뮬레이터에서 얻는 보상 정보를 사용합니다. 따라서 이미지 예측기만 붙이면 같은 방식으로 실제 로봇에 배포할 수 있다고 해석해서는 안 됩니다. 반복 예측의 오차와 보상 정보의 가용성을 함께 고려해야 합니다.",
    ],
    figure: { file: "sitcom", number: 1, page: 2, caption: "VLA와 dynamics model을 반복 호출하여 경로를 만들고, 보상으로 경로를 선택하는 원본 파이프라인입니다.", alt: "SITCOM 원본 구조: policy, action samples, dynamics model의 반복 rollout과 simulator reward 기반 trajectory 선택" },
    base: "OpenVLA-SFT",
    addedTraining: "Dynamics model · 기반 정책 적응",
    compute: "후보 trajectory 수·예측 깊이",
  },
  {
    id: "dasip",
    heading: "DASIP: 현재 동작의 난이도에 맞춰 solver를 바꿉니다",
    takeaway: "후보를 늘리는 대신, 한 행동을 생성하는 수치 적분의 비용을 조절합니다.",
    paragraphs: [
      "DASIP는 장애물 없이 이동하는 구간과 정밀하게 접촉해야 하는 구간에 같은 추론 비용을 쓰지 않습니다. 관측으로부터 난이도를 분류한 뒤, 적분 step 수, Euler·Heun·RK4 같은 solver, ODE 또는 SDE 방식을 묶어 선택합니다. 난이도와 설정의 대응은 검증 실험에서 얻습니다.",
      "이 연구의 기반은 언어 조건부 VLA가 아닌 Stochastic Interpolant Policy(SIP)입니다. 따라서 VLA의 best-of-N 방법과 구분해, 생성형 로봇 정책의 적응적 계산량 배분 사례로 읽는 것이 적절합니다. 난이도 판단에는 학습한 CNN·VLM뿐 아니라 few-shot VLM 방식도 비교하므로, 분류기가 반드시 한 가지 학습 구조로 고정되는 것은 아닙니다.",
    ],
    figure: { file: "dasip", number: 2, page: 2, caption: "난이도 분류 결과가 SIP의 추론 설정을 결정하며, 실행 후 새로운 관측에서 다시 난이도를 판단합니다.", alt: "DASIP 원본 구조: difficulty classifier의 난이도 판단으로 Stochastic Interpolant Policy의 추론을 조절" },
    base: "SIP · VLA가 아닌 생성형 정책",
    addedTraining: "난이도 분류기 · few-shot 대안 있음",
    compute: "적분 step·solver·ODE/SDE",
  },
  {
    id: "cover-vla",
    heading: "CoVer-VLA: 지시문과 행동을 두 단계로 선택합니다",
    takeaway: "행동 샘플의 다양성을 언어 표현의 다양성까지 넓힙니다.",
    paragraphs: [
      "같은 뜻의 지시문도 표현에 따라 VLA가 생성하는 행동이 달라질 수 있습니다. CoVer-VLA는 시작 시 VLM으로 지시문을 여러 방식으로 바꾸어 쓰고, 각 표현에서 행동 후보를 생성합니다. 평가기는 시각·언어·행동을 contrastive learning으로 정렬하며, 실행 시에는 사용자의 원래 의도에 맞는지를 점수화합니다.",
      "선택은 모든 후보 중 최대 점수 하나를 바로 고르는 방식과 다릅니다. 먼저 각 지시문이 만든 후보들의 평균 점수로 지시문을 선택하고, 그 지시문 안에서 가장 높은 점수의 행동을 선택합니다. 언어 표현이 유도하는 행동 분포의 품질과 개별 행동의 품질을 나누어 보는 계층적 구조입니다.",
    ],
    figure: { file: "cover-vla", number: 2, page: 2, caption: "원본 그림의 왼쪽·중앙 패널입니다. 시작 시 지시문을 확장하고, 지시문 수준과 행동 수준을 나누어 검증합니다.", alt: "CoVer-VLA 원본 구조 일부: boot-time reasoning으로 rephrased prompts를 만들고 instruction optimization과 action verification을 수행" },
    base: "π0",
    addedTraining: "Contrastive verifier",
    compute: "지시문 수 × 행동 후보 수",
  },
  {
    id: "scale",
    heading: "SCALE: 불확실성에 따라 보는 범위와 행동 분포를 조절합니다",
    takeaway: "여러 후보를 비교하지 않고도, 한 번의 추론에서 지각과 행동 생성을 함께 조정합니다.",
    paragraphs: [
      "SCALE은 action token의 출력 분포에서 self-uncertainty를 계산합니다. 확신이 높은 상태에서는 decoding을 greedy에 가깝게 만들고, 불확실한 상태에서는 sampling temperature를 높여 다른 행동을 탐색합니다. 별도 verifier 학습 없이 모델 내부 신호를 사용한다는 점에서 MG-Select와 연결됩니다.",
      "차이는 시각 인코더까지 조절한다는 점입니다. 최근 불확실성의 이동 평균과 현재 값을 비교한 신호를 다음 제어 시점의 attention temperature에 반영해, 확신이 높을 때는 주의를 좁히고 불확실할 때는 넓힙니다. 여러 후보를 늘리는 전형적인 TTS와는 구분되는 single-pass 적응적 추론 방식입니다. 이때 ‘보는 범위’는 카메라를 움직인다는 뜻이 아니라 이미지 내부 attention의 분포를 의미합니다.",
    ],
    figure: { file: "scale", number: 2, page: 3, caption: "출력 분포의 불확실성이 action decoding과 다음 시점의 visual attention을 함께 조절합니다.", alt: "SCALE 원본 구조: self-uncertainty estimation, adaptive action decoding, visual attention temperature update의 피드백" },
    base: "OpenVLA 등 자기회귀 VLA",
    addedTraining: "없음",
    compute: "후보 1개 · decoding·attention 조절",
  },
  {
    id: "tapsampling",
    heading: "TapSampling: 후보 생성 비용과 평가 신호를 함께 바꿉니다",
    takeaway: "Action-VAE로 후보를 확장하고, 작업의 진전 정도를 예측해 행동을 선택합니다.",
    paragraphs: [
      "TapSampling은 소수의 정책 샘플을 Action-VAE의 잠재 분포로 인코딩한 뒤, 그 분포들의 mixture에서 추가 후보를 샘플링하고 복원합니다. 대형 정책을 반복 호출하는 비용을 줄이면서 행동 차원 사이의 관계를 학습된 표현에 담는 방식입니다. 잠재 벡터들을 단순히 평균내는 구조와는 다릅니다.",
      "Verifier는 해당 행동이 작업을 얼마나 진전시킬지 예측합니다. 시연에서 시간이 흐를수록 progress가 선형적으로 증가한다고 가정하고, 정방향 행동 시퀀스와 역방향 시퀀스로 양·음의 진전 신호를 만듭니다. 이 값은 관측된 실제 보상 자체가 아니라 시간 순서로 만든 supervision입니다. Action-VAE 기반 sampling은 선택 사항이며, 핵심 평가기는 정책이 직접 만든 후보에도 사용할 수 있습니다.",
    ],
    figure: { file: "tapsampling", number: 2, page: 3, caption: "위쪽은 잠재 분포를 통한 효율적 후보 생성이며, 아래쪽은 task progress 학습 데이터와 verifier입니다.", alt: "TapSampling 원본 구조: Action-VAE posterior mixture sampling과 task-progress prediction verifier" },
    base: "Diffusion Policy, OpenVLA, VPP, π 계열",
    addedTraining: "Progress verifier · 선택적 Action-VAE",
    compute: "정책 샘플 수·잠재 공간 후보 수",
  },
  {
    id: "vla-attc",
    heading: "VLA-ATTC: 두 행동이 다를 때 추가 계산을 시작합니다",
    takeaway: "추론을 더 수행할지 결정하는 단계와, 최종 행동을 선택하는 단계를 분리합니다.",
    paragraphs: [
      "VLA-ATTC는 매 제어 시점에 다른 random seed로 두 개의 action chunk를 생성합니다. 두 시퀀스를 Dynamic Time Warping(DTW)으로 비교해 차이가 작으면 즉시 실행하고, 차이가 크면 더 많은 후보를 생성하는 deliberation 단계로 전환합니다. 불확실성이 추가 계산을 켜는 스위치가 되는 구조입니다.",
      "추가 후보를 만들 때는 VLM의 문맥 특징을 공유해 반복 계산을 줄입니다. 이후 Relative Action Critic(RAC)이 행동 두 개 중 어느 쪽이 나은지 비교하고, 토너먼트 방식으로 후보를 줄입니다. 절대 점수 하나를 예측하는 방식과 달리 상대적인 선호도를 학습합니다. 시트의 ‘Relative Actor Critic’은 원문의 명칭인 ‘Relative Action Critic’으로 표기하였습니다.",
    ],
    figure: { file: "vla-attc", number: 3, page: 4, caption: "Uncertainty clutch가 후보 확장을 결정하고, 공유한 VLM 특징과 RAC의 쌍별 비교로 행동을 선택합니다.", alt: "VLA-ATTC 원본 구조: uncertainty trigger, shared context를 이용한 병렬 후보 생성, Relative Action Critic tournament selection" },
    base: "π0, π0.5",
    addedTraining: "Relative Action Critic",
    compute: "2개 후보로 판단 후 선택적 확장",
  },
  {
    id: "elastic",
    heading: "ELASTIC: 탐색의 폭과 정제의 깊이를 함께 학습합니다",
    takeaway: "Meta-policy가 각 후보의 denoising 진행량과 생존 여부를 결정합니다.",
    paragraphs: [
      "ELASTIC은 여러 후보를 병렬로 생성하는 계산과, 각 후보를 여러 단계에 걸쳐 정제하는 계산을 함께 다룹니다. Meta-policy는 현재 상태와 후보들의 중간 denoising 상태를 보고, 각 후보가 다음에 얼마만큼 진행할지 결정합니다. 진행량을 0으로 선택한 후보는 제거되므로, 병렬 후보 수와 순차적 계산 깊이가 동시에 달라집니다.",
      "이 meta-policy는 작업 가치에서 계산 비용을 뺀 보상으로 학습합니다. 순차 비용과 병렬 비용의 가중치를 조절하면 서로 다른 하드웨어·지연 제약을 반영할 수 있습니다. 동결된 기반 정책 위에서 ‘얼마나 오래, 몇 개를 계산할지’를 학습하는 구조이며, 완성된 후보 중 최종 행동을 고르는 Q-function도 사용합니다.",
    ],
    figure: { file: "elastic", number: 1, page: 2, caption: "원본 개념도에서 가로 방향은 순차적 정제, 세로 방향은 병렬 후보를 나타냅니다. 일부 경로는 중간에 제거됩니다.", alt: "ELASTIC 원본 그림: parallel sampling과 sequential denoising의 두 축, 후보 pruning, 최종 Q 평가" },
    base: "Diffusion Policy, π0.5",
    addedTraining: "Meta-policy · Q-function",
    compute: "후보별 denoising step·pruning",
  },
  {
    id: "e-tts",
    heading: "E-TTS: 추론과 행동을 함께 평가하고 다시 시도합니다",
    takeaway: "행동 선택에 계획의 품질, 실행 이력, 실패에 대한 언어 피드백을 결합합니다.",
    paragraphs: [
      "E-TTS는 여러 reasoning 후보와 각 reasoning에 조건화된 행동 후보를 생성합니다. Reasoning verifier는 계획의 타당성을 평가하고, 별도로 학습한 action verifier는 행동의 적절성을 평가합니다. 두 점수를 결합해 추론과 행동의 쌍을 선택하며, history buffer에는 최근 관측과 선택한 추론·행동을 보관합니다.",
      "모든 조합을 끝까지 계산하지 않고 충분한 점수를 얻으면 실행할 수 있습니다. 한 배치에 적절한 후보가 없으면 reasoning verifier가 문제를 설명하는 텍스트 피드백을 만들고, 이를 지시에 더해 다시 샘플링합니다. SEAL이 주어진 계획과 예상 결과의 정합성을 검사한다면, E-TTS는 계획 자체도 선택·수정 대상으로 확장합니다. 추론 중 프롬프트를 수정하는 과정과 모델 가중치를 다시 학습하는 과정은 구분해야 합니다.",
    ],
    figure: { file: "e-tts", number: 2, page: 5, caption: "추론·행동의 공동 샘플링, 이력을 활용한 검증, 피드백에 따른 재생성이 연결되는 원본 구조입니다.", alt: "E-TTS 원본 구조: joint reasoning-action sampling, history-aware verification, adaptive selection, feedback refinement" },
    base: "E-CoT, Embodied-R1, MolmoAct, π0.5",
    addedTraining: "Action verifier · reasoning VLM 활용",
    compute: "추론 수 × 행동 수·재시도 횟수",
  },
  {
    id: "sva",
    heading: "SVA: 탐색의 결과를 가벼운 평가기로 옮깁니다",
    takeaway: "장기 결과를 탐색하는 비용은 학습 데이터 생성에 쓰고, 배포 시에는 Q-model로 후보를 평가합니다.",
    paragraphs: [
      "SVA는 Search, Value, Act의 세 단계로 구성됩니다. 먼저 시뮬레이션의 Monte-Carlo Tree Search(MCTS)로 동결된 정책의 후보를 탐색하고 return을 수집합니다. 다음으로 그 결과를 Q-model에 distillation합니다. 배포 시에는 정책이 후보를 만들고 이 평가기가 선택하므로, 각 제어 시점에 시뮬레이터로 미래를 다시 전개할 필요가 없습니다.",
      "선택 점수에는 여러 Q 예측의 평균뿐 아니라 예측 간 불일치에 대한 penalty, 후보 분포의 prior가 들어갈 수 있습니다. 이 글은 2026년 10월 개정판(v2)을 기준으로 하며, 연속 행동에서도 후보를 군집화해 prior를 구성하는 선택지를 포함합니다. 시트의 ‘manipulation에서는 prior를 사용하지 않음’을 모든 버전에 공통인 규칙으로 일반화하지 않았습니다.",
    ],
    figure: { file: "sva", number: 3, page: 5, caption: "왼쪽의 시뮬레이션 탐색 결과를 가운데 Q-model에 학습시키고, 오른쪽의 실행 단계에서는 평가기만 사용합니다.", alt: "SVA 개정판 원본 구조: MCTS Search, Q-value distillation, frozen VLA candidate evaluation and action" },
    base: "π0·π0.5 등 · 고수준 행동도 평가",
    addedTraining: "탐색 return을 학습한 Q-model",
    compute: "정책 후보 수·평가 후보 수",
  },
];

export const ttsGroups: {
  id: string;
  label: string;
  title: string;
  introduction: string;
  methods: TtsMethodId[];
}[] = [
  {
    id: "selection",
    label: "좋은 행동의 평가 기준",
    title: "같은 후보도 무엇으로 평가하느냐에 따라 선택이 달라집니다",
    introduction: "가장 기본적인 형태는 여러 행동을 제안받고 그중 하나를 선택하는 것입니다. 이때 중요한 차이는 후보 수보다 ‘좋은 행동’을 정의하는 신호에 있습니다.",
    methods: ["v-gps", "robomonkey", "mg-select"],
  },
  {
    id: "proposals",
    label: "후보의 다양성과 생성 비용",
    title: "더 다양한 후보를 더 적은 비용으로 만듭니다",
    introduction: "평가기의 성능이 좋아도 후보 안에 적절한 행동이 없으면 선택만으로 문제를 해결하기 어렵습니다. 다음 두 연구는 지시문과 잠재 공간을 이용해 후보를 만드는 방식 자체를 바꿉니다.",
    methods: ["cover-vla", "tapsampling"],
  },
  {
    id: "lookahead",
    label: "미래 결과와 장기 가치",
    title: "행동의 모양에서 행동 이후의 결과로 평가 범위를 넓힙니다",
    introduction: "지금 그럴듯한 행동이 몇 단계 뒤의 성공을 보장하지는 않습니다. 미래를 실행 전에 전개하는 방법과, 탐색에서 얻은 지식을 평가기에 미리 학습시키는 방법을 구분해 볼 수 있습니다.",
    methods: ["seal", "sitcom", "sva"],
  },
  {
    id: "reasoning",
    label: "추론과 행동의 공동 개선",
    title: "무엇을 할지에 대한 추론까지 선택하고 수정합니다",
    introduction: "추론형 VLA에서는 행동뿐 아니라 그 행동을 유도한 중간 계획도 잘못될 수 있습니다. 이 경우에는 계획과 행동을 함께 평가하는 구조가 필요합니다.",
    methods: ["e-tts"],
  },
  {
    id: "adaptive-compute",
    label: "필요한 순간의 계산량 배분",
    title: "계산량을 모든 제어 시점에 동일하게 쓰지 않습니다",
    introduction: "물체에 접근하는 동작과 접촉 직전의 미세 조정은 요구하는 정밀도가 다릅니다. 추가 계산의 효과와 지연 비용을 함께 고려하면, 계산량을 언제 늘리고 어디서 줄일지가 별도의 의사결정 문제가 됩니다.",
    methods: ["dasip", "scale", "vla-attc", "elastic"],
  },
];
