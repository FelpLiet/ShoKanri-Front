import { useState } from "react";
import "./FinancialGoals.scss";

interface FinancialGoalsProps {
  onBack: () => void;
}

const FinancialGoals = ({ onBack }: FinancialGoalsProps) => {
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);

  const goals = [
    {
      id: 1,
      name: "Emergências",
      targetAmount: 10000,
      currentAmount: 6500,
      deadline: "Dezembro de 2025",
      category: "poupança",
    },
    {
      id: 2,
      name: "Notebook novo",
      targetAmount: 5000,
      currentAmount: 2000,
      deadline: "Abril de 2025",
      category: "electrônico",
    },
    {
      id: 3,
      name: "Férias",
      targetAmount: 7000,
      currentAmount: 1500,
      deadline: "Julho de 2025",
      category: "viagem",
    },
  ];

  const toggleNewGoalForm = () => {
    setShowNewGoalForm(!showNewGoalForm);
  };

  return (
    <div className="financial-goals-container">
      <header className="goals-header">
        <button className="back-button" onClick={onBack}>
          Voltar
        </button>
        <h1>Metas Financeiras</h1>
      </header>

      <div className="goals-overview">
        <h2>Visão geral do progresso</h2>
        <div className="overview-stats">
          <div className="stat-item">
            <div className="stat-value">3</div>
            <div className="stat-label">Metas ativas</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">R$ 10.000</div>
            <div className="stat-label">Total economizado</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">R$ 12.000</div>
            <div className="stat-label">Outros valores</div>
          </div>
        </div>
      </div>

      <div className="goals-list">
        <div className="section-header">
          <h2>Suas Metas</h2>
          <button className="add-goal-button" onClick={toggleNewGoalForm}>
            + Nova Meta
          </button>
        </div>

        {showNewGoalForm && (
          <div className="new-goal-form">
            <h3>Criar nova meta</h3>
            <div className="form-group">
              <label>Nome da meta</label>
              <input type="text" placeholder="Por exemplo: Carro novo" />
            </div>

            <div className="form-group">
              <label>Valor previsto</label>
              <input type="number" placeholder="R$ 0.00" />
            </div>

            <div className="form-group">
              <label>Data prevista</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select>
                <option value="">Selecione a Categoria</option>
                <option value="savings">Poupança</option>
                <option value="travel">Viagem</option>
                <option value="electronics">Eletrônico</option>
                <option value="vehicle">Veículo</option>
                <option value="home">Casa</option>
                <option value="education">Educação</option>
              </select>
            </div>

            <div className="form-actions">
              <button className="cancel-button" onClick={toggleNewGoalForm}>
                Cancelar
              </button>
              <button className="save-button">Criar Meta</button>
            </div>
          </div>
        )}

        {goals.map((goal) => {
          const progressPercent = Math.round(
            (goal.currentAmount / goal.targetAmount) * 100
          );

          return (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <div className={`goal-icon ${goal.category}`}></div>
                <div className="goal-title">{goal.name}</div>
                <div className="goal-menu">⋮</div>
              </div>

              <div className="goal-amounts">
                <div className="saved-amount">
                  <span className="amount-value">
                    R$ {goal.currentAmount.toLocaleString()}
                  </span>
                  <span className="amount-label"> salvo de </span>
                  <span className="amount-value">
                    R$ {goal.targetAmount.toLocaleString()}
                  </span>
                </div>
                <div className="deadline">Objetivo: {goal.deadline}</div>
              </div>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <div className="progress-percentage">{progressPercent}%</div>

              <button className="add-funds-button">Adicionar fundos</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialGoals;
