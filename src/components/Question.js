import React, { useState } from 'react';

export const Question = () => {
  const [budget, setBudget] = useState(0);

  const handleSetBudget = (e) => {
    setBudget(parseInt(e.target.value));
  };

  const handleAddBudget = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Put your Budget</h2>

      <form onSubmit={handleAddBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='budget'
          onChange={handleSetBudget}
          value={budget}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Add Budget'
        />
      </form>
    </>
  );
};
