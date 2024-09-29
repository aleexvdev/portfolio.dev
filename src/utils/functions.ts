export const getTimeZoneOffset = (timeZone: string) => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { timeZone, timeZoneName: "short" };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(date);
  const offsetString = parts.find(part => part.type === "timeZoneName")?.value || "";

  const offsetHours = offsetString.startsWith("GMT") ? parseInt(offsetString.slice(3), 10) : 0;
  return offsetHours;
};

export const getThemeFromLocalStorage = (key: string = 'theme', defaultTheme: string = 'Dark'): string => {
  try {
    const theme = localStorage.getItem(key);
    return theme ?? defaultTheme;
  } catch (error) {
    console.error(`Error fetching theme from localStorage: ${error}`);
    return defaultTheme;
  }
};
