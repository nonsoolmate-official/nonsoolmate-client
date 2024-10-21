import editImage from "@assets/image/landing_feature1_1.png";
import reEditImage from "@assets/image/landing_feature1_2.png";
import { columnFlex } from "style/commonStyle";
import theme from "style/theme";
import styled from "styled-components";
import Content from "./Content";
import Title from "./Title";

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
        title="첨삭 강사는 투명하게"
        description="첨삭 조교의 전문성을 알기 어려운 대형 학원의 문제를 해결하고자, 논술메이트는 목표대학에 기반한 전문 첨삭 강사를
        투명하게 배정합니다."
        image={editImage}
      />
      <Content
        num="02"
        title="재첨삭으로 더 꼼꼼하게"
        description="기존의 형식적인 일회성 첨삭에 그치지 않고, 첨삭 내용을 반영해서 답안을 수정하는 재첨삭으로 답안을
            체화합니다."
        image={reEditImage}
      />
    </TestFeatureContainer>
  );
}

const TestFeatureContainer = styled.section`
  ${columnFlex};

  background-color: ${theme.colors.grey_50};
`;
