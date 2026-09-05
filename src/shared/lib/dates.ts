export const MONTHS: Record<number, string> = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export function getCurrentDate() {
  return new Date();
}

export function formatDateToIsoStringWithoutTime(date: Date) {
  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
}

export function subtractDaysFromDate(date: Date, days: number) {
  return new Date(new Date().setDate(date.getDate() - days));
}

export function getMonthNameFromDateString(date: string) {
  const monthIndex = Number(date.split("-")[1]) - 1;
  return MONTHS[monthIndex];
}

export function getDayFromDateString(date: string) {
  const day = Number(date.split("-")[2]);
  return day < 10 ? `0${day}` : day;
}
