import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

import { useInsight } from "../../../hooks/useInsight";

import { Content } from "../Insights/Content";
import { Error } from "../Insights/Error";

import type { SimulationRecord } from "../../../data/simulation";

import { FinancialChat } from "./FinancialChat";

interface AIInsightCardProps {
  simulation: SimulationRecord;
}

export function AIInsightsCard({ simulation }: AIInsightCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulation.id);

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && <Skeleton />}

      {!isLoading && error && (
        <Error
          simulationId={simulation.id}
          message={error}
          onRetry={() => {
            fetchInsight(simulation.id);
          }}
        />
      )}

      {!isLoading && insight && !error && (
        <>
          <Content insight={insight} />

          <FinancialChat simulation={simulation} />
        </>
      )}
    </div>
  );
}
