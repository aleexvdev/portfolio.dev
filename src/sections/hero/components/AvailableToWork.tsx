export const AvailableToWork = () => {
  return (
    <div className="w-max h-full relative inline-flex overflow-hidden rounded-lg p-0.5">
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></div>
      <div className="w-full h-full flex items-center justify-center space-x-3 backdrop-blur-3xl px-3 py-2 bg-[#0C0A09] rounded-lg">
        <span className="block w-3 h-3 rounded-full bg-green-500 animate-custom-pulse"></span>
        <span className="animate-ripple absolute left-0 w-3 h-3 rounded-full bg-green-500"></span>
        <span className="inline-flex text-sm font-normal text-white text-nowrap">
          Disponible para trabajar
        </span>
      </div>
    </div>
  );
};
