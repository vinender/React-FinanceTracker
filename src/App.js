import React from "react";
import "./App.css";
import Header from "./Header.js";
import Balance from "./Balance.js";
import IncomeExpense from "./IncomeExpense.js";
import TransactionList from "./TransactionList.js";
import AddTransaction from "./AddTransaction.js";

import { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // const [balance, setBalance] = useState("");
  const [transaction, setTransaction] = useState([]);

  return (
    <div className="app-container">
      <Header />
      <Balance income={income} expense={expense} />
      <IncomeExpense
        amount={amount}
        income={income}
        setIncome={setIncome}
        expense={expense}
        setExpense={setExpense}
        transaction={transaction}
      />

      <TransactionList
        setTransaction={setTransaction}
        transaction={transaction}
        income={income}
        setIncome={setIncome}
        expense={expense}
        setExpense={setExpense}
      />
      <AddTransaction
        item={item}
        amount={amount}
        setAmount={setAmount}
        setItem={setItem}
        transaction={transaction}
        setTransaction={setTransaction}
        income={income}
        setIncome={setIncome}
        expense={expense}
        setExpense={setExpense}
      />
    </div>
  );
};

export default App;
