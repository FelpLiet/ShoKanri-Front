import { useState } from 'react';
import './Reports.scss';

interface ReportsProps {
  onBack: () => void;
}

const Reports = ({ onBack }: ReportsProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const periods = ['Semana', 'Mês', 'Trimestre', 'Ano'];

  return (
    <div className="reports-container">
      <header className="reports-header">
        <button className="back-button" onClick={onBack}>Voltar</button>
        <h1>Relatórios</h1>
      </header>

      <div className="period-selector">
        {periods.map(period => (
          <button 
            key={period}
            className={`period-button ${selectedPeriod === period ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      <div className="main-chart">
        <h2>Visão geral dos gastos</h2>
        <div className="chart-placeholder">
          <div className="placeholder-text">Gráfico de gastos ao longo do tempo</div>
        </div>
      </div>

      <div className="category-breakdown">
        <h2>Gastos por categoria</h2>
        <div className="pie-chart-placeholder">
          <div className="placeholder-text">Gráfico de pizza de categoria</div>
        </div>

        <div className="category-list">
          <div className="category-item">
            <div className="category-color food"></div>
            <div className="category-name">Comida</div>
            <div className="category-amount">R$ 850.00</div>
            <div className="category-percentage">35%</div>
          </div>
          <div className="category-item">
            <div className="category-color transport"></div>
            <div className="category-name">Transporte</div>
            <div className="category-amount">R$ 450.00</div>
            <div className="category-percentage">20%</div>
          </div>
          <div className="category-item">
            <div className="category-color housing"></div>
            <div className="category-name">Moradia</div>
            <div className="category-amount">R$ 600.00</div>
            <div className="category-percentage">25%</div>
          </div>
          <div className="category-item">
            <div className="category-color entertainment"></div>
            <div className="category-name">Entretenimento</div>
            <div className="category-amount">R$ 360.00</div>
            <div className="category-percentage">15%</div>
          </div>
        </div>
      </div>

      <div className="insights-section">
        <h2>Percepções</h2>
        <div className="insight-card">
          <div className="insight-icon"></div>
          <div className="insight-content">
            <h3>Aumento de gastos</h3>
            <p>Suas despesas com alimentação aumentaram 15% em relação ao mês passado.</p>
          </div>
        </div>
        <div className="insight-card">
          <div className="insight-icon"></div>
          <div className="insight-content">
            <h3>Oportunidade de economia</h3>
            <p>Você pode economizar até R$ 200.00 reduzindo suas despesas com entretenimento.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
