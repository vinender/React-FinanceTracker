import React from "react";
import "./App.css";

const Balance = ({ income, expense }) => {
  const balance = income + expense;
  const balanceCheck = balance > 0 ? `${balance}.00` : "0.00";

  return (
    <div className="balance-container">
      <div className="balance-info">
        <h4>YOUR BALANCE</h4>
        <h1 id="balance">₹ {balanceCheck}</h1>
      </div>
    </div>
  );
};

export default Balance;
