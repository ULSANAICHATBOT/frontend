import LucideLabWhale from "../icons/LucideLabWhale";
import { MdiGithub } from "../icons/MdiGithub";

const Header = () => {
  return (
    <header className="w-full h-16 p-4 flex items-center justify-between bg-[#fcf9f9] fixed top-0 left-0 border-b border-[#e0e0e0] z-50">
      <div className="w-[36px]" />
      <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <LucideLabWhale />
        <h1 className="text-xl font-bold text-[#5d5d5d]">Ulsan Tour AI</h1>
      </div>
      <a
        href="https://github.com/ULSANAICHATBOT"
        target="_blank"
        className="group relative transition-colors duration-200"
      >
        <MdiGithub
          width={36}
          height={36}
          className="fill-black hover:fill-gray-700 transition-all duration-200 ease-in-out"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          깃허브
        </div>
      </a>
    </header>
  );
};

export default Header;
