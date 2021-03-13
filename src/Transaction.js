import React from "react";

const Transaction = ({
  income,
  setIncome,
  expense,
  setExpense,
  trans,
  transaction,
  setTransaction,
  text,
  amount
}) => {
  const delTransaction = (e) => {
    Math.sign(e.target.value) === 1
      ? setIncome((income -= e.target.value))
      : setExpense((expense -= e.target.value));
    setTransaction(transaction.filter((el) => el.id !== trans.id));
  };

  let signColor = "trans";
  signColor += Math.sign(amount) === -1 ? "Negative" : "Positive";

  return (
    <div className="transaction">
      {text}
      <span className={signColor}>
        ₹{amount}
        <button value={amount} onClick={delTransaction} className="del-btn">
          x
        </button>
      </span>
    </div>
  );
};

export default Transaction;
