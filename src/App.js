import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./api/apiData";

const App = () => {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log([...expenses, expense]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
