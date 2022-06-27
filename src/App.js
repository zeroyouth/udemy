import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '화장지',
    amount: 100000,
    date: new Date(2020, 8, 14),
  },
  { id: 'e2', title: '신상 TV', amount: 996000, date: new Date(2021, 4, 12) },
  {
    id: 'e3',
    title: '차 보험료',
    amount: 367000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: '새 책상 (우드형)',
    amount: 560000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => { //이전 값을 기반으로 하는 깔끔한 상태 업데이트 방법
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
