import './Sidebar.scss';

interface SidebarProps {
  currentScreen: number;
  onDashboardClick: () => void;
  onAddTransactionClick: () => void;
  onReportsClick: () => void;
  onGoalsClick: () => void;
  onSettingsClick: () => void;
  onBankClick: () => void;
}

const Sidebar = ({
  currentScreen,
  onDashboardClick,
  onAddTransactionClick,
  onReportsClick,
  onGoalsClick,
  onSettingsClick,
  onBankClick
}: SidebarProps) => {
  // Using the same enum values as in App.tsx
  enum Screen {
    SPLASH,
    ONBOARDING,
    AUTH,
    DASHBOARD,
    ADD_TRANSACTION,
    REPORTS,
    FINANCIAL_GOALS,
    SETTINGS,
    BANK_CONNECTIVITY
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ShoKanri</h1>
      </div>
      
      <div className="user-profile">
        <div className="avatar">JD</div>
        <div className="user-info">
          <h3>John Doe</h3>
          <p>john.doe@example.com</p>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className={currentScreen === Screen.DASHBOARD ? 'active' : ''}>
            <button onClick={onDashboardClick}>
              <span className="icon dashboard-icon"></span>
              Dashboard
            </button>
          </li>
          <li className={currentScreen === Screen.ADD_TRANSACTION ? 'active' : ''}>
            <button onClick={onAddTransactionClick}>
              <span className="icon add-icon"></span>
              Adicionar Transação
            </button>
          </li>
          <li className={currentScreen === Screen.REPORTS ? 'active' : ''}>
            <button onClick={onReportsClick}>
              <span className="icon reports-icon"></span>
              Relatórios
            </button>
          </li>
          <li className={currentScreen === Screen.FINANCIAL_GOALS ? 'active' : ''}>
            <button onClick={onGoalsClick}>
              <span className="icon goals-icon"></span>
              Metas Financeiras
            </button>
          </li>
          <li className={currentScreen === Screen.BANK_CONNECTIVITY ? 'active' : ''}>
            <button onClick={onBankClick}>
              <span className="icon bank-icon"></span>
              Conectividade Bancária
            </button>
          </li>
          <li className={currentScreen === Screen.SETTINGS ? 'active' : ''}>
            <button onClick={onSettingsClick}>
              <span className="icon settings-icon"></span>
              Configurações
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-button">
          <span className="icon logout-icon"></span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
