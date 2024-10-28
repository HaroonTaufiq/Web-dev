
import './App.css'
import ExpenseList from './components/ExpenseList'
import { ExpenseFilter } from './components/ExpenseFilter'
import { ExpenseForm } from './components/ExpenseForm'
import { useState } from 'react'

const App = () => {
  const [ selectedCategory, setSelectedCategory ] = useState('All')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Shopping', amount: 10, category: 'Groceries' },
    { id: 2, description: 'Eating Out', amount: 20, category: 'Restaurants' },
    { id: 3, description: 'Transportation', amount: 30, category: 'Transport' },
    { id: 4, description: 'Rent', amount: 40, category: 'Bills' },
  ])

  const filteredExpenses = selectedCategory === 'All' ? expenses : expenses.filter((e) => e.category === selectedCategory)
   
  return (
    <div className='m-5'>
    <div className="mb-5">
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
    </div>
    <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
    </div>
      <ExpenseList expenses={filteredExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}/> 
    </div>
  )
}

export default App
