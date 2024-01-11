import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/modal/UniversityModal";
import { useState } from "react";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIds, setSelectedUniversityIds] = useState<number[]>([]);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIds(IDs: number[]) {
    setSelectedUniversityIds(IDs);
  }
  return (
    <>
      {selectedUniversityIds.length > 0 ? (
        <HomeTestSet selectedUniversityIds={selectedUniversityIds} handleUniversityModal={handleUniversityModal} />
      ) : (
        <HomeTestUnset handleUniversityModal={handleUniversityModal}/>
      )}
      {universityModal && (
        <UniversityModal
          selectedUniversityIds={selectedUniversityIds}
          handleUniversityModal={handleUniversityModal}
          handleSelectedUniversityIds={handleSelectedUniversityIds}
        />
      )}
    </>
  );
}
