import { useState } from 'react';

import ExpenseList from './components/ExpenseList';
import Banner from './components/Banner';
import Expense from './components/Expense';

function App() {
  const [selectedExpense, setSelectedExpense] = useState()

  return (
    <>
      <div className="card">
        <Banner headerText="Xpensor Managing Payments" />
        {
            selectedExpense ? 
              <Expense expense={selectedExpense} /> : 
              <ExpenseList selectExpense={setSelectedExpense} />
        }
      </div>
    </>
  )
}

export default App
