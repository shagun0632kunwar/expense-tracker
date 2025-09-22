import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(10000);
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, budget, setBudget }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
