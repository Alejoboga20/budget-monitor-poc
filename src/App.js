import React, { useState } from 'react';
import { ExpenseControl } from './components/ExpenseControl';
import { Form } from './components/Form';
import { List } from './components/List';
import { Question } from './components/Question';

export const App = () => {
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const handleAddNewExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className='container'>
      <header>
        <h1>Weekly Expenses</h1>
      </header>
      <hr />

      <div className='contenido-principal contenido'>
        {showQuestion ? (
          <Question
            setBudget={setBudget}
            setRest={setRest}
            setShowQuestion={setShowQuestion}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Form handleAddNewExpense={handleAddNewExpense} />
            </div>

            <div className='one-half column'>
              <List expenses={expenses} />
              <ExpenseControl budget={budget} rest={rest} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
