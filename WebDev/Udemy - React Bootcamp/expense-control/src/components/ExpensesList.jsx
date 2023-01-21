import Expense from "./Expense";

const ExpensesList = ({ expenses, setEditExpense, deleteExpense }) => {
  return (
    <div className="expenses-list container">
      <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
