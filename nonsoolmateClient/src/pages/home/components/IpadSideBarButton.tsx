import styled from "styled-components";
import {
  StudyActiveIc,
  StudyDisabledIc,
  PracticeActiveIc,
  PracticeDisabledIc,
  TestActiveIc,
  TestDisabledIc,
  MembershipDisabledIc,
} from "@assets/index";

interface IpadSideBarButtonProps {
  handleClick: () => void;
  currentPage: string;
  pageType: "study" | "practice" | "test" | "membership";
  buttonText: string;
}

export default function IpadSideBarButton(props: IpadSideBarButtonProps) {
  const { handleClick, currentPage, pageType, buttonText } = props;

  const isActive = currentPage === pageType;

  const icons = {
    study: {
      active: <StudyActiveIcon />,
      disabled: <StudyDisabledIcon />,
    },
    practice: {
      active: <PracticeActiveIcon />,
      disabled: <PracticeDisabledIcon />,
    },
    test: {
      active: <TestActiveIcon />,
      disabled: <TestDisabledIcon />,
    },
    membership: {
      active: <MembershipDisabledIcon />,
      disabled: <MembershipDisabledIcon />,
    },
  };

  return (
    <ButtonBox type="button" onClick={handleClick}>
      {isActive ? icons[pageType].active : icons[pageType].disabled}
      <Text $isActive={isActive}>{buttonText}</Text>
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
`;

const Text = styled.h3<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.main_blue : theme.colors.grey_400)};
`;

const StudyActiveIcon = styled(StudyActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const StudyDisabledIcon = styled(StudyDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const PracticeActiveIcon = styled(PracticeActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const PracticeDisabledIcon = styled(PracticeDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const TestActiveIcon = styled(TestActiveIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const TestDisabledIcon = styled(TestDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;

const MembershipDisabledIcon = styled(MembershipDisabledIc)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
`;
