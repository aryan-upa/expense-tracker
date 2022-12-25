import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const maxYr = new Date().getFullYear();
  let yearList = new Array(maxYr - 2018);

  for (let i = 0; i < yearList.length; i++) {
    yearList[i] = (
        <option key={2019 + i} value={"" + (2019 + i)}>
          {2019 + i}
        </option>
    );
  }

  return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            {yearList.map((val) => val)}
          </select>
        </div>
      </div>
  );
};

export default ExpensesFilter;
