import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from '../src/pages/TodoPage'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <TodoPage/>
    </QueryClientProvider>
  </StrictMode>

  
)
