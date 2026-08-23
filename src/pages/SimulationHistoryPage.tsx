import { useNavigate } from "react-router-dom";
import { Button } from "../components/shared/Button";
import { useSimulationStorage } from "../hooks/useSimulationStorage";
import { PageHero } from "../components/shared/PageHero";

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
      <ul className="flex flex-col gap-5 p-2 mt-10">
        {history && history.length > 0 ? (
          <ul className="flex flex-col gap-5 p-2 mt-10">
            {history.map((simulation) => (
              <li
                key={simulation.id}
                className="rounded-lg border p-4 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4"
              >
                <div>
                  <p className="font-medium">Objetivo: {simulation.goalName}</p>
                  <p className="text-sm text-gray-500">
                    Data: {simulation.date}
                  </p>
                </div>

                <Button
                  type="button"
                  variant="primary"
                  onClick={() => navigate(`/resultado/${simulation.id}`)}
                >
                  Ver Resultado
                </Button>
              </li>
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
