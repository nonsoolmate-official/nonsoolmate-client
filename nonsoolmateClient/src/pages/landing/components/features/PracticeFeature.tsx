import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Title from "./Title";
import Content from "./Content";
import practiceImage1 from "@assets/image/landing_feature2_1.png";
import practiceImage2 from "@assets/image/landing_feature2_2.png";

export default function PracticeFeature() {
  return (
    <PracticeFeatureContainer>
      <Title
        icType="practice"
        mainTitle="기초부터 차근차근 다지니까"
        subTitle="8년차 논술 전문 강사가 개발한 유형별 연습문제로 기초부터 확실하게 학습해요"
        caution="* 학습에 최적화된 화면을 구성 중에 있으며, 현재는 학생분들의 풀이 편의를 위해 문서 형태로 제공될 예정입니다."
      />
      <Content
        num="01"
        title="유형별, 주제별로 정확하게"
        description="논술 전형에서 다루어지는 모든 유형과 주제를
한 번에 학습하세요."
        image={practiceImage1}
      />
      <Content
        num="02"
        title="채점 기준까지 철저하게"
        description="선생님의 첨삭을 수동적으로 받는 것에서 나아가,
연습문제 자가채점으로 답안 개선 효과를 경험하세요."
        image={practiceImage2}
      />
    </PracticeFeatureContainer>
  );
}

const PracticeFeatureContainer = styled.section`
  ${columnFlex};
`;
