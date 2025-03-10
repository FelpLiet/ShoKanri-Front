import { useState } from 'react';
import './FinancialGoals.scss';

interface FinancialGoalsProps {
  onBack: () => void;
}

const FinancialGoals = ({ onBack }: FinancialGoalsProps) => {
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);
  
  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 6500,
      deadline: "December 2023",
      category: "savings"
    },
    {
      id: 2,
      name: "New Laptop",
      targetAmount: 5000,
      currentAmount: 2000,
      deadline: "March 2024",
      category: "electronics"
    },
    {
      id: 3,
      name: "Vacation",
      targetAmount: 7000,
      currentAmount: 1500,
      deadline: "July 2024",
      category: "travel"
    }
  ];

  const toggleNewGoalForm = () => {
    setShowNewGoalForm(!showNewGoalForm);
  };

  return (
    <div className="financial-goals-container">
      <header className="goals-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Financial Goals</h1>
      </header>

      <div className="goals-overview">
        <h2>Progress Overview</h2>
        <div className="overview-stats">
          <div className="stat-item">
            <div className="stat-value">3</div>
            <div className="stat-label">Active Goals</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">R$ 10,000</div>
            <div className="stat-label">Total Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">R$ 12,000</div>
            <div className="stat-label">Remaining</div>
          </div>
        </div>
      </div>

      <div className="goals-list">
        <div className="section-header">
          <h2>Your Goals</h2>
          <button className="add-goal-button" onClick={toggleNewGoalForm}>
            + New Goal
          </button>
        </div>
        
        {showNewGoalForm && (
          <div className="new-goal-form">
            <h3>Create New Goal</h3>
            <div className="form-group">
              <label>Goal Name</label>
              <input type="text" placeholder="e.g. New Car" />
            </div>
            
            <div className="form-group">
              <label>Target Amount</label>
              <input type="number" placeholder="R$ 0.00" />
            </div>
            
            <div className="form-group">
              <label>Target Date</label>
              <input type="date" />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select>
                <option value="">Select Category</option>
                <option value="savings">Savings</option>
                <option value="travel">Travel</option>
                <option value="electronics">Electronics</option>
                <option value="vehicle">Vehicle</option>
                <option value="home">Home</option>
                <option value="education">Education</option>
              </select>
            </div>
            
            <div className="form-actions">
              <button className="cancel-button" onClick={toggleNewGoalForm}>Cancel</button>
              <button className="save-button">Create Goal</button>
            </div>
          </div>
        )}
        
        {goals.map(goal => {
          const progressPercent = Math.round((goal.currentAmount / goal.targetAmount) * 100);
          
          return (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <div className={`goal-icon ${goal.category}`}></div>
                <div className="goal-title">{goal.name}</div>
                <div className="goal-menu">⋮</div>
              </div>
              
              <div className="goal-amounts">
                <div className="saved-amount">
                  <span className="amount-value">R$ {goal.currentAmount.toLocaleString()}</span>
                  <span className="amount-label"> saved of </span>
                  <span className="amount-value">R$ {goal.targetAmount.toLocaleString()}</span>
                </div>
                <div className="deadline">Target: {goal.deadline}</div>
              </div>
              
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <div className="progress-percentage">{progressPercent}%</div>
              
              <button className="add-funds-button">Add Funds</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialGoals;
