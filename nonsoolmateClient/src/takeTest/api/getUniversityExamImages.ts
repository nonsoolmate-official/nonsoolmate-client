export async function getUniversityExamImages(pageNum: number) {
  const response = await fetch(`https://placekitten.com/300/20${pageNum}`);
  const imageBlob = await response.blob();
  return URL.createObjectURL(imageBlob);
}
