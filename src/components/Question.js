import React, { useState } from 'react';
import { Error } from './Error';

const msg = 'Invalid Budget. Please enter a valid value.';

export const Question = () => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const handleSetBudget = (e) => {
    setBudget(parseInt(e.target.value));
  };

  const handleAddBudget = (e) => {
    e.preventDefault();

    if (budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <>
      <h2>Put your Budget</h2>

      {error ? <Error msg={msg} /> : null}

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
