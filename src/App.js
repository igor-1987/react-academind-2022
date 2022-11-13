import ExpenseList from "./components/ExpenseList";
import expensesFromApi from "./api/expenses";

function App() {
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
