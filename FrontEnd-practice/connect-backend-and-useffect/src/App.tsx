
import './App.css'
// import { Hooks } from './use-Effect-component/ref_effect_hooks';
// import { Product_list } from './use-Effect-component/product_list';
import { Intro } from './axios/intro'
// import { useState } from 'react'


function App() {
  // const [category, setCategory] = useState<string>('')

  return (
    <div className='m-5'>
      {/* <Hooks/> */}
      {/* <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <Product_list category={category}/> */}
      <Intro/>
    </div>
  )
}

export default App
