import { useState } from "react";
import "./App.css";
import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import axios from "axios";

export interface Message {
  text: string;
  isUser: boolean;
  isError: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, isUser: true, isError: false }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        question: userMessage,
      });

      const aiResponse = response.data.response.response;
      setMessages((prev) => [...prev, { text: aiResponse, isUser: false, isError: false }]);
    } catch (error) {
      console.error("AI의 답변을 받아오는데 실패했습니다:", error);
      const errorMessage = "죄송합니다. 서버와의 통신에 문제가 발생했습니다.";
      setMessages((prev) => [...prev, { text: errorMessage, isUser: false, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatContainer messages={messages} isLoading={isLoading} />
      <ChatInput
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
