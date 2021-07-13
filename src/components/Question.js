import React, { useState } from 'react';
import { Error } from './Error';

const msg = 'Invalid Budget. Please enter a valid value.';

export const Question = ({ setBudget, setRest, setShowQuestion }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const handleSetQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddQuantity = (e) => {
    e.preventDefault();

    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(quantity);
    setRest(quantity);
    setShowQuestion(false);
  };

  return (
    <>
      <h2>Put your Budget</h2>

      {error ? <Error msg={msg} /> : null}

      <form onSubmit={handleAddQuantity}>
        <input
          type='number'
          className='u-full-width'
          placeholder='budget'
          onChange={handleSetQuantity}
          value={quantity}
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
