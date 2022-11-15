import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(clicked => !clicked);
    setTitle(!clicked ? 'Updated!' : props.title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button 
        className="expense-item__action" 
        onClick={clickHandler}
      >
        Change title
      </button>
    </Card>
  );
}

export default ExpenseItem;