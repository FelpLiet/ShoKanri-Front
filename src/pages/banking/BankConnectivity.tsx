import { useState } from 'react';
import './BankConnectivity.scss';

interface BankConnectivityProps {
  onBack: () => void;
}

const BankConnectivity = ({ onBack }: BankConnectivityProps) => {
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);

  const banks = [
    { id: 1, name: 'Banco do Brasil', logo: 'bb_logo.png', connected: false },
    { id: 2, name: 'Nubank', logo: 'nubank_logo.png', connected: true },
    { id: 3, name: 'Itaú', logo: 'itau_logo.png', connected: false },
    { id: 4, name: 'Bradesco', logo: 'bradesco_logo.png', connected: false },
    { id: 5, name: 'Caixa Econômica', logo: 'caixa_logo.png', connected: false },
    { id: 6, name: 'Santander', logo: 'santander_logo.png', connected: false },
  ];

  const connectedBanks = banks.filter(bank => bank.connected);
  const availableBanks = banks.filter(bank => !bank.connected);

  const handleBankSelect = (bankId: number) => {
    setSelectedBankId(bankId);
  };

  const handleConnect = () => {
    // In a real app, this would handle the bank connection process
    alert('Connecting to bank...');
    setSelectedBankId(null);
  };

  const handleDisconnect = (bankId: number) => {
    // In a real app, this would handle disconnecting a bank
    alert(`Disconnecting bank #${bankId}`);
  };

  return (
    <div className="bank-connectivity-container">
      <header className="banking-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Bank Accounts</h1>
      </header>

      {selectedBankId === null ? (
        <>
          <div className="banking-info">
            <p>Connect your bank accounts to automatically import transactions and keep your finances up to date.</p>
          </div>

          <div className="connected-banks">
            <h2>Connected Accounts</h2>
            {connectedBanks.length === 0 ? (
              <div className="no-banks">No banks connected yet</div>
            ) : (
              <ul className="bank-list">
                {connectedBanks.map(bank => (
                  <li key={bank.id} className="bank-item connected">
                    <div className="bank-logo-placeholder">
                      <div className="placeholder-text">{bank.logo}</div>
                    </div>
                    <div className="bank-info">
                      <div className="bank-name">{bank.name}</div>
                      <div className="bank-status">Connected</div>
                    </div>
                    <button 
                      className="disconnect-button" 
                      onClick={() => handleDisconnect(bank.id)}
                    >
                      Disconnect
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="available-banks">
            <h2>Available Banks</h2>
            <ul className="bank-list">
              {availableBanks.map(bank => (
                <li 
                  key={bank.id} 
                  className="bank-item available"
                  onClick={() => handleBankSelect(bank.id)}
                >
                  <div className="bank-logo-placeholder">
                    <div className="placeholder-text">{bank.logo}</div>
                  </div>
                  <div className="bank-info">
                    <div className="bank-name">{bank.name}</div>
                    <div className="bank-status">Available</div>
                  </div>
                  <div className="bank-arrow">›</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="manual-option">
            <h2>Other Options</h2>
            <div className="manual-entry-card">
              <div className="manual-icon"></div>
              <div className="manual-info">
                <div className="manual-title">Manual Account Setup</div>
                <div className="manual-description">Create a custom account to track manually</div>
              </div>
              <div className="manual-arrow">›</div>
            </div>
          </div>
        </>
      ) : (
        <div className="bank-connection-form">
          <div className="selected-bank">
            <div className="bank-logo-placeholder large">
              <div className="placeholder-text">
                {banks.find(b => b.id === selectedBankId)?.logo}
              </div>
            </div>
            <h2>{banks.find(b => b.id === selectedBankId)?.name}</h2>
          </div>

          <form>
            <div className="form-group">
              <label>Username / Account Number</label>
              <input type="text" placeholder="Enter your bank username" />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your bank password" />
            </div>
            
            <div className="security-notice">
              <p>Your credentials are encrypted and securely stored. We never store your banking password on our servers.</p>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => setSelectedBankId(null)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="connect-button"
                onClick={handleConnect}
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BankConnectivity;
