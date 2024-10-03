import useGetProfile from "@pages/mypage/hooks/useGetProfile";
import { useCallback, useState } from "react";

type Input = "name" | "gender" | "email" | "birthday" | "phoneNumber";

export default function useMemberInfo() {
  const response = useGetProfile();

  if (!response) console.error();

  const [input, setInput] = useState({
    name: response?.data?.name,
    gender: response?.data?.gender,
    birthday: response?.data?.birthday,
    email: response?.data?.email,
    phoneNumber: response?.data?.phoneNumber,
  });

  const handleChangeInput = useCallback((key: Input, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return {
    input,
    handleChangeInput,
  };
}
