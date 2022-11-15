import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import { expenses } from '../../api/apiData';
import './NewExpense.css';


const NewExpense = ({ onAddExpense }) => {
  const initialInputValues = {
    title: '',
    amount: '',
    date: '',
  };

  const [input, setInput] = useState(initialInputValues);
  const {title, amount, date} = input;

  const inputChangeHandler = event => {
    const { name, value } = event.target;

    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    const data = {
      id: `e${expenses.length + 1}`,
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onAddExpense(data);
    setInput(initialInputValues);
  }; 
  return (
    <div className="new-expense">
      <ExpenseForm 
        onInputChange={inputChangeHandler}
        onFormSubmit={formSubmitHandler} 
        title={title}
        amount={amount}
        date={date}
      />
    </div>
  );
};

export default NewExpense;