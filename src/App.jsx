import ExpenseList from './components/ExpenseList';
import Banner from './components/Banner';

import "./App.css"

function App() {
  return (
    <>
      <div className="card">
        <Banner headerText="Xpensor Managing Payments" />
        <ExpenseList />
      </div>
    </>
  )
}

export default App
