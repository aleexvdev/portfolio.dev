import { getTimeZoneOffset } from "@/utils/functions";
import { useState, useEffect } from "react";

export const useTimeDifference = () => {
  const [timeDifference, setTimeDifference] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserTimeZone = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const userTimeZone = data.timezone;
        // const userTimeZone = "Europe/Madrid";
        // const userTimeZone = "America/New_York";
        // const userTimeZone = "Asia/Tokyo";
        if (userTimeZone) {
          // const peruTimeZone = "America/New_York";
          const peruTimeZone = "America/Lima";
          const difference = getTimeZoneOffset(userTimeZone) - getTimeZoneOffset(peruTimeZone);
          let message: string;
          if (difference > 0) {
            message = `${Math.abs(difference)}h por detrás de ti.`;
          } else if (difference < 0) {
            message = `${Math.abs(difference)}h por delante de ti.`;
          } else {
            message = "Estamos cerca 😃";
          }
          setTimeDifference(message);
        }
      } catch (error) {
        console.error("Error fetching time zone data:", error);
      }
    };
    fetchUserTimeZone();
  }, []);
  return timeDifference;
};