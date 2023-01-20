const BudgetControl = ({ budget }) => {
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
            <span>Available: </span> {formatAmount(0)}
          </p>
          <p>
            <span>Spent: </span> {formatAmount(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetControl;
