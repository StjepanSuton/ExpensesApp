import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //importiranje css-filea
import Expenses from "./Expenses";
//koristimo className umisto class, a sve ostalo je isto kao u standradnoj javascripti i cssu
function ExpenseItem(props) {
  console.log(props);
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date2={props.expenses.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
      </div>
      <div className="expense-item__price">{props.expenses.amount}</div>
    </div>
  );
}

export default ExpenseItem;
