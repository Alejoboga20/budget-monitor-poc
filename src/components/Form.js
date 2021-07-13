import React, { useState } from 'react';

export const Form = () => {
  return (
    <form>
      <h2>Add Expenses</h2>

      <div className='campo'>
        <label>Expense: </label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Expense Description'
        />

        <label>Quantity: </label>
        <input type='number' className='u-full-width' />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Add'
        />
      </div>
    </form>
  );
};
