import { useNavigate } from "react-router-dom";
import { useSimulationStorage } from "../hooks/useSimulationStorage";
import { PageHero } from "../components/shared/PageHero";
import { Card } from "../components/features/SimulationHistory/Card";

import { Calendar } from "lucide-react";

export const SimulationHistoryPage = () => {
  const { getHistory } = useSimulationStorage();

  const history = getHistory();

  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico"
        subtitle="Mostrando todas as suas simulações."
      />
      <ul className="flex flex-col gap-5 p-2 ">
        {history && history.length > 0 ? (
          <ul className="flex flex-col gap-5 p-2 ">
            {history.map((simulation) => (
              <>
                <li>
                  <Card
                    icon={Calendar}
                    label="Meta"
                    value={simulation.goalName}
                    subtitle={simulation.date}
                    onClick={() => navigate(`/resultado/${simulation.id}`)}
                  />
                </li>
              </>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-gray-500">
            Nenhum histórico disponível.
          </p>
        )}
      </ul>
    </main>
  );
};
