import { useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import './App.scss';

// Import page components
import SplashScreen from './pages/splash/Splash';
import Onboarding from './pages/onboarding/Onboarding';
import Auth from './pages/auth/Auth';
import Dashboard from './pages/dashboard/Dashboard';
import AddTransaction from './pages/transaction/AddTransaction';
import Reports from './pages/reports/Reports';
import FinancialGoals from './pages/goals/FinancialGoals';
import Settings from './pages/settings/Settings';
import BankConnectivity from './pages/banking/BankConnectivity';
import Sidebar from './components/Sidebar/Sidebar';
import LandingPage from './pages/landing/LandingPage';

function App() {
  enum Screen {
    SPLASH,
    ONBOARDING,
    AUTH,
    DASHBOARD,
    ADD_TRANSACTION,
    REPORTS,
    FINANCIAL_GOALS,
    SETTINGS,
    BANK_CONNECTIVITY,
    LANDING
  }
  
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LANDING);

  // Navigation handlers
  const goToOnboarding = () => setCurrentScreen(Screen.ONBOARDING);
  const goToAuth = () => setCurrentScreen(Screen.AUTH);
  const goToDashboard = () => setCurrentScreen(Screen.DASHBOARD);
  const goToAddTransaction = () => setCurrentScreen(Screen.ADD_TRANSACTION);
  const goToReports = () => setCurrentScreen(Screen.REPORTS);
  const goToFinancialGoals = () => setCurrentScreen(Screen.FINANCIAL_GOALS);
  const goToSettings = () => setCurrentScreen(Screen.SETTINGS);
  const goToBankConnectivity = () => setCurrentScreen(Screen.BANK_CONNECTIVITY);

  // Determine if we should show the sidebar
  const showSidebar = currentScreen !== Screen.SPLASH && 
                     currentScreen !== Screen.ONBOARDING && 
                     currentScreen !== Screen.AUTH &&
                     currentScreen !== Screen.LANDING;

  // Render the current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LANDING:
        return <LandingPage onGetStarted={goToAuth} />;
      case Screen.SPLASH:
        return <SplashScreen onComplete={goToOnboarding} />;
      case Screen.ONBOARDING:
        return <Onboarding onComplete={goToAuth} />;
      case Screen.AUTH:
        return <Auth onLogin={goToDashboard} />;
      case Screen.DASHBOARD:
        return (
          <Dashboard 
            // onAddTransaction={goToAddTransaction}
            onViewReports={goToReports}
            onViewGoals={goToFinancialGoals}
            onOpenSettings={goToSettings}
            // onConnectBank={goToBankConnectivity}
          />
        );
      case Screen.ADD_TRANSACTION:
        return <AddTransaction onBack={goToDashboard} />;
      case Screen.REPORTS:
        return <Reports onBack={goToDashboard} />;
      case Screen.FINANCIAL_GOALS:
        return <FinancialGoals onBack={goToDashboard} />;
      case Screen.SETTINGS:
        return <Settings onBack={goToDashboard} />;
      case Screen.BANK_CONNECTIVITY:
        return <BankConnectivity onBack={goToDashboard} />;
      default:
        return <SplashScreen onComplete={goToOnboarding} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* {children} */}
    
      <div className="app-container">
        {showSidebar && (
          <Sidebar 
            currentScreen={currentScreen}
            onDashboardClick={goToDashboard}
            onAddTransactionClick={goToAddTransaction} //
            onReportsClick={goToReports}
            onGoalsClick={goToFinancialGoals}
            onSettingsClick={goToSettings}
            onBankClick={goToBankConnectivity} //
          />
        )}
        <div className="content-area">
          {renderScreen()}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
