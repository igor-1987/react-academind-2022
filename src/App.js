import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesFromApi from "./api/expenses";

const App = () => {
  return (
    <div>
      <NewExpense />
      <ExpenseList
        expenses={expensesFromApi} 
      />
    </div>
  );
}

export default App;
