import lottieReason1Reset from "@assets/lottie/Landing-reason01-reset.json";
import lottieReason1 from "@assets/lottie/Landing-reason01.json";
import lottieReason2Reset from "@assets/lottie/Landing-reason02-reset.json";
import lottieReason2 from "@assets/lottie/Landing-reason02.json";
import lottieReason3Reset from "@assets/lottie/Landing-reason03-reset.json";
import lottieReason3 from "@assets/lottie/Landing-reason03.json";
import lottieReason4Reset from "@assets/lottie/Landing-reason04-reset.json";
import lottieReason4 from "@assets/lottie/Landing-reason04.json";
import lottieReason5Reset from "@assets/lottie/Landing-reason05-reset.json";
import lottieReason5 from "@assets/lottie/Landing-reason05.json";
import lottieReason6Reset from "@assets/lottie/Landing-reason06-reset.json";
import lottieReason6 from "@assets/lottie/Landing-reason06.json";
import { ReasonListType } from "../../landing/types/reasonListType";

export const REASON_LIST: ReasonListType[] = [
  {
    title: "학원보다 많은 데이터",
    summary: "전국의 논술학습 데이터를 모두 모아",
    summary2: "논술메이트에서 한번에!",
    lottie: lottieReason1,
    lottieReset: lottieReason1Reset,
  },
  {
    title: "나에게 맞춤형 첨삭",
    summary: "논술메이트의 논술연구소가 제공하는",
    summary2: "개인화된 첨삭 및 코칭",
    lottie: lottieReason2,
    lottieReset: lottieReason2Reset,
  },
  {
    title: "학원보다 75% 낮은 가격",
    summary: "한달에 50만원이 넘는 학원비가 아깝다면?",
    summary2: "10만원 대의 논술메이트가 정답!",
    lottie: lottieReason3,
    lottieReset: lottieReason3Reset,
  },
  {
    title: "시공간적 제약 X",
    summary: "이동시간에도 논술 공부를 하고 싶다면?",
    summary2: "논술메이트에서 간편하게!",
    lottie: lottieReason4,
    lottieReset: lottieReason4Reset,
  },
  {
    title: "체계적인 커리큘럼",
    summary: "학교별 출제/체점 성향 분석부터 기출 해제,",
    summary2: "풀이 채점까지",
    lottie: lottieReason5,
    lottieReset: lottieReason5Reset,
  },
  {
    title: "꾸준한 학습",
    summary: "장기적으로 제공되는 학습자료, 개인별",
    summary2: "진도체크와 개인화된 학습 분석·관리 시스템",
    lottie: lottieReason6,
    lottieReset: lottieReason6Reset,
  },
];
