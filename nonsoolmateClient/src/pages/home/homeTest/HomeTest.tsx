import HomeTestSet from "./HomeTestSet";
import HomeTestUnset from "./HomeTestUnset";

import { useEffect, useState } from "react";
import TakeTestModal from "../components/TakeTestModal";
import UniversityModal from "../components/UniversityModal";
import useGetSelectUniversityExams from "../hooks/useGetSelectUniversityExams";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);
  const [mySelectedUniversityIdList, setMySelectedUniversityIdList] = useState<number[]>([]);
  const [isTakeTestClicked, setIsTakeTestClicked] = useState<boolean>(false);
  const [selectedExamId, setSelectedExamId] = useState<number | undefined>(undefined);
  const { data: response, refetch } = useGetSelectUniversityExams();

  useEffect(() => {
    let realArray = response?.map((item) => item.collegeId);
    realArray && handleMySelectedUniversityIdList(realArray);
  }, []);

  //response가 바뀔 때마다 refetch
  useEffect(() => {
    refetch();
  }, [response, refetch]);

  if (!response) return <></>;
  const dataUniversityIds = response.map((item) => item.collegeId);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIdList(idList: number[]) {
    setSelectedUniversityIdList(idList);
  }

  function handleMySelectedUniversityIdList(idList: number[]) {
    setMySelectedUniversityIdList(idList);
  }

  function handleTakeTestModal(examId?: number) {
    setSelectedExamId(examId);
    setIsTakeTestClicked((prev) => !prev);
  }

  return (
    <>
      {response.length > 0 ? (
        <HomeTestSet
          handleUniversityModal={handleUniversityModal}
          response={response}
          dataUniversityIds={dataUniversityIds}
          handleTakeTestModal={handleTakeTestModal}
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
      {isTakeTestClicked && selectedExamId !== undefined && (
        <TakeTestModal examId={selectedExamId} handleTakeTestModal={() => handleTakeTestModal()} />
      )}
    </>
  );
}
