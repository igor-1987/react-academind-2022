import { useState } from "react";
import { years } from "../../api/apiData";
import Card from "../UI/Card";
import ExpenseItem from "./ExenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  const [year, setYear] = useState(String(years[0]));

  const selectChangeHandler = selectedYear => {
    setYear(selectedYear);
  }
  
  console.log(year);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year} 
        years={years}
        onSelectChange={selectChangeHandler} 
      />
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
