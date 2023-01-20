import Expense from "./Expense"

const ExpensesList = ({expenses}) => {
  return (
    <div className="expenses-list container">
        <h2>{expenses.length ? 'Expenses' : 'No expenses yet'}</h2>

        {expenses.map( expense => (
            <Expense 
            key={expense.id}
            expense={expense}
            />
        ))}
    </div>
  )
}

export default ExpensesList