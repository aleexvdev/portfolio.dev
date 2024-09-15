export const getTimeZoneOffset = (timeZone: string) => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { timeZone, timeZoneName: "short" };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(date);
  const offsetString = parts.find(part => part.type === "timeZoneName")?.value || "";

  const offsetHours = offsetString.startsWith("GMT") ? parseInt(offsetString.slice(3), 10) : 0;
  return offsetHours;
};