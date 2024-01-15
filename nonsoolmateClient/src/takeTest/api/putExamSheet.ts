import axios from "axios";
export async function putExamSheet({ blob, url }: { blob: Blob; url: string }) {
  const { data } = await axios.put(url, blob, {
    headers: {
      "Content-Type": "binary/octet-stream",
    },
  });
  return data;
}
