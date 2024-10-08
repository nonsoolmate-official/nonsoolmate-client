import { PassIc } from "@assets/index";
import UnivChip from "@components/univChip/UnivChip";
import { MENTOR } from "@pages/mypage/constants/dummy";
import styled from "styled-components";

export default function Mentor() {
  return (
    <MentorWrapper>
      <Title>담당 선생님</Title>
      <Discription> {MENTOR.student}님의 목표대학에 가장 적합한 선생님이에요</Discription>
      <MentorInfoLayout>
        <MentorProfileContainer>
          <Profile src={MENTOR.teacher.profile} />
          <MentorProfileBox>
            <Name>{MENTOR.teacher.name} 선생님</Name>
            {MENTOR.teacher.isPass && (
              <Badge>
                <PassIc />
                논술 합격 인증
              </Badge>
            )}
          </MentorProfileBox>
        </MentorProfileContainer>
        <Divider />
        <MentorInfoContainer>
          <SubTitle>선생님 소개</SubTitle>
          <Content>{MENTOR.discription}</Content>
        </MentorInfoContainer>
        <MentorInfoContainer>
          <SubTitle>첨삭 전문 대학교</SubTitle>
          <Content>
            <UnivChipBox>
              {MENTOR.universities.map((univ, index) => (
                <UnivChip key={index} logo={univ.logo}>
                  {univ.name}
                </UnivChip>
              ))}
            </UnivChipBox>
          </Content>
        </MentorInfoContainer>
      </MentorInfoLayout>
    </MentorWrapper>
  );
}

const MentorWrapper = styled.div`
  width: 100%;

  padding: 2.4rem 21.5rem 30.8rem 2.4rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};

  margin-bottom: 0.8rem;
`;

const Discription = styled.div`
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.grey_500};
  ${({ theme }) => theme.fonts.Body6};
`;

const MentorInfoLayout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

  gap: 1.6rem;
`;

const MentorProfileContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 1.2rem;
`;

const Profile = styled.img`
  width: 6rem;
  height: 6rem;

  object-fit: cover;
`;

const MentorProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Body1};
`;

const Badge = styled.div`
  display: flex;

  padding: 0.4rem 0.8rem 0.4rem 0.4rem;

  border-radius: 0.4rem;

  align-items: center;

  gap: 0.8rem;

  color: ${({ theme }) => theme.colors.main_blue};
  background-color: ${({ theme }) => theme.colors.light_blue};

  ${({ theme }) => theme.fonts.Caption1};
`;

const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;

  margin: 0;

  border: none;

  background-color: ${({ theme }) => theme.colors.grey_200};
`;

const MentorInfoContainer = styled.div``;

const SubTitle = styled.h3`
  ${({ theme }) => theme.fonts.Body3};
`;

const Content = styled.p`
  margin-top: 0.8rem;
  ${({ theme }) => theme.fonts.Body4};

  word-break: keep-all;
`;

const UnivChipBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
