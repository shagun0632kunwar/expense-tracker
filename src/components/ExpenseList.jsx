import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);
  if (expenses.length === 0) {
    return <p className="mt-4">No expenses added yet...</p>;
  }
  return (
    <div className="my-6 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">ExpenseList</h2>
      <ul className="divide-y">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between py-2">
            <p className="font-medium">{expense.title}</p>
            <p calssName="text-sm text-gray-500">
              {`${expense.category} || ${expense.date}`}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-semibold">Rs.{expense.amount}</span>
              <button
                className="text-red-600 hover:underline"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
