import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1> Expenses Control </h1>

      {isValidBudget ? (
        <BudgetControl budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
