import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import './App.css'
import ExpenseData from './ExpenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses',ExpenseData)
  const [editingRowId, setEditingRowId] = useLocalStorage('editing id','')
  const [expense, setExpense] = useLocalStorage('expense',{
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
