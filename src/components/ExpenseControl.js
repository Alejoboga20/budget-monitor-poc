import React from 'react';
import { checkBudget } from '../helpers/helper';

export const ExpenseControl = ({ budget, rest }) => {
  return (
    <>
      <div className='alert alert-primary'>Budget: $ {budget}</div>
      <div className={checkBudget(budget, rest)}>Rest: $ {rest}</div>
    </>
  );
};
