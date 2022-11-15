import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesFromApi from "./api/expenses";

const App = () => {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log([...expensesFromApi, expense]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expensesFromApi} />
    </div>
  );
}

export default App;
