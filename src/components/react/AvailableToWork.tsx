export const AvailableToWork = () => {
  return (
    <div className="relative inline-flex h-full w-max overflow-hidden rounded-lg p-0.5">
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></div>
      <div className="flex h-full w-full items-center justify-center space-x-3 rounded-lg bg-[#ffffff] px-3 py-2 backdrop-blur-3xl dark:bg-[#0C0A09]">
        <span className="animate-custom-pulse block h-3 w-3 rounded-full bg-green-500"></span>
        <span className="animate-ripple absolute left-0 ml-3 h-3 w-3 rounded-full bg-green-500"></span>
        <span className="inline-flex text-sm font-medium text-nowrap text-black md:text-base lg:text-lg dark:text-white">
          Disponible para trabajar
        </span>
      </div>
    </div>
  );
};
