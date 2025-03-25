import './Sidebar.scss';
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

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
          <li className={currentScreen === Screen.SETTINGS ? 'active' : ''}>
            <ModeToggle />
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
