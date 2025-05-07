import LineMdAlertCircleLoop from "../icons/LineMdAlertCircleLoop";
import LucideLabWhale from "../icons/LucideLabWhale";

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  isError: boolean;
}

const ChatMessage = ({ text, isUser, isError }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fadeIn`}>
      {isUser ? (
        <div className="bg-gray-200 text-black p-4 rounded-full max-w-xs">{text}</div>
      ) : (
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0">
            {isError ? (
              <LineMdAlertCircleLoop width={24} height={24} />
            ) : (
              <LucideLabWhale width={24} height={24} />
            )}
          </div>
          <span
            className={`${isError ? "text-red-600" : "text-black"}`}
            style={{ wordWrap: "break-word" }}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
