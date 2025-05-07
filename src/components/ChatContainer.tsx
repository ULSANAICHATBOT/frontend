import { useEffect, useRef } from "react";
import type { Message } from "../App";
import ChatMessage from "./ChatMessage";

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
      className="flex-grow overflow-y-auto px-24 bg-gray-100 pt-[100px] pb-[180px]"
      ref={containerRef}
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex flex-col space-y-8 transition-all duration-300 ease-in-out">
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} isUser={msg.isUser} isError={msg.isError} />
        ))}
        {isLoading && (
          <div className="flex">
            <div className="relative rounded-full max-w-xs">
              <div className="shimmer-text flex items-center justify-center">답변 생성중...</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ChatContainer;
