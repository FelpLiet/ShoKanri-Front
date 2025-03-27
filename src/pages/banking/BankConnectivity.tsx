import { useState } from 'react';
import './BankConnectivity.scss';


interface BankConnectivityProps {
  onBack: () => void;
}

const BankConnectivity = ({ onBack }: BankConnectivityProps) => {
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);

  const banks = [
    { id: 1, name: 'Banco do Brasil', logo: "logo_bb.png", connected: false },
    { id: 2, name: 'Nubank', logo: 'logo_nubank.png', connected: true },
    { id: 3, name: 'Itaú', logo: 'logo_itau.png', connected: false },
    { id: 4, name: 'Bradesco', logo: 'logo_bradesco.png', connected: false },
    { id: 5, name: 'Caixa Econômica', logo: 'logo_caixa.png', connected: false },
    { id: 6, name: 'Santander', logo: 'logo_santander.png', connected: false },
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
        <button className="back-button" onClick={onBack}>Voltar</button>
        <h1>Contas bancárias</h1>
      </header>

      {selectedBankId === null ? (
        <>
          <div className="banking-info">
            <p>Conecte suas contas bancárias para importar transações automaticamente e manter suas finanças atualizadas.</p>
          </div>

          <div className="connected-banks">
            <h2>Contas conectadas</h2>
            {connectedBanks.length === 0 ? (
              <div className="no-banks">Ainda não há bancos conectados</div>
            ) : (
              <ul className="bank-list">
                {connectedBanks.map(bank => (
                  <li key={bank.id} className="bank-item connected">
                    <div className="bank-logo-placeholder">
                    <img src={`${bank.logo}`} style={{borderRadius:"8px"}}></img>
                    </div>
                    <div className="bank-info">
                      <div className="bank-name">{bank.name}</div>
                      <div className="bank-status">Conectado</div>
                    </div>
                    <button 
                      className="disconnect-button" 
                      onClick={() => handleDisconnect(bank.id)}
                    >
                      Desconectar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="available-banks">
            <h2>Bancos disponíveis</h2>
            <ul className="bank-list">
              {availableBanks.map(bank => (
                <li 
                  key={bank.id} 
                  className="bank-item available"
                  onClick={() => handleBankSelect(bank.id)}
                >
                  <div className="bank-logo-placeholder">
                  <img src={`${bank.logo}`} style={{borderRadius:"8px"}}></img>
                  </div>
                  <div className="bank-info">
                    <div className="bank-name">{bank.name}</div>
                    <div className="bank-status">Disponível</div>
                  </div>
                  <div className="bank-arrow">›</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="manual-option">
            <h2>Outras opções</h2>
            <div className="manual-entry-card">
              <div className="manual-icon"></div>
              <div className="manual-info">
                <div className="manual-title">Configuração manual da conta</div>
                <div className="manual-description">Criar uma conta personalizada para acompanhar manualmente</div>
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
              <label>Nome de usuário / Número da Conta</label>
              <input type="text" placeholder="Digite seu nome de usuário do banco" />
            </div>
            
            <div className="form-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha bancária" />
            </div>
            
            <div className="security-notice">
              <p>Suas credenciais são criptografadas e armazenadas com segurança. Nunca armazenamos sua senha bancária em nossos servidores.</p>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => setSelectedBankId(null)}
              >
                Cancelar
              </button>
              <button 
                type="button" 
                className="connect-button"
                onClick={handleConnect}
              >
                Conectar 
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BankConnectivity;
