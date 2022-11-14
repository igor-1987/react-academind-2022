import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [state, setState] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = event => {
    setState(prevState => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = event => {
    setState(prevState => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = event => {
    setState(prevState => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
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
              value={state.title} 
              onChange={titleChangeHandler} 
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Amount
            <br />
            <input 
              type="number" 
              min="0.01" 
              step="0.01"
              value={state.amount}
              onChange={amountChangeHandler} 
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Date
            <br />
            <input 
              type="date"  
              min="2019-01-01"  
              max="2022-12-31"
              value={state.date}
              onChange={dateChangeHandler}  
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
