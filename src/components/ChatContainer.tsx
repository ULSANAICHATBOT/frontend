import { useEffect, useRef } from "react";
import type { Message } from "../App";
import ChatMessage from "./ChatMessage";
import { SimpleIconsOllama } from "../icons/SimpleIconsOllama";

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatContainer = ({ messages, isLoading }: ChatContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <main
      className="flex-grow overflow-y-auto px-4 sm:px-24 bg-gray-100 pt-[100px] pb-[180px]"
      ref={containerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="max-w-[800px] mx-auto flex flex-col space-y-8 transition-all duration-300 ease-in-out min-h-[calc(100vh-280px)]">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 flex-1">
            <SimpleIconsOllama
              width={100}
              height={100}
              className="animate-fadeIn"
            />
            <p className="text-gray-400 text-[10px] animate-fadeIn-delay-1500">
              Meta-Llama-3.1-8B-Instruct
            </p>
            <p className="text-gray-600 font-bold animate-fadeIn-delay-2000">
              대화를 시작해보세요!
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                text={msg.text}
                isUser={msg.isUser}
                isError={msg.isError}
              />
            ))}
            {isLoading && (
              <div className="flex">
                <div className="relative rounded-full max-w-xs">
                  <div className="shimmer-text flex items-center justify-center">
                    답변 생성중...
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default ChatContainer;
