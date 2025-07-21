import { useState } from 'react';

import ExpenseList from './components/ExpenseList';
import Banner from './components/Banner';
import Expense from './components/Expense';

function App() {
  const [selectedExpense, setSelectedExpense] = useState(false)

  return (
    <>
      <div className="card">
        <Banner headerText="Xpensor Managing Payments" />
        {
            selectedExpense ? <Expense /> : <ExpenseList />
        }
      </div>
    </>
  )
}

export default App
