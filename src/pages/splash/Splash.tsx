import { useEffect } from 'react';
import './Splash.scss';

interface SplashProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      
      <div className="logo-container">
        <h1>ShoKanri</h1>
      </div>
      <p className="slogan">Manage your finances with ease, gain insights, and achieve your financial goals</p>
    </div>
  );
};

export default SplashScreen;
