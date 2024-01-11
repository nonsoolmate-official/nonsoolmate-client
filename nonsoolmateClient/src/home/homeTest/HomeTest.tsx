import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/modal/UniversityModal";
import { useState } from "react";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIdList(idList: number[]) {
    setSelectedUniversityIdList(idList);
  }
  return (
    <>
      {selectedUniversityIdList.length > 0 ? (
        <HomeTestSet
          selectedUniversityIdList={selectedUniversityIdList}
          handleUniversityModal={handleUniversityModal}
        />
      ) : (
        <HomeTestUnset handleUniversityModal={handleUniversityModal} />
      )}
      {universityModal && (
        <UniversityModal
          selectedUniversityIdList={selectedUniversityIdList}
          handleUniversityModal={handleUniversityModal}
          handleSelectedUniversityIdList={handleSelectedUniversityIdList}
        />
      )}
    </>
  );
}
