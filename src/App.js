import ExpenseList from "./components/Expenses/ExpenseList";
import expensesFromApi from "./api/expenses";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseList
        expenses={expensesFromApi} 
      />
    </div>
  );
}

export default App;
