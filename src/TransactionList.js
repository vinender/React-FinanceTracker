import React from "react";
import "./App.css";
import Transaction from "./Transaction.js";

const TransactionList = ({
  income,
  setIncome,
  expense,
  setExpense,
  setTransaction,
  text,
  transaction,
  amount
}) => {
  return (
    <div className="transactionlist-container">
      <div className="transactionlist-header-container">
        <h4>Transaction History</h4>
      </div>

      <ul className="list" key={transaction.id}>
        {transaction &&
          transaction.map((trans) => (
            <Transaction
              amount={trans.amount}
              text={trans.text}
              key={trans.id}
              trans={trans}
              transaction={transaction}
              setTransaction={setTransaction}
              income={income}
              setIncome={setIncome}
              expense={expense}
              setExpense={setExpense}
            />
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;
