import { client } from "@api/axios";
import { Response } from "types/common";

interface DataTypes {
  name: string;
  gender: string;
  birthday: string;
  email: string;
  phoneNumber: string;
}
export async function getProfile() {
  const { data } = await client.get<Response<DataTypes>>("/my/profile");
  return data;
}
