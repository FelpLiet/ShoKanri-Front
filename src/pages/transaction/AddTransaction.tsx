import './AddTransaction.scss';

interface AddTransactionProps {
  onBack: () => void;
}

const AddTransaction = ({ onBack }: AddTransactionProps) => {
  return (
    <div className="add-transaction-container">
      <header>
        <button className="back-button" onClick={onBack}>Voltar</button>
        <h1>Adicionar Transação</h1>
      </header>
      
      <form className="transaction-form">
        <div className="transaction-type">
          <button className="type-button expense active">Despesa</button>
          <button className="type-button income">Rendimento</button>
        </div>
        
        <div className="amount-input">
          <span className="currency">R$</span>
          <input type="text" placeholder="0.00" />
        </div>
        
        <div className="form-group">
          <label>Categoria</label>
          <select>
            <option value="">Selecione a Categoria</option>
            <option value="food">Comida</option>
            <option value="transport">Transporte</option>
            <option value="utilities">Utilidades</option>
            <option value="entertainment">Entretenimento</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Data</label>
          <input type="date" />
        </div>
        
        <div className="form-group">
          <label>Descrição</label>
          <input type="text" placeholder="Adicionar uma nota" />
        </div>
        
        <div className="form-group">
          <label>Transação recorrente</label>
          <div className="toggle-switch">
            <input type="checkbox" id="recurring" />
            <label htmlFor="recurring"></label>
          </div>
        </div>
        
        <button type="submit" className="save-button">Salvar transação</button>
      </form>
    </div>
  );
};

export default AddTransaction;
