import { useState } from 'react';
import './Onboarding.scss';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Track Your Expenses",
      description: "Keep an eye on where your money goes with easy expense tracking. Categorize transactions and see where you can save more.",
      image: "expense-placeholder.png"
    },
    {
      title: "Set Financial Goals",
      description: "Define and track your financial goals to build a better future. Set savings targets and watch your progress over time.",
      image: "goals-placeholder.png"
    },
    {
      title: "Insightful Reports",
      description: "Get detailed reports and insights about your spending habits. Make informed decisions based on personalized data.",
      image: "reports-placeholder.png"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-sidebar">
        <div className="app-logo">ShoKanri</div>
        <div className="sidebar-content">
          <h2>Welcome to ShoKanri</h2>
          <p>The all-in-one solution to manage your personal finances and achieve your financial goals.</p>
        </div>
        <div className="background-wave"></div>
      </div>
      
      <div className="onboarding-content">
        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`step ${currentStep === index ? 'active' : 'hidden'}`}
            >
              <div className="image-placeholder">
                <div className="placeholder-text">Image: {step.image}</div>
              </div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="navigation">
          <div className="pagination">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${currentStep === index ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
              ></div>
            ))}
          </div>
          
          <div className="navigation-buttons">
            {currentStep < steps.length - 1 ? (
              <>
                <button className="skip-button" onClick={onComplete}>
                  Skip
                </button>
                <button className="next-button" onClick={nextStep}>
                  Next
                </button>
              </>
            ) : (
              <button className="next-button" onClick={onComplete}>
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
