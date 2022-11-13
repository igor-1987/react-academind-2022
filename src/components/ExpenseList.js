import ExpenseItem from "./ExenseItem";
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
