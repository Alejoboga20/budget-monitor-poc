import React, { useState } from 'react';
import { Question } from './components/Question';

export const App = () => {
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);

  return (
    <div className='container'>
      <header>
        <h1>Weekly Expenses</h1>
      </header>
      <hr />

      <div className='contenido-principal contenido'>
        <Question setBudget={setBudget} setRest={setRest} />
      </div>
    </div>
  );
};
