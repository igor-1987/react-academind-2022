import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [state, setState] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = event => {
    const { name, value } = event.target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(state.title);
  console.log(state.amount, typeof(state.amount));
  console.log(state.date);

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <br />
            <input 
              type="text" 
              name="title"
              value={state.title} 
              onChange={inputChangeHandler} 
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
              value={state.amount}
              onChange={inputChangeHandler} 
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
              value={state.date}
              onChange={inputChangeHandler}  
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
