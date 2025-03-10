import { useState } from 'react';
import './Auth.scss';

interface AuthProps {
  onLogin: () => void;
}

const Auth = ({ onLogin }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); // Simulate successful login
  };
  
  return (
    <div className="auth-container">
      <div className="auth-banner">
        <div className="banner-content">
          <div className="app-logo">ShoKanri</div>
          <h2>Financial Management Simplified</h2>
          <p>
            Take control of your finances with our comprehensive tracking and analysis tools.
          </p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon"></div>
              <div className="feature-text">Track expenses and income</div>
            </div>
            <div className="feature">
              <div className="feature-icon"></div>
              <div className="feature-text">Set and achieve financial goals</div>
            </div>
            <div className="feature">
              <div className="feature-icon"></div>
              <div className="feature-text">Gain insights with detailed reports</div>
            </div>
          </div>
        </div>
        <div className="banner-decoration"></div>
      </div>
      
      <div className="auth-form-container">
        <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        
        <div className="social-login">
          <button className="google-btn">
            <div className="button-icon"></div>
            Google
          </button>
          <button className="apple-btn">
            <div className="button-icon"></div>
            Apple
          </button>
        </div>
        
        <div className="divider">or</div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="Enter your password"
            />
          </div>
          
          {isLogin && (
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        <div className="switch-mode">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Login'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
