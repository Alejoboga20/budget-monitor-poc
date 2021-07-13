import React, { useState } from 'react';
import { Error } from './Error';

const msg = 'Both fields are mandatory and should be valid values';

export const Form = () => {
  const [expense, setExpense] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (quantity < 1 || isNaN(quantity) || expense.trim() === '') {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={handleAddExpense}>
      <h2>Add Expenses</h2>

      {error && <Error msg={msg} />}

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
