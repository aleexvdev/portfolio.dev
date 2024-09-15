import { useState, useEffect } from 'react';

export const useUserTimeZone = () => {
  const [timeZone, setTimeZone] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimeZone = () => {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(userTimeZone);
    };
    fetchTimeZone();
  }, []);

  return timeZone;
}