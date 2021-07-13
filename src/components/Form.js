import React, { useState } from 'react';

export const Form = () => {
  const [expense, setExpense] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleAddExpense = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleAddExpense}>
      <h2>Add Expenses</h2>

      <div className='campo'>
        <label>Expense: </label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Expense Description'
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <label>Quantity: </label>
        <input
          type='number'
          className='u-full-width'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Add'
        />
      </div>
    </form>
  );
};
