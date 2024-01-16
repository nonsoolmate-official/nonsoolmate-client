import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/UniversityModal";
import { useState, useEffect } from "react";
import useGetSelectUniversityExams from "home/hooks/useGetSelectUniversityExams";
import Error from "error";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);
  const [mySelectedUniversityIdList, setMySelectedUniversityIdList] = useState<number[]>([]);

  useEffect(() => {
    let realArray = response?.map((item) => item.universityId);
    realArray && handleMySelectedUniversityIdList(realArray);
  }, []);

  const response = useGetSelectUniversityExams();
  if (!response) return <Error />;
  console.log(response);

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
    </>
  );
}
