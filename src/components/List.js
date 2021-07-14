import React from 'react';
import { Expense } from './Expense';

export const List = ({ expenses }) => (
  <div className='gastos-realizados'>
    <h2>List</h2>

    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </div>
);
