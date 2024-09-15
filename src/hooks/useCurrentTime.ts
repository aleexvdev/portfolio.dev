import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
};