import { useState } from "react";

import { chatWithGemini, type ChatMessage } from "../services/aiService";

import type { SimulationRecord } from "../data/simulation";

export const useFinancialChat = (simulation: SimulationRecord) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      role: "user",
      content: content.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatWithGemini(
        content,
        updatedMessages,
        simulation,
      );

      const assistantMessage: ChatMessage = {
        role: "model",
        content: response,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  };
};
