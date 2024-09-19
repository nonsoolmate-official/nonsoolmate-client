import { Curri1Ic, Curri2Ic, Curri3Ic, Curri4Ic, Curri5Ic } from "@assets/index";

export interface CurriculumTypes {
  id: number;
  label: string;
  title_1: string;
  title_2: string;
  details: string;
  iconSrc: string;
}

export const CURRICULUMS: CurriculumTypes[] = [
  {
    id: 1,
    label: "첨삭",
    title_1: "목표 대학에 맞는",
    title_2: "시험과 첨삭",
    details:
      "목표 대학 전문 강사님의 1:1 첨삭을 받아 보세요. 하나의 대학에 국한되지 않아 여러 대학의 시험과 첨삭을 시도해볼 수 있어요.",
    iconSrc: Curri1Ic,
  },
  {
    id: 2,
    label: "재첨삭",
    title_1: "실력은 첨삭이 아니라",
    title_2: "재첨삭에서 오른다",
    details:
      "단순히 첨삭을 받았다고 실력이 오르지 않아요. 첨삭받은 내용을 바탕으로 답안을 다시 작성해보고 검토받으세요.",
    iconSrc: Curri2Ic,
  },
  {
    id: 3,
    label: "연습문제",
    title_1: "유형별/주제별",
    title_2: "약점 집중보완",
    details:
      "유난히 어려운 유형이나 주제가 있나요? 9가지 유형과 4가지 주제로 나뉜 연습 문제로 실전 시험만으로 채워지지 않는 기본기를 다져보세요.",
    iconSrc: Curri3Ic,
  },
  {
    id: 4,
    label: "지원 대학 컨설팅",
    title_1: "합격할 확률",
    title_2: "높은 대학 찾기",
    details: "아직 어느 대학을 지원할지 정하지 못했나요? 논술메이트가 가장 유리하고 적합한 대학을 알려드려요.",
    iconSrc: Curri4Ic,
  },
  {
    id: 5,
    label: "1:1 케어 서비스",
    title_1: "1:1 질의응답으로",
    title_2: "학생 밀착 관리",
    details:
      "모르는 부분이 있을 때는 1:1 질의응답을 통해 담당 선생님께 여쭤볼 수 있어요. 과외식 학생 밀착 관리를 통해 빈틈없이 실력을 채워요.",
    iconSrc: Curri5Ic,
  },
];
