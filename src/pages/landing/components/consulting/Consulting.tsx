import applyUnivConsulting from "@assets/image/applyUnivConsulting.png";
import img from "@assets/image/careServiceImg.png";
import universitiesBg from "@assets/image/universitiesBg.png";
import styled from "styled-components";
import ConsultingText from "./ConsultingText";

export default function Consulting() {
  return (
    <Wrapper>
      <ConsultingServiceLayout>
        <ConsultingServiceContainer>
          <ConsultingText
            category="논술전형 지원 대학 컨설팅"
            subtitle="학교, 입시정보 사이트에서도 알려주지 않는
          나에게 가장 유리한 대학 논술을 알려드려요"
            content="제일 까다로운 논술전형 지원, 더 이상 혼자 막막해하지 마세요.
          논술메이트가 가장 유리하고 적합한 대학을 알려드려요."
          />
          <ApplyUnivConsulting src={applyUnivConsulting} alt={"apply-univ-consulting"} />
        </ConsultingServiceContainer>
        <Universities src={universitiesBg} />
      </ConsultingServiceLayout>
      <CareServiceLayout>
        <ConsultingText
          category="입시 불안감을 해소해 줄 1:1 케어 서비스"
          subtitle="나만의 밀착 과외를 받을 수 있어요"
          content="학원보다 자유로운 실시간 질의응답과 과외보다 체계적인 학생 관리,
          오직 논술메이트에서 만나볼 수 있어요."
        />
        <CareServiceImg src={img} alt="care-service-example" />
      </CareServiceLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.2rem;
  background-color: ${({ theme }) => theme.colors.grey_1100};
`;

const ConsultingServiceLayout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ConsultingServiceContainer = styled.div`
  display: flex;
  gap: 8.4rem;
  justify-content: space-between;
  padding: 12.8rem 21.5rem 0;
`;

const ApplyUnivConsulting = styled.img`

  z-index: 1;
  width: 37.1rem;
  height: 48.2rem;
  object-fit: cover;
`;

const Universities = styled.img`
  position: absolute;
  top: 75%;
  left: 50%;
  z-index: 0;
  width: 131.3rem;
  height: 25.6rem;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

const CareServiceLayout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 21.5rem;
`;

const CareServiceImg = styled.img`

  align-self: center;
  width: 93.6rem;
  height: 48.8rem;
  object-fit: cover;
`;
