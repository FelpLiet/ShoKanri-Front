import './Settings.scss';

interface SettingsProps {
  onBack: () => void;
}

const Settings = ({ onBack }: SettingsProps) => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Configurações</h1>
      </header>

      <div className="profile-section">
        <div className="profile-image">JD</div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
        </div>
        <button className="edit-profile-button">Edit</button>
      </div>

      <div className="settings-group">
        <h3>Conta</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon account"></div>
            <div className="settings-label">Informações pessoais</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon password"></div>
            <div className="settings-label">Alterar senha</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon notification"></div>
            <div className="settings-label">Notificações</div>
            <div className="settings-toggle">
              <input type="checkbox" id="notifications" defaultChecked />
              <label htmlFor="notifications"></label>
            </div>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h3>Preferências</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon currency"></div>
            <div className="settings-label">Moeda</div>
            <div className="settings-value">BRL (R$)</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon language"></div>
            <div className="settings-label">Language</div>
            <div className="settings-value">Português</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon theme"></div>
            <div className="settings-label">Modo escuro</div>
            <div className="settings-toggle">
              <input type="checkbox" id="darkmode" />
              <label htmlFor="darkmode"></label>
            </div>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h3>Data Management</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon export"></div>
            <div className="settings-label">Exportar dados</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon backup"></div>
            <div className="settings-label">Configurações de backup</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item danger">
            <div className="settings-icon delete"></div>
            <div className="settings-label">Excluir conta</div>
            <div className="settings-arrow">›</div>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h3>About</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon help"></div>
            <div className="settings-label">Ajuda e Suporte</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon privacy"></div>
            <div className="settings-label">Política de privacidade</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon terms"></div>
            <div className="settings-label">Termos de Serviço</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon version"></div>
            <div className="settings-label">Versão</div>
            <div className="settings-value">1.0.0</div>
          </li>
        </ul>
      </div>

      <button className="logout-button">Sair</button>
    </div>
  );
};

export default Settings;
