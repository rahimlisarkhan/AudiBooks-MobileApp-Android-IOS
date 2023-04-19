export const onvertDateTimeToDate = (date: Date) => {
  const dateTime = new Date(date);

  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();

  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year}`;
};
