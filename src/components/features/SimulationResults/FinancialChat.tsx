import { useState } from "react";

import { Button } from "../../shared/Button";

import { useFinancialChat } from "../../../hooks/useFinancialChat";

import type { SimulationRecord } from "../../../data/simulation";
import { ChatMessage } from "./ChatMessage";

interface FinancialChatProps {
  simulation: SimulationRecord;
}

export function FinancialChat({ simulation }: FinancialChatProps) {
  const [message, setMessage] = useState("");

  const { messages, isLoading, error, sendMessage } =
    useFinancialChat(simulation);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      return;
    }

    await sendMessage(message);

    setMessage("");
  };

  return (
    <div className="mt-8 border-t pt-6 ">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span>💬</span>

          <h3 className="text-primary text-xs font-semibold tracking-widest uppercase">
            Converse com seu educador
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Tire dúvidas sobre sua simulação financeira.
        </p>
      </div>

      <div className="mb-4 flex min-h-75 flex-col gap-3 overflow-y-auto rounded-xl  p-4">
        {messages.length === 0 && (
          <div className="m-auto max-w-md text-center">
            <p className="font-medium">Como posso ajudar?</p>

            <p className="mt-2 text-sm text-gray-500">
              Pergunte sobre sua meta, economia mensal ou organização
              financeira.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}

        {isLoading && (
          <div className="mr-auto rounded-xl  px-4 py-3 text-sm shadow-sm">
            Pensando...
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSendMessage();
            }
          }}
          placeholder="Digite sua pergunta..."
          disabled={isLoading}
          className="flex-1 rounded-xl border px-4 py-3 text-sm outline-none"
        />

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <Button
          type="button"
          variant="primary"
          onClick={handleSendMessage}
          disabled={isLoading || !message.trim()}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}
