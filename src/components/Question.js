import React from 'react';

export const Question = () => {
  return (
    <>
      <h2>Put your Budget</h2>

      <form>
        <input type='number' className='u-full-width' placeholder='budget' />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Add Budget'
        />
      </form>
    </>
  );
};
