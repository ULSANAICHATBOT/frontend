import { LucideSend } from "../icons/LucideSend";
import { useEffect, useRef } from "react";

interface ChatInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const ChatInput = ({
  handleSubmit,
  input,
  setInput,
  isLoading,
}: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Input 비활성화 해제 후 커서 포커싱 되도록 수정정
  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-7 left-[50%] translate-x-[-50%] w-[90%] max-w-[638px] min-w-[280px] h-[102px] bg-white border-t border-gray-300 p-4 sm:p-6 flex flex-col items-center border rounded-4xl shadow-sm"
    >
      <div className="w-full h-full">
        <input
          ref={inputRef}
          type="text"
          className="w-full focus:outline-none text-[16px] disabled:text-gray-600 disabled:cursor-not-allowed"
          placeholder="울산 여행 추천 정보를 검색해보세요!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="w-full h-full flex items-center justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-black text-white p-5 rounded-full transition-all duration-200 flex items-center justify-center relative
            ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700 cursor-pointer"
            }`}
        >
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
