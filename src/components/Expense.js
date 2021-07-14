import React from 'react';

export const Expense = ({ expense }) => (
  <li className='gastos'>
    <p>
      {expense.expense}
      <span className='gasto'>$ {expense.quantity}</span>
    </p>
  </li>
);
