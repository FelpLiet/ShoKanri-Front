import './Sidebar.scss';
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { kanriLogo } from "@/assets/logo/logoKanri"
import { useTheme } from "@/components/theme-provider"
import { goalsIcon, 
  layoutIcon, 
  bankIcon, 
  reportIcon, 
  cardsIcon, 
  settingsIcon, 
  logoutIcon 
} from "@/assets/icons/iconsSidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

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
        <img src={kanriLogo} alt="ShoKanri" className="kanri-logo" />
        <h1>ShoKanri</h1>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className={currentScreen === Screen.DASHBOARD ? "active" : ""}>
            <button onClick={onDashboardClick}>
              <img src={layoutIcon} alt="Dashboard" className="icon dashboard-icon" />
              Dashboard    
            </button>
          </li>
          <li className={currentScreen === Screen.ADD_TRANSACTION ? "active" : ""}>
            <button onClick={onAddTransactionClick}>
              <img src={bankIcon} alt="Adicionar Transação" className="icon bank-icon" />
              Adicionar Transação     
            </button>
          </li>
          <li className={currentScreen === Screen.REPORTS ? "active" : ""}>
            <button onClick={onReportsClick}>
              <img src={reportIcon} alt="Relatórios" className="icon report-icon" />
              Relatórios     
            </button>
          </li>
          <li className={currentScreen === Screen.FINANCIAL_GOALS ? "active" : ""}>
            <button onClick={onGoalsClick}>
              <img src={goalsIcon} alt="Metas Financeiras" className="icon goals-icon" />
              Metas Financeiras
            </button>
          </li>
          <li className={currentScreen === Screen.BANK_CONNECTIVITY ? "active" : ""}>
            <button onClick={onBankClick}>
              <img src={cardsIcon} alt="Conectividade Bancária" className="icon cards-icon" />
              Conectividade Bancária
            </button>
          </li>
          <li className={currentScreen === Screen.SETTINGS ? "active" : ""}>
            <button onClick={onSettingsClick}>
              <img src={settingsIcon} alt="Configurações" className="icon settings-icon" />
              Configurações
            </button>
          </li>
          <li className={currentScreen === Screen.SETTINGS ? 'active' : ''}>
            <ModeToggle />
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button">
          <img src={logoutIcon} alt="Logout" className="icon logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
