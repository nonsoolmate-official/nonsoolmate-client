export const formatDate = (date?: string) => {
  if (!date) return null;

  const formattedDate = new Date(date);

  return formattedDate
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, ".")
    .replace(/\s/g, "");
};
