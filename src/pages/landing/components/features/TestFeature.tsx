import editImage from "@assets/image/landing_feature1_1.png";
import reEditImage from "@assets/image/landing_feature1_2.png";
import { columnFlex } from "style/commonStyle";
import theme from "style/theme";
import styled from "styled-components";
import Content from "../common/Content";
import Title from "../common/Title";

export default function TestFeature() {
  return (
    <TestFeatureContainer>
      <Title
        icType="test"
        mainTitle="논술의 핵심은 첨삭이니까"
        subTitle="논술메이트의 전문 강사와 재첨삭으로 합격 가능성을 확실하게 높여요"
      />
      <Content
        num="01"
        title="첨삭 강사는 목표 대학에 맞게"
        description="첨삭 조교의 전문성을 알기 어려운 대형 학원의 문제를 해결하고자,
        논술메이트는 목표대학에 기반한
        전문 첨삭 강사를 투명하게 배정합니다."
        image={editImage}
      />
      <Content
        num="02"
        title="재첨삭으로 확실한 실력 상승"
        description="기존의 비대면 첨삭은 형식적인 일회성 첨삭에 그치는
        경우가 대부분이었어요. 첨삭 내용을 반영해서 다시
        써보아야만 합격 답안을 온전히 체화할 수 있습니다."
        image={reEditImage}
      />
    </TestFeatureContainer>
  );
}

const TestFeatureContainer = styled.section`
  ${columnFlex};

  background-color: ${theme.colors.grey_50};
`;
