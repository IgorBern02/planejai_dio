# Planejaí 💰

Educador Financeiro Inteligente desenvolvido com React e IA Generativa utilizando o Gemini.

O projeto foi desenvolvido a partir do desafio **"Desenvolvendo Seu Educador Financeiro Inteligente Com React E IA Generativa"**, proposto pela [Digital Innovation One (DIO)](https://www.dio.me/).

Além da implementação proposta no desafio, foram desenvolvidas funcionalidades adicionais para melhorar a experiência do usuário e tornar a aplicação mais completa.

---

## 🚀 Funcionalidades

### 📊 Simulação financeira

O usuário informa seus principais dados financeiros:

- Renda mensal
- Custos fixos
- Dívidas e parcelas
- Nome da meta
- Valor da meta
- Prazo desejado

A aplicação utiliza esses dados para calcular a capacidade mensal de economia e analisar a viabilidade do objetivo.

---

### 🤖 Educador financeiro com IA

A aplicação utiliza o **Google Gemini** para gerar um diagnóstico financeiro personalizado.

A IA analisa:

- Viabilidade da meta
- Comprometimento da renda
- Organização financeira
- Sugestões para redução de gastos
- Possibilidades de renda extra
- Sugestões de investimentos
- Mensagem motivacional personalizada

As respostas são apresentadas diretamente na página de resultados.

---

## 💬 Chat com o Gemini

Como melhoria em relação ao projeto original, foi desenvolvido um chat integrado ao Gemini.

Após receber o diagnóstico financeiro, o usuário pode continuar a conversa com o educador financeiro e fazer perguntas relacionadas à sua simulação.

O chat utiliza como contexto:

- Renda mensal
- Custos fixos
- Dívidas e parcelas
- Objetivo financeiro
- Valor da meta
- Prazo desejado
- Histórico da conversa

Dessa forma, as respostas podem ser relacionadas diretamente à situação financeira informada pelo usuário.

---

## 📝 Histórico de simulações

Foi implementada uma nova página de histórico para permitir que o usuário consulte suas simulações anteriores.

Cada registro apresenta:

- 🎯 Objetivo
- 📅 Data da simulação
- 🔎 Botão para visualizar novamente o resultado
- 🗑️ Opção para excluir a simulação

As simulações são armazenadas no `localStorage` do navegador.

---

## 🗑️ Exclusão de simulações

O usuário pode excluir individualmente uma simulação do histórico.

Antes da exclusão, a aplicação solicita uma confirmação para evitar remoções acidentais.

---

## 🧩 Estrutura do projeto

A aplicação foi organizada utilizando componentes, hooks, serviços e arquivos de dados separados.

```text
src/
├── components/
│   ├── features/
│   │   └── SimulationResults/
│   │       ├── AIInsightsCard.tsx
│   │       ├── FinancialChat.tsx
│   │       └── ChatMessage.tsx
│   │
│   └── shared/
│
├── data/
│   ├── aiPrompt.ts
│   └── simulation.ts
│
├── hooks/
│   ├── useInsight.ts
│   ├── useSimulationStorage.ts
│   └── useFinancialChat.ts
│
├── services/
│   ├── geminiService.ts
│   └── aiService.ts
│
├── pages/
│   ├── SimulationFormPage.tsx
│   ├── SimulationResultsPage.tsx
│   └── SimulationHistoryPage.tsx
│
└── utils/
│   ├── currency.ts
│   ├── formatDate.ts
│   └── simulation.ts
```

🛠️ Tecnologias utilizadas
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Google Gemini API
- LocalStorage
- React Loading Skeleton

💾 Armazenamento

As simulações são armazenadas utilizando o localStorage.

Cada registro possui informações como:

interface SimulationRecord {
  id: string;
  date: string;
  income: string;
  expenses: string;
  debts: string;
  goalName: string;
  goalAmount: string;
  goalDeadline: string;
  insight?: InsightData;
}

O id é gerado utilizando crypto.randomUUID().

Clone o repositório:

git clone https://github.com/IgorBern02/planejai.git

Entre na pasta:

cd planejai

Instale as dependências:

npm install

Configure o arquivo .env com sua chave do Gemini.

Execute o projeto:

npm run dev

A aplicação estará disponível no endereço fornecido pelo Vite.

📚 Aprendizados

Durante o desenvolvimento e evolução do projeto, foram praticados conceitos como:

- Consumo de API utilizando fetch
- Integração com IA Generativa
- Criação de prompts estruturados
- Manipulação de respostas JSON
- React Hooks
- Custom Hooks
- Componentização
- Props e tipagem com TypeScript
- React Router
- Persistência utilizando localStorage
- Gerenciamento de estado
- Organização de serviços
- Separação de responsabilidades
- Tratamento de erros
- Loading states
- Reutilização de componentes

🔨 Melhorias desenvolvidas

Além das funcionalidades propostas originalmente no desafio, foram implementadas:

- Histórico de simulações
- Visualização de resultados anteriores
- Exclusão individual de simulações
- Chat com o Gemini
- Contexto da simulação enviado ao chat
- Histórico de mensagens durante a conversa
- Componentização do chat
- Separação do serviço de comunicação com o Gemini

 👨‍💻 Autor

Igor Bernardes

Desenvolvedor Full Stack com foco em Front-end.

Tecnologias

React • TypeScript • JavaScript • HTML • CSS • Tailwind CSS • Node.js • Git

📌 Projeto original

Este projeto foi desenvolvido a partir do desafio da Digital Innovation One:

Desenvolvendo Seu Educador Financeiro Inteligente Com React E IA Generativa

Repositório base:

https://github.com/digitalinnovationone/planejai
