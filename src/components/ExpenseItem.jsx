import React from 'react';
const ExpenseItem = ({ expense, onDelete }) => {
  const { id, title, amount, date, category } = expense;
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{amount} - {date} - {category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default ExpenseItem;
