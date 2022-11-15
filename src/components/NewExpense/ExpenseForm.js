import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const initialInputValues = {
    title: '',
    amount: '',
    date: '',
  };

  const [input, setInput] = useState(initialInputValues);

  const inputChangeHandler = event => {
    const { name, value } = event.target;

    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    const {title, amount, date} = input;

    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log(data);
    setInput(initialInputValues);
  };  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <br />
            <input 
              type="text" 
              name="title"
              value={input.title} 
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
              value={input.amount}
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
              value={input.date}
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
