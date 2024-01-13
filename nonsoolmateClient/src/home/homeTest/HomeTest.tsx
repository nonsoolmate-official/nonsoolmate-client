import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/UniversityModal";
import { useState } from "react";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);
  const [test, setTest] = useState<number[]>([]);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIdList(idList: number[]) {
    setSelectedUniversityIdList(idList);
  }
  return (
    <>
      {test.length > 0 ? (
        <HomeTestSet
          handleUniversityModal={handleUniversityModal}
          test={test}
        />
      ) : (
        <HomeTestUnset handleUniversityModal={handleUniversityModal} />
      )}
      {universityModal && (
        <UniversityModal
          isSelectedNone={selectedUniversityIdList.length === 0 && true}
          selectedUniversityIdList={selectedUniversityIdList}
          setTest={setTest}
          handleUniversityModal={handleUniversityModal}
          handleSelectedUniversityIdList={handleSelectedUniversityIdList}
          test={test}
        />
      )}
    </>
  );
}
