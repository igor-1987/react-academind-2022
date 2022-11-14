import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = e => setTitle(e.target.value);
  const amountChangeHandler = e => setAmount(+e.target.value);
  const dateChangeHandler = e => setDate(e.target.value);

  console.log(title);
  console.log(amount, typeof(amount));
  console.log(date);

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <br />
            <input 
              type="text" 
              value={title} 
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
              value={amount}
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
              value={date}
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
