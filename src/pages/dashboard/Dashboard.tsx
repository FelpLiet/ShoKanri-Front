import './Dashboard.scss';


interface DashboardProps {
  // onAddTransaction: () => void;
  onViewReports: () => void;
  onViewGoals: () => void;
  onOpenSettings: () => void;
  // onConnectBank: () => void;
}

const Dashboard = ({
  // onAddTransaction,
  // onConnectBank
}: DashboardProps) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>LOGO ShoKanri</h1>
        
        <ul className="settings-list">
          <li className="settings-item">
              <div className="settings-icon theme"></div>
              <div className="settings-label">Dark Mode</div>
              <div className="settings-toggle">
                <input type="checkbox" id="darkmode" />
                <label htmlFor="darkmode"></label>
              </div>
            </li>
        </ul>

        <div className="user-profile">
          <div className="avatar">JD</div>
        </div>
      </header>
      

      <div className="dashboard-content">
        <div className="main-column">


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Controle de Saldo e Despesas</h2>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                {/* Ícone Check */}
                <div className="amount1">R$ 10,350.00</div>
                <div className="label">Inicial</div>
                {/* Ícone Circle-filled */}
                <div className="amount2">R$ 26,500.00</div>
                <div className="label">Saldo Atual</div>
                {/* Ícone Progress-check */}
                <div className="amount3">R$ 25,400.00</div>
                <div className="label">Previsto</div>
              </div>
            </div>
          </div>


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Total Balance</h2>
              <div className="period-selector">
                <select>
                  <option value="week">This Week</option>
                  <option value="month" selected>This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                <div className="amount">R$ 5,240.00</div>
                <div className="label">November 2023</div>
              </div>
              <div className="balance-change">+12% from last month</div>
            </div>
            <div className="transaction-summary">
              <div className="summary-item income">
                <div className="summary-label">Income</div>
                <div className="summary-amount">R$ 7,500.00</div>
              </div>
              <div className="summary-item expenses">
                <div className="summary-label">Expenses</div>
                <div className="summary-amount">R$ 2,260.00</div>
              </div>
            </div>
          </div>


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Total Balance</h2>
              <div className="period-selector">
                <select>
                  <option value="week">This Week</option>
                  <option value="month" selected>This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                <div className="amount">R$ 5,240.00</div>
                <div className="label">November 2023</div>
              </div>
              <div className="balance-change">+12% from last month</div>
            </div>
            <div className="transaction-summary">
              <div className="summary-item income">
                <div className="summary-label">Income</div>
                <div className="summary-amount">R$ 7,500.00</div>
              </div>
              <div className="summary-item expenses">
                <div className="summary-label">Expenses</div>
                <div className="summary-amount">R$ 2,260.00</div>
              </div>
            </div>
          </div>


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Total Balance</h2>
              <div className="period-selector">
                <select>
                  <option value="week">This Week</option>
                  <option value="month" selected>This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                <div className="amount">R$ 5,240.00</div>
                <div className="label">November 2023</div>
              </div>
              <div className="balance-change">+12% from last month</div>
            </div>
            <div className="transaction-summary">
              <div className="summary-item income">
                <div className="summary-label">Income</div>
                <div className="summary-amount">R$ 7,500.00</div>
              </div>
              <div className="summary-item expenses">
                <div className="summary-label">Expenses</div>
                <div className="summary-amount">R$ 2,260.00</div>
              </div>
            </div>
          </div>


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Total Balance</h2>
              <div className="period-selector">
                <select>
                  <option value="week">This Week</option>
                  <option value="month" selected>This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                <div className="amount">R$ 5,240.00</div>
                <div className="label">November 2023</div>
              </div>
              <div className="balance-change">+12% from last month</div>
            </div>
            <div className="transaction-summary">
              <div className="summary-item income">
                <div className="summary-label">Income</div>
                <div className="summary-amount">R$ 7,500.00</div>
              </div>
              <div className="summary-item expenses">
                <div className="summary-label">Expenses</div>
                <div className="summary-amount">R$ 2,260.00</div>
              </div>
            </div>
          </div>


          <div className="balance-overview">
            <div className="balance-header">
              <h2>Total Balance</h2>
              <div className="period-selector">
                <select>
                  <option value="week">This Week</option>
                  <option value="month" selected>This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="balance-details">
              <div className="balance-amount">
                <div className="amount">R$ 5,240.00</div>
                <div className="label">November 2023</div>
              </div>
              <div className="balance-change">+12% from last month</div>
            </div>
            <div className="transaction-summary">
              <div className="summary-item income">
                <div className="summary-label">Income</div>
                <div className="summary-amount">R$ 7,500.00</div>
              </div>
              <div className="summary-item expenses">
                <div className="summary-label">Expenses</div>
                <div className="summary-amount">R$ 2,260.00</div>
              </div>
            </div>
          </div>
          

          <div className="chart-container">
            <h3>Spending Overview</h3>
            <div className="chart-placeholder">
              <div className="placeholder-text">Expenses Chart</div>
            </div>
          </div>
        </div>
        
        <div className="side-column">
          <div className="recent-transactions">
            <div className="section-header">
              <h3>Recent Transactions</h3>
              <button className="view-all">View All</button>
            </div>
            <div className="transactions-list">
              <div className="transaction-item">
                <div className="transaction-icon grocery"></div>
                <div className="transaction-details">
                  <div className="transaction-title">Supermarket</div>
                  <div className="transaction-date">Nov 15, 2023</div>
                </div>
                <div className="transaction-amount expense">-R$ 120.50</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon salary"></div>
                <div className="transaction-details">
                  <div className="transaction-title">Salary</div>
                  <div className="transaction-date">Nov 5, 2023</div>
                </div>
                <div className="transaction-amount income">+R$ 3,500.00</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon grocery"></div>
                <div className="transaction-details">
                  <div className="transaction-title">Restaurant</div>
                  <div className="transaction-date">Nov 14, 2023</div>
                </div>
                <div className="transaction-amount expense">-R$ 85.20</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon grocery"></div>
                <div className="transaction-details">
                  <div className="transaction-title">Pharmacy</div>
                  <div className="transaction-date">Nov 10, 2023</div>
                </div>
                <div className="transaction-amount expense">-R$ 45.60</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon salary"></div>
                <div className="transaction-details">
                  <div className="transaction-title">Freelance Work</div>
                  <div className="transaction-date">Nov 8, 2023</div>
                </div>
                <div className="transaction-amount income">+R$ 1,200.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
