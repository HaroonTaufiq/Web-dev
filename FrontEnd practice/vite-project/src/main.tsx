import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // when strict mode is enabled each component is rendered twice to check for side effects
  // example count = 2 istead of 1 
  <StrictMode>
    <App />
  </StrictMode>,
)
