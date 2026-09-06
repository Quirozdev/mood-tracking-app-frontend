export const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

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

export function extractDateComponentsFromIsoStringDateWithoutTime(
  date: string,
) {
  const [year, month, day] = date.split("-");
  return { year: Number(year), month: Number(month) - 1, day: Number(day) };
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
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

export function addDaysFromDate(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getMonthNameFromDateString(date: string) {
  const { month } = extractDateComponentsFromIsoStringDateWithoutTime(date);
  return MONTHS[month];
}

export function getDayFromDateString(date: string) {
  const { day } = extractDateComponentsFromIsoStringDateWithoutTime(date);
  return day < 10 ? `0${day}` : day;
}

export function getPreviousDaysInIsoStringFromNow(
  startingDate: string,
  previous: number,
) {
  const { year, month, day } =
    extractDateComponentsFromIsoStringDateWithoutTime(startingDate);
  const convertedDate = new Date(year, month, day);
  const previousDates = [];
  for (let i = 1; i <= previous; i++) {
    previousDates.push(
      formatDateToIsoStringWithoutTime(subtractDaysFromDate(convertedDate, i)),
    );
  }
  return previousDates;
}

export function getNextDaysInIsoStringFromNow(
  startingDate: string,
  next: number,
) {
  const { year, month, day } =
    extractDateComponentsFromIsoStringDateWithoutTime(startingDate);
  const convertedDate = new Date(year, month, day);
  const nextDates = [];
  for (let i = 1; i <= next; i++) {
    nextDates.push(
      formatDateToIsoStringWithoutTime(addDaysFromDate(convertedDate, i)),
    );
  }
  return nextDates;
}
