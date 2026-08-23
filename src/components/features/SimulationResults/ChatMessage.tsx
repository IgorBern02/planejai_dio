import type { ChatMessage as ChatMessageType } from "../../../services/aiService";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
        isUser ? "bg-primary ml-auto text-white" : "mr-auto shadow-sm"
      }`}
    >
      {message.content}
    </div>
  );
}
