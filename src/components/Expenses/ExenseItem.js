import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

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
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;