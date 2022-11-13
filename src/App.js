import React from "react";
import ExpenseList from "./components/ExpenseList";
import expensesFromApi from "./api/expenses";

function App() {
  return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, 'Let\'s get started!'),
    React.createElement(ExpenseList, { expenses: expensesFromApi }),
  );
  // React.createElement takes 3 arguments: 
  // 1) element which will be created,
  // 2) object which configures this element
  // 3) child elements of created element
}

export default App;
