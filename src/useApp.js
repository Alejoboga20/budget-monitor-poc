import { useEffect, useState } from 'react';

export const useApp = () => {
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [createExpense, setCreateExpense] = useState(false);
  const [expense, saveExpense] = useState({});

  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense]);
      const restBudget = rest - expense.quantity;
      setRest(restBudget);
    }

    setCreateExpense(false);
  }, [expense, expenses, createExpense, rest]);

  return [
    budget,
    setBudget,
    rest,
    setRest,
    showQuestion,
    setShowQuestion,
    expenses,
    setCreateExpense,
    saveExpense,
  ];
};
