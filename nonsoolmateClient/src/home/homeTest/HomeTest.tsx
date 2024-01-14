import HomeTestUnset from "./HomeTestUnset";
import HomeTestSet from "./HomeTestSet";
import UniversityModal from "home/components/UniversityModal";
import { useState } from "react";

export default function HomeTest() {
  const [universityModal, setUniversityModal] = useState<boolean>(false);
  const [selectedUniversityIdList, setSelectedUniversityIdList] = useState<number[]>([]);
  const [mySelectedUniversityId, setMySelectedUniversityId] = useState<number[]>([]);

  function handleUniversityModal(open: boolean) {
    setUniversityModal(open);
  }

  function handleSelectedUniversityIdList(idList: number[]) {
    setSelectedUniversityIdList(idList);
  }
  function handleMySelectedUniversityIdList(idList: number[]) {
    setMySelectedUniversityId(idList);
  }

  return (
    <>
      {mySelectedUniversityId.length > 0 ? (
        <HomeTestSet handleUniversityModal={handleUniversityModal} mySelectedUniversityId={mySelectedUniversityId} />
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
          mySelectedUniversityId={mySelectedUniversityId}
        />
      )}
    </>
  );
}
