import React from 'react';
import { ExpenseControl } from './components/ExpenseControl';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import { Question } from './components/Question';
import { useApp } from './useApp';

export const App = () => {
  const [
    budget,
    setBudget,
    rest,
    setRest,
    showQuestion,
    setShowQuestion,
    expenses,
    setCreateExpense,
    saveExpense,
  ] = useApp();

  const componentToRender = showQuestion ? (
    <Question
      setBudget={setBudget}
      setRest={setRest}
      setShowQuestion={setShowQuestion}
    />
  ) : (
    <div className='row'>
      <div className='one-half column'>
        <Form saveExpense={saveExpense} setCreateExpense={setCreateExpense} />
      </div>

      <div className='one-half column'>
        <List expenses={expenses} />
        <ExpenseControl budget={budget} rest={rest} />
      </div>
    </div>
  );

  return (
    <div className='container'>
      <Header headerTitle='Weekly Expenses' />

      <div className='main-content content'>{componentToRender}</div>
    </div>
  );
};
