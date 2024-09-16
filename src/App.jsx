

// import ContextMenu from './Components/ContextMenu'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import './App.css'
import { useState } from 'react'
import ExpenseData from './ExpenseData'

function App() {
  const [expenses, setExpenses] = useState(ExpenseData)
  const [editingRowId, setEditingRowId] = useState('')
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })


  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense}  editingRowId={editingRowId} setEditingRowId={setEditingRowId}></ExpenseForm>
          <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} 
          setEditingRowId={setEditingRowId}
         ></ExpenseTable>
        </div>
      </main>
    </>
  )
}

export default App
