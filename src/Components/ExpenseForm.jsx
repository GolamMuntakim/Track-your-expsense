import  { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({ expense, setExpenses, setExpense,editingRowId ,setEditingRowId}) {
  // const [expense, setExpense] = useState({
  //   title: '',
  //   category: '',
  //   amount: '',
  // })
  const [errors, setErrors] = useState({})

  const validationConfig = {
    title : [{required: true , message: 'please enter title'}, {minLength: 5, message : 'Title should be at least 5 characters'}],
    category : [{required: true , message: 'please select a category'}],
    amount : [
      {required: true , message: 'please enter amount ' },
      {pattern: /^[1-9]\d*(\.\d+)?$/ , message: 'please enter a valid number ' }
    ]
  }

  const validate = (formData) =>{
    const errorsData = {}
    Object.entries(formData).forEach(([key, value])=>{
     validationConfig[key].some((rule) => {
      if(rule.required && !value){
        errorsData[key] = rule.message
        return true
      }
      if(rule.minLength && value.length < 5){
        errorsData[key] = rule.message
        return true
      }
      if(rule.pattern && !rule.pattern.test(value)){
        errorsData[key] = rule.message
        return true
      }
     })
    })
   
    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResullt = validate(expense)
    if(Object.keys(validateResullt).length) return 
    if(editingRowId){
      setExpenses((prevState) => 
        prevState.map((prevExpense) => {
         if(prevExpense.id === editingRowId){
          return {...expense, id: editingRowId}
         }
         return prevExpense
        })
      )
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      setEditingRowId('')
      return
    }



    if(Object.keys(validateResullt).length) return
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  console.log(expense)

  const handleChange = (e) => {
        const {name, value} = e.target
        setExpense(
            (prevState) => ({ ...prevState, [name]:value }))
            setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input label='Title' id='title' name='title' value={expense.title} onChange={handleChange}
      error={errors.title}></Input>
      <Select label="Category" id="category" name="category" value={expense.category} onChange={handleChange} error={errors.category} options={['Grocery', 'Clothes' , 'Bills', 'Education', 'Medicine']} defaultOptions='select'></Select>
      <Input label='Amount' id='amount' name='amount' type='number' value={expense.amount} onChange={handleChange}
      error={errors.amount}></Input>
      <button className="add-btn">{editingRowId? 'save' : 'Add'}</button>
    </form>
  )
}