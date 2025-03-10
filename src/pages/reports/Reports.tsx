import { useState } from 'react';
import './Reports.scss';

interface ReportsProps {
  onBack: () => void;
}

const Reports = ({ onBack }: ReportsProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const periods = ['week', 'month', 'quarter', 'year'];

  return (
    <div className="reports-container">
      <header className="reports-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Reports</h1>
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
        <h2>Spending Overview</h2>
        <div className="chart-placeholder">
          <div className="placeholder-text">Spending over time chart</div>
        </div>
      </div>

      <div className="category-breakdown">
        <h2>Spending by Category</h2>
        <div className="pie-chart-placeholder">
          <div className="placeholder-text">Category pie chart</div>
        </div>

        <div className="category-list">
          <div className="category-item">
            <div className="category-color food"></div>
            <div className="category-name">Food & Dining</div>
            <div className="category-amount">R$ 850.00</div>
            <div className="category-percentage">35%</div>
          </div>
          <div className="category-item">
            <div className="category-color transport"></div>
            <div className="category-name">Transportation</div>
            <div className="category-amount">R$ 450.00</div>
            <div className="category-percentage">20%</div>
          </div>
          <div className="category-item">
            <div className="category-color housing"></div>
            <div className="category-name">Housing</div>
            <div className="category-amount">R$ 600.00</div>
            <div className="category-percentage">25%</div>
          </div>
          <div className="category-item">
            <div className="category-color entertainment"></div>
            <div className="category-name">Entertainment</div>
            <div className="category-amount">R$ 360.00</div>
            <div className="category-percentage">15%</div>
          </div>
        </div>
      </div>

      <div className="insights-section">
        <h2>Insights</h2>
        <div className="insight-card">
          <div className="insight-icon"></div>
          <div className="insight-content">
            <h3>Spending Increase</h3>
            <p>Your food expenses increased by 15% compared to last month.</p>
          </div>
        </div>
        <div className="insight-card">
          <div className="insight-icon"></div>
          <div className="insight-content">
            <h3>Savings Opportunity</h3>
            <p>You could save up to R$ 200 by reducing your entertainment expenses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
