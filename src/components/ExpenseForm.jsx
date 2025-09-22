import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("General");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      alert("Please fill all the fields");
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    addExpense(newExpense);
    setTitle("");
    setAmount(0);
    setCategory("General");
    setDate("");
  };

  return (
    <div className="my-4 bg-white rounded shadow">
      <h2 className="font-semibold mb-2 md:grid-cols-2">ExpenseForm</h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input
          type="number"
          placeholder="Amount"
          className="p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>

        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>General</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
        </select>
        <input
          type="date"
          className="p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 col-span-2">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ExpenseForm;
