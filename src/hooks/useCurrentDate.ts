import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('es-ES', { month: 'long' });
    const year = now.getFullYear();

    setDate(`${day} de ${month} de ${year}`);
  }, []);

  return date;
};