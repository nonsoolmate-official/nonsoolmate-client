import { useState } from "react";

import { ChangeEvent } from "react";

function useLoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return {
    id,
    pw,
    handleChangeId,
    handleChangePw,
  };
}

export default useLoginForm;
