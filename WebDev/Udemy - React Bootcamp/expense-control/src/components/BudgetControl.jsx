import { useState, useEffect } from "react";

const BudgetControl = ({ expenses, budget }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);
  const formatAmount = (budget) => {
    return budget.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Graph</p>
        <div className="content-budget">
          <p>
            <span>Budget: </span>
            {formatAmount(budget)}
          </p>
          <p>
            <span>Available: </span> {formatAmount(available)}
          </p>
          <p>
            <span>Spent: </span> {formatAmount(spent)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetControl;
