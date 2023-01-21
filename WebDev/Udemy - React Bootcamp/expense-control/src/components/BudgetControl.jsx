import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const totalAvailable = budget - totalSpent;

    // Calculate the percentage spent
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(totalSpent);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1400);
  }, [expenses]);
  const formatAmount = (budget) => {
    return budget.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm("Do you want to restart the app?");
    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false)
    }
  };
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
      <div className="content-budget">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span>
          {formatAmount(budget)}
        </p>
        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Available: </span> {formatAmount(available)}
        </p>
        <p>
          <span>Spent: </span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
