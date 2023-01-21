import { useState, useEffect } from "react";
import Message from "./Message";
import CloseBtn from "../img/cross_icon.svg";
import Expense from "./Expense";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({});
    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes("")) {
      setMessage("All fields are required");
      setTimeout(() => {
        setMessage("");
      }, 4000);
      return;
    }

    saveExpense({ name, amount, category, id, date });
  };
  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="Close Button" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? "animate" : "close"}`}
      >
        <legend>{editExpense.name ? "Edit Expense" : "New Expense"}</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="name">Expense Name</label>
          <input
            type="text"
            id="name"
            placeholder="Add the name of the expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Add the amount of the expense"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""> -- Select -- </option>
            <option value="entertainment"> Entertainment </option>
            <option value="food"> Food </option>
            <option value="health"> Health </option>
            <option value="home"> Home </option>
            <option value="other"> Other </option>
            <option value="savings"> Savings </option>
            <option value="subscriptions"> Subscriptions </option>
          </select>
        </div>
        <input type="submit" value={editExpense.name ? "Save" : "Add"} />
      </form>
    </div>
  );
};

export default Modal;
