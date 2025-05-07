import { LucideSend } from "../icons/LucideSend";

interface ChatInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInput = ({ handleSubmit, input, setInput }: ChatInputProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-7 left-[50%] translate-x-[-50%] w-[638px] h-[102px] bg-white border-t border-gray-300 p-6 flex flex-col items-center border rounded-4xl shadow-sm"
    >
      <div className="w-full h-full">
        <input
          type="text"
          className="w-full focus:outline-none text-[16px]"
          placeholder="울산 여행 추천 정보를 검색해보세요!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="w-full h-full flex items-center justify-end">
        <button className="bg-black text-white p-5 rounded-full hover:bg-gray-700 cursor-pointer flex items-center justify-centers relative">
          <div className="absolute top-[52%] left-[48%] translate-x-[-50%] translate-y-[-50%]">
            <LucideSend width={20} height={20} />
          </div>
        </button>
      </div>
      <p className="text-xs text-gray-500 absolute bottom-[-22px] left-[50%] translate-x-[-50%]">
        Ulsan Tour AI는 실수를 할 수 있습니다.
      </p>
    </form>
  );
};

export default ChatInput;
