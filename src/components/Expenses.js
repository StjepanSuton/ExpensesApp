import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses.css";
function EExpenses(props) {
  console.log(props);

  return (
    <div className="expenses">
      <div>
        <ExpenseItem expenses={props.expenses}></ExpenseItem>
      </div>
    </div>
  );
}

export default EExpenses;
