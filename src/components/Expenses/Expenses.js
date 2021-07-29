import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseChart from "./ExpenssesChart";
function EExpenses(props) {
  //console.log(props);
  const [enteredYear, setEnterdYear] = useState("2020"); //ovaj dio za default
  const saveYearHandler = (enteredYearData) => {
    setEnterdYear(enteredYearData);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveYear={saveYearHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default EExpenses;
