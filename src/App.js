import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let INITIAL_EXPENSES = [];
  if (localStorage.getItem("expenses") !== null) {
    INITIAL_EXPENSES = JSON.parse(localStorage.getItem("expenses"));
    INITIAL_EXPENSES = INITIAL_EXPENSES.map((exp) => {
      return {
        ...exp,
        date: new Date(exp.date)
      };
    });
  }

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      const ret = [...prev, expense];
      localStorage.setItem("expenses", JSON.stringify(ret));
      return ret;
    });
  };

  return (
    <div>
      <NewExpense expeneseList={expenses} onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
