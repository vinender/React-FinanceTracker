import React from "react";
import "./App.css";

const IncomeExpense = ({ expense, income }) => {
  console.log(expense);
  return (
    <div className="income-expense-container">
      <div className="income-info">
        <h3>INCOME</h3>
        <h2 className="income-field">₹ {income + ".00"}</h2>
      </div>

      <div className="expense-info">
        <h3>EXPENSE</h3>
        <h2 className={`expense-field ${expense > income ? "-pulse" : ""}`}>
          ₹ {expense * -1 + ".00"}
        </h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
