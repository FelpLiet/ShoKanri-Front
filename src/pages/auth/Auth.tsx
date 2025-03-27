import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa6";
import "./Auth.scss";
import logo from "../../assets/icons/kanri-dark.svg";

interface AuthProps {
  onLogin: () => void;
}

const Auth = ({ onLogin }: AuthProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    onLogin();
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="logo-container">
          <img src={logo} alt="ShoKanri Logo" className="logo" />

          <h1>
            {isLogin
              ? "Faça login para visualizar seus dados financeiros."
              : "Cadastre-se agora e comece a gerenciar suas finanças com eficiência."}
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  required
                />
                <FaUser className="icon user-icon" />
              </div>
            </div>
          )}

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
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
              <FaLock className="icon lock-icon" />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirmar Senha</label>
              <div className="input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Alterna entre texto e senha
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
                  required
                />
                <FaLock className="icon lock-icon" />

                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Alterna o estado
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Esqueceu a sua senha?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Entrar" : "Criar conta"}
          </button>

          <div className="switch-mode">
            {isLogin ? "Ainda não é cadastrado?" : "Já possui cadastro?"}
            <a href="#" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Cadastre-se" : "Fazer login"}
            </a>
          </div>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default Auth;
