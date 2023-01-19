import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage("Enter a valid budget");

      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label htmlFor="">Define a Budget</label>
          <input
            className="new-budget"
            placeholder="Add your Budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Add" />

        {message && <Message type={"error"}>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
