import practiceImage1 from "@assets/image/landing_feature2_1.png";
import practiceImage2 from "@assets/image/landing_feature2_2.png";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Content from "../common/Content";
import Title from "../common/GuideLayout";

export default function PracticeFeature() {
  return (
    <PracticeFeatureContainer>
      <Title
        icType="practice"
        badge="연습문제"
        mainTitle="전국의 수많은 문제들 모두 
        논술메이트에서 만나보세요"
        subTitle="문제를 최대한 많이 풀어보고 싶은데 어디서 찾아야 할 지 막막하시죠.
바쁜 수험생활, 더 이상 논술 자료 찾느라 시간 낭비하지 마세요."
        caution="* 학습에 최적화된 화면을 구성 중에 있으며, 현재는 학생분들의 풀이 편의를 위해 문서 형태로 제공될 예정입니다."
      />
      <Content
        num="01"
        title="유형별 개인 맞춤형 학습 진행"
        description="인문논술 전형에서 다루어지는 모든 유형과 주제를
모두 학습할 수 있어요. 대학에서 검증된 제시문들
만으로 제작된 문제들을 지금 바로 풀어보세요."
        image={practiceImage1}
      />
      <Content
        num="02"
        title="실제 연구를 기반으로 찾아낸 근거 있는 학습법"
        description={
          "실제 학생들을 대상으로 논제, 내용, 표현 모든 면에서 실력 상승, 1회 만으로 약 37.9% 답안 개선 효과가 입증된 자기첨삭 활동 학습법을 찾아냈어요."
        }
        image={practiceImage2}
      />
    </PracticeFeatureContainer>
  );
}

const PracticeFeatureContainer = styled.section`
  ${columnFlex};
`;
