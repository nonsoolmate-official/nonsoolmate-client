import { DataTypes } from "@pages/mypage/api/getProfile";
import { AxiosResponse } from "axios";
import { ERROR_MESSAGE } from "constants/errorMessage";
import { useCallback, useEffect, useState } from "react";

type Input = "name" | "gender" | "email" | "birthday" | "phoneNumber";

export default function useMemberInfo(response: AxiosResponse<DataTypes>) {
  const [gender, setGender] = useState<string | null>(null);
  const [input, setInput] = useState({
    name: response?.data?.name,
    birthday: response?.data?.birthday,
    email: response?.data?.email,
    phoneNumber: response?.data?.phoneNumber,
  });

  useEffect(() => {
    // response값을 받아올 때 다시 상태 업데이트
    setInput({
      name: response?.data?.name,
      birthday: response?.data?.birthday,
      email: response?.data?.email,
      phoneNumber: response?.data?.phoneNumber,
    });

    setGender(response?.data?.gender);
  }, [response]);

  const handleChangeInput = useCallback((key: Input, e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (key === "phoneNumber") {
      value = value.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
    }

    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleChangeGender = useCallback((value: string | null) => {
    setGender(value);
  }, []);

  const validateName = useCallback((value: string) => {
    if (value.length == 0) {
      return ERROR_MESSAGE.NAME_EMPTY;
    }
  }, []);

  const validateEmail = useCallback((value: string) => {
    if (value.length == 0) {
      return ERROR_MESSAGE.EMAIL_EMPTY;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return ERROR_MESSAGE.EMAIL;
    }
  }, []);

  const validatePhoneNumber = useCallback((value: string) => {
    if (!/^\d{3}-\d{3,4}-\d{4}$/.test(value)) {
      return ERROR_MESSAGE.PHONE;
    }
    if (value.length == 0) {
      return ERROR_MESSAGE.PHONE_EMPTY;
    }
  }, []);

  const validateBirthday = useCallback((value: string) => {
    if (isNaN(Number(value))) {
      return ERROR_MESSAGE.BIRTHDAY;
    }
  }, []);

  const isNameError = !!validateName(input.name ?? "");
  const isEmailError = !!validateEmail(input.email ?? "");
  const isPhoneNumberError = !!validatePhoneNumber(input.phoneNumber ?? "");
  const isBirthdayError = !!validateBirthday(input.birthday ?? "");

  return {
    input,
    gender,
    handleChangeInput,
    handleChangeGender,
    validateName,
    validatePhoneNumber,
    validateEmail,
    validateBirthday,
    isNameError,
    isEmailError,
    isPhoneNumberError,
    isBirthdayError,
  };
}
