import type { SimulationRecord } from "../data/simulation";

import { callGeminiAPI } from "./geminiService";

export interface InsightData {
  feasibility: {
    status: "viable" | "needs_adjustment" | "unfeasible";
    content: string;
  };

  diagnosis: {
    content: string;
  };

  suggestions: {
    items: string[];
  };

  extraIncome: {
    items: string[];
  };

  investment: {
    items: string[];
  };

  motivation: {
    content: string;
  };
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export const getInsight = async (prompt: string) => {
  const response = await callGeminiAPI(prompt);

  const json = response.candidates[0].content.parts[0].text;

  return JSON.parse(json) as InsightData;
};

export const chatWithGemini = async (
  message: string,
  history: ChatMessage[],
  simulation: SimulationRecord,
) => {
  const conversation = history
    .map(
      (item) =>
        `${
          item.role === "user" ? "Usuário" : "Educador financeiro"
        }: ${item.content}`,
    )
    .join("\n");

  const prompt = `
Você é um educador financeiro especializado em finanças pessoais.

Você está conversando com um usuário sobre a seguinte simulação:

- Renda mensal: ${simulation.income}
- Custos fixos: ${simulation.expenses}
- Dívidas e parcelas: ${simulation.debts}
- Objetivo: ${simulation.goalName}
- Valor da meta: ${simulation.goalAmount}
- Prazo desejado: ${simulation.goalDeadline} meses

Histórico da conversa:

${conversation}

Nova mensagem do usuário:

${message}

Responda em português do Brasil.

Seja claro, didático e objetivo.

Use os dados da simulação quando forem relevantes.

Não invente informações.

Não prometa retornos financeiros.

Não responda em JSON.
`;

  const response = await callGeminiAPI(prompt);

  return response.candidates[0].content.parts[0].text;
};
