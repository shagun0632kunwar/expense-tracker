import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import BudgetSummary from "../components/BudgetSummary";
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker Dashboard</h1>
      <BudgetSummary></BudgetSummary>
      <ExpenseForm></ExpenseForm>
      <ExpenseList></ExpenseList>
    </div>
  );
};

export default Dashboard;
