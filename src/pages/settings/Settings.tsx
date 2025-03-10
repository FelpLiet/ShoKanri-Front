import './Settings.scss';

interface SettingsProps {
  onBack: () => void;
}

const Settings = ({ onBack }: SettingsProps) => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Settings</h1>
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
        <h3>Account</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon account"></div>
            <div className="settings-label">Personal Information</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon password"></div>
            <div className="settings-label">Change Password</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon notification"></div>
            <div className="settings-label">Notifications</div>
            <div className="settings-toggle">
              <input type="checkbox" id="notifications" defaultChecked />
              <label htmlFor="notifications"></label>
            </div>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h3>Preferences</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon currency"></div>
            <div className="settings-label">Currency</div>
            <div className="settings-value">BRL (R$)</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon language"></div>
            <div className="settings-label">Language</div>
            <div className="settings-value">Portuguese</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon theme"></div>
            <div className="settings-label">Dark Mode</div>
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
            <div className="settings-label">Export Data</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon backup"></div>
            <div className="settings-label">Backup Settings</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item danger">
            <div className="settings-icon delete"></div>
            <div className="settings-label">Delete Account</div>
            <div className="settings-arrow">›</div>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h3>About</h3>
        <ul className="settings-list">
          <li className="settings-item">
            <div className="settings-icon help"></div>
            <div className="settings-label">Help & Support</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon privacy"></div>
            <div className="settings-label">Privacy Policy</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon terms"></div>
            <div className="settings-label">Terms of Service</div>
            <div className="settings-arrow">›</div>
          </li>
          <li className="settings-item">
            <div className="settings-icon version"></div>
            <div className="settings-label">Version</div>
            <div className="settings-value">1.0.0</div>
          </li>
        </ul>
      </div>

      <button className="logout-button">Log Out</button>
    </div>
  );
};

export default Settings;
