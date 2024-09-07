import React from "react";

interface Props {
  id: number;
  title: string;
  icon: string;
}

export const Badge = ({ id, title, icon }: Props) => {
  return (
    <span
      key={id}
      className="relative flex items-center justify-center px-4 py-2 text-base font-medium tracking-wide rounded-2xl bg-[#0b0b0b] text-white/90 select-none border border-white/10 transition-colors duration-300 ease-out group"
    >
      <img src={icon} alt={title} className="w-5 h-5" />
      <span className="ml-2 text-nowrap text-sm font-medium text-white/90">
        {title}
      </span>
      <div className="absolute inset-0 flex justify-center overflow-hidden rounded-full">
        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 opacity-20 transform translate-x-[-150%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[150%] group-hover:opacity-50"></div>
      </div>
    </span>
  );
};
