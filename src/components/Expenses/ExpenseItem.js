import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //importiranje css-filea
//koristimo className umisto class, a sve ostalo je isto kao u standradnoj javascripti i cssu
const ExpenseItem = (props) => {
  //prvi dio ovog niza je varijabla koju mijenjamo props.title, a druga promijenjeni dio
  //koji zapisujemo u novoj funkciji
  const [title, setTitle] = useState(props.title); //use state uvijek vraća niz od dvi varijable

  const clickHandler = () => {
    setTitle("Updated!");
  };
  //console.log(props);
  return (
    <Card className="expense-item">
      <ExpenseDate date2={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
