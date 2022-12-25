import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const todaysDate = new Date()
    .toLocaleDateString()
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-");

  const [inp, setInp] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const titleChangeHandler = (e) => {
    setInp((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setInp((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setInp((prev) => {
      return { ...prev, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      amount: +inp.amount,
      title: inp.title,
      date: new Date(inp.date)
    };

    props.onSaveExpenseData(expenseData);

    setInp({
      amount: "",
      title: "",
      date: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={inp.title}
            required
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            required
            value={inp.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max={todaysDate}
            required
            value={inp.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
