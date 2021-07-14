import React from 'react';

export const ExpenseControl = ({ budget, rest }) => {
  return (
    <>
      <div className='alert alert-primary'>Budget: $ {budget}</div>
      <div className='alert'>Rest: $ {rest}</div>
    </>
  );
};
