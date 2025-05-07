import LucideLabWhale from "../icons/LucideLabWhale";

const Header = () => {
  return (
    <header className="w-full h-16 p-4 flex items-center justify-center gap-2 bg-[#fcf9f9] fixed top-0 left-0 border-b border-[#e0e0e0] z-50">
      <LucideLabWhale />
      <h1 className="text-xl font-bold text-[#5d5d5d]">Ulsan Tour AI</h1>
    </header>
  );
};

export default Header;
