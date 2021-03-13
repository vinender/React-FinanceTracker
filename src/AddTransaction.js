import React from "react";

const AddTransaction = ({
  item,
  amount,
  setItem,
  setAmount,
  transaction,
  setTransaction,
  income,
  setIncome,
  expense,
  setExpense
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const trans = {
      text: item,
      amount: amount,
      id: Math.floor(Math.random() * 1000)
    };

    setTransaction([...transaction, trans]);
    setItem("");
    setAmount("");

    const amt = Number(trans.amount);

    Math.sign(amt) === 1
      ? setIncome((prev) => prev + amt)
      : setExpense((prev) => prev + amt);
  };

  //   setTransaction([
  //     ...transaction,

  //     {
  //       text: item,
  //       amount: amount,
  //       id: Math.floor(Math.random() * 1000)
  //     }
  //   ]);
  //   setItem("");
  //   setAmount("");

  //   transaction.map((trans) =>
  //     Math.sign(trans.amount) === 1
  //       ? setIncome(trans.amount)
  //       : setExpense(trans.amount)
  //   );
  // };

  return (
    <div className="addtransaction-container">
      <div className="add-trans-header">
        <h4>Add New Transaction</h4>
      </div>

      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>

          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <button type="button" onClick={onSubmit} value="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
