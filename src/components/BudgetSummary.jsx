import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const BudgetSummary = () => {
  const { expenses, budget, setBudget } = useContext(ExpenseContext);

  const totalSpent = expenses.reduce(
    (initialValue, element) => initialValue + element.amount,
    0
  );
  const remaining = budget - totalSpent;
  return (
    <div className="my-4 bg-white rounded shadow">
      <h2 className="font-semibold mb-2">Budget Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Total Budget:</span>
        <span>Rs.{budget}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total spent:</span>
        <span>Rs.{totalSpent}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Remaining:</span>
        <span className={remaining < 0 ? "text-red-600" : "text-gray-600"}>
          Rs.{remaining}
        </span>
      </div>
      <div className="mt-2">
        <input
          placeholder="Set Budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border p-2 rounded w-full"
        ></input>
      </div>
    </div>
  );
};
export default BudgetSummary;
