import Card from "../UI/Card";
import ExpenseItem from "./ExenseItem";
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
