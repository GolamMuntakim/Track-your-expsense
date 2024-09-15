import  { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const [errors, setErrors] = useState({})

  const validationConfig = {
    title : [{required: true , message: 'please enter title'}, {minLength: 5, message : 'Title should be at least 5 characters'}],
    category : [{required: true , message: 'please select a category'}],
    amount : [{required: true , message: 'please enter amount '}]
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
     })
    })
   
    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResullt = validate(expense)
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
      <Input label='Amount' id='amount' name='amount' value={expense.amount} onChange={handleChange}
      error={errors.amount}></Input>
      <button className="add-btn">Add</button>
    </form>
  )
}