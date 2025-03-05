import styled from "styled-components";
import { ASSIGN } from "../constants/table";
import { useState } from "react";

export default function AssignBtn() {
  const [assignTxt, setAssignTxt] = useState("선택");
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleSelection = () => {
    setModalDisplay((prev) => !prev);
  };

  const handleAssign = (event: React.MouseEvent, data: string) => {
    event.stopPropagation();
    setAssignTxt(data);
    setModalDisplay(false);
  };

  return (
    <Wrapper onClick={handleSelection} $assignTxt={assignTxt}>
      {assignTxt}
      <Modal $modalDisplay={modalDisplay}>
        {ASSIGN.map((assign, index) => (
          <Data key={index} onClick={(e) => handleAssign(e, `${assign.NAME}(${assign.UNI})`)}>
            {`${assign.NAME}(${assign.UNI})`}
          </Data>
        ))}
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $assignTxt: string }>`
  position: relative;
  width: 100%;
  padding: ${({ $assignTxt }) => ($assignTxt === "선택" ? "0.4rem 4rem" : "0.4rem 0")};
  border: 1px solid ${({ theme, $assignTxt }) => ($assignTxt === "선택" ? theme.colors.grey_500 : "none")};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Body6};

  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Modal = styled.div<{ $modalDisplay: boolean }>`
  display: ${({ $modalDisplay }) => ($modalDisplay ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  max-height: 160px;
  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
`;

const Data = styled.button`
  display: flex;
  width: 100%;
  padding: 0.8rem;
  ${({ theme }) => theme.fonts.Body8};

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_100};
  }

  &:focus {
    outline: none;
  }
`;
