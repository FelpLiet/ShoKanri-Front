import './AddTransaction.scss';

interface AddTransactionProps {
  onBack: () => void;
}

const AddTransaction = ({ onBack }: AddTransactionProps) => {
  return (
    <div className="add-transaction-container">
      <header>
        <button className="back-button" onClick={onBack}>Back</button>
        <h1>Add Transaction</h1>
      </header>
      
      <form className="transaction-form">
        <div className="transaction-type">
          <button className="type-button expense active">Expense</button>
          <button className="type-button income">Income</button>
        </div>
        
        <div className="amount-input">
          <span className="currency">R$</span>
          <input type="text" placeholder="0.00" />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select>
            <option value="">Select Category</option>
            <option value="food">Food & Dining</option>
            <option value="transport">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <input type="text" placeholder="Add a note" />
        </div>
        
        <div className="form-group">
          <label>Recurring Transaction</label>
          <div className="toggle-switch">
            <input type="checkbox" id="recurring" />
            <label htmlFor="recurring"></label>
          </div>
        </div>
        
        <button type="submit" className="save-button">Save Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
