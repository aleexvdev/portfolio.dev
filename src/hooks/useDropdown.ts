import { useEffect, useRef, useState } from 'react';

export const useDropdown = (initialTheme: string) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(initialTheme);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setIsActive(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isActive,
    selectedItem,
    toggleDropdown,
    selectItem,
    dropdownRef,
  };
}
