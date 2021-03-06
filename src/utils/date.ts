export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `${date.getMonth() + 1}` : date.getMonth() + 1;
  const day =
    date.getDate() < 10 ? `${date.getDate() + 1}` : date.getDate() + 1;

  return `${year}.${month}.${day}`;
};
