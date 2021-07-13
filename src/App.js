import React from 'react';
import { Question } from './components/Question';

export const App = () => {
  return (
    <div className='container'>
      <header>
        <h1>Weekly Expenses</h1>
      </header>
      <hr />

      <div className='contenido-principal contenido'>
        <Question />
      </div>
    </div>
  );
};
