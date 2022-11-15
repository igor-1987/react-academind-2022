import './ExpenseForm.css';

const ExpenseForm = ({ 
  onInputChange, 
  onFormSubmit,
  date,
  title,
  amount,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <br />
            <input 
              type="text" 
              name="title"
              value={title} 
              onChange={onInputChange} 
            />
          </label>
        </div>

        <div className="new-expense__control">
          <label>
            Amount
            <br />
            <input 
              type="number" 
              name="amount"
              min="0.01" 
              step="0.01"
              value={amount}
              onChange={onInputChange} 
            />
          </label>
        </div>

        <div className="new-expense__control">
          <label>
            Date
            <br />
            <input 
              type="date"  
              name="date" 
              min="2019-01-01"  
              max="2022-12-31"
              value={date}
              onChange={onInputChange}  
            />
          </label>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
