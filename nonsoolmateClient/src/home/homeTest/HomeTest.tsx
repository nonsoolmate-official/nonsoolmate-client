import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/UniversityModal";
import { useState, useEffect } from "react";
import useGetSelectUniversityExams from "home/hooks/useGetSelectUniversityExams";
import { useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import styled from "styled-components";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);
  const [mySelectedUniversityIdList, setMySelectedUniversityIdList] = useState<number[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const [showToast, setShowToast] = useState(location.state?.testSubmitted);

  useEffect(() => {
    if (location.state?.testSubmitted) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/home/test", { state: {} });
      }, 2000);
    }
  }, [showToast, navigate]);

  useEffect(() => {
    let realArray = response?.map((item) => item.universityId);
    realArray && handleMySelectedUniversityIdList(realArray);
  }, []);

  const response = useGetSelectUniversityExams();
  if (!response) return <></>;

  const dataUniversityIds = response.map((item) => item.universityId);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIdList(idList: number[]) {
    setSelectedUniversityIdList(idList);
  }

  function handleMySelectedUniversityIdList(idList: number[]) {
    setMySelectedUniversityIdList(idList);
  }

  return (
    <>
      {response.length > 0 ? (
        <HomeTestSet
          handleUniversityModal={handleUniversityModal}
          response={response}
          dataUniversityIds={dataUniversityIds}
        />
      ) : (
        <HomeTestUnset handleUniversityModal={handleUniversityModal} />
      )}
      {universityModal && (
        <UniversityModal
          isSelectedNone={selectedUniversityIdList.length === 0 && true}
          selectedUniversityIdList={selectedUniversityIdList}
          handleMySelectedUniversityIdList={handleMySelectedUniversityIdList}
          handleUniversityModal={handleUniversityModal}
          handleSelectedUniversityIdList={handleSelectedUniversityIdList}
          mySelectedUniversityIdList={mySelectedUniversityIdList}
          dataUniversityIds={dataUniversityIds}
        />
      )}
      {showToast && createPortal(<Toast>시험답안이 제출되었습니다.</Toast>, document.getElementById("toast-root")!)}
    </>
  );
}
const Toast = styled.p`
  display: inline-flex;
  align-items: center;
  position: fixed;
  top: 7.6rem;
  right: 1.6rem;
  padding: 1rem 3.2rem;
  border-radius: 8px;
  background-color: rgb(65 70 84 / 80%);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Body3};
`;
