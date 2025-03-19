import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import "./Auth.scss";
import logo from "../../assets/kanri-dark.svg"; // Importando a imagem

interface AuthProps {
  onLogin: () => void;
}

const Auth = ({ onLogin }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); // Simulate successful login
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        {/* Adicionando a logo aqui */}
        <img src={logo} alt="ShoKanri Logo" className="logo" />

        <h1>
          {isLogin
            ? "Cadastre-se agora e comece a gerenciar suas finanças com eficiência."
            : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
              <FaEnvelope className="icon email-icon" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"} // Alterna entre texto e senha
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
              <FaLock className="icon lock-icon" />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)} // Alterna o estado
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Esqueceu a sua senha?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <div className="switch-mode">
          {isLogin ? "Ainda não é cadastrado?" : "Já possui cadastro?"}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Cadastre-se" : "Fazer login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
