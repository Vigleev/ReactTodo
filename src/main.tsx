import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from './pages/TodoPage'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <TodoPage/>
    </QueryClientProvider>
  </StrictMode>

  
)
