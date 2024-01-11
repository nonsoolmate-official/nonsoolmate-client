import axios from "axios";
export async function getUniversityExamImages(pageNum: number) {
  const response = await axios.get(`https://placekitten.com/300/20${pageNum}`, {
    responseType: "blob",
  });

  return URL.createObjectURL(response.data);
}
