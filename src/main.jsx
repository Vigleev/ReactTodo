import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoPage from './Pages/TodoPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>

  
)
