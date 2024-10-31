
import { useEffect, useRef } from 'react'

export const Hooks = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [])

  useEffect(() => {
    document.title = 'Hooks'
  }
  , []) 

  return (
    <div className='m-3'>
      <label htmlFor="inputField">Input Field</label>
      <input ref={ref} type='text' className='form-control' id="inputField" placeholder="Enter text here" />
    </div>
  )
}
