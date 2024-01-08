import styled from "styled-components";
import { columnFlex, commonFlex } from "style/commonStyle";
import { BorderIc } from "@assets/index";
import SideBarStudyButton from "./SideBarStudyButton";
import SideBarPracticeButton from "./SideBarPracticeButton";
import SideBarTestButton from "./SideBarTestButton";

export default function HomeSide() {
  return (
    <Side>
      <SideHeader>
        <SideHeaderHello>안녕하세요!</SideHeaderHello>
        <SideHeaderBox>
          <SideHeaderId>류가은</SideHeaderId>
          <SideHeaderText>님</SideHeaderText>
        </SideHeaderBox>
      </SideHeader>
      <SideBar>
        <SideBarStudyButton />
        <BorderIcon />
        <SideBarPracticeButton />
        <BorderIcon />
        <SideBarTestButton />
      </SideBar>
    </Side>
  );
}

const Side = styled.aside`
  ${columnFlex};

  gap: 2rem;
  justify-content: space-between;
  position: sticky;
  padding: 2.4rem 2.4rem 0 21.5rem;
`;

const SideHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 19.2rem;
`;

const SideHeaderHello = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideHeaderBox = styled.section`
  ${commonFlex};

  justify-content: space-between;
  padding-right: 10rem;
`;

const SideHeaderId = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};

  color: ${({ theme }) => theme.colors.main_blue};
`;

const SideHeaderText = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideBar = styled.section`
  gap: 0.2rem;
  width: 19.2rem;
`;

const BorderIcon = styled(BorderIc)`
  padding: 0;
`;
