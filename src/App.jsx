

// import ContextMenu from './Components/ContextMenu'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import './App.css'
import { useState } from 'react'
import ExpenseData from './ExpenseData'

function App() {
  const [expenses, setExpenses] = useState(ExpenseData)
  // console.log(expenses)

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm></ExpenseForm>
          <ExpenseTable expenses={expenses}></ExpenseTable>
          {/* <ContextMenu></ContextMenu> */}
        </div>
      </main>
    </>
  )
}

export default App
