import React from 'react';
const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});
  return (
    <div>
      <h2>Total Amount Spent: {totalAmount}</h2>
      <h3>Amount Spent by Category:</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>{category}: {amount}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseSummary;
