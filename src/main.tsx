// Import For React 
import { StrictMode } from 'react'
// Import For React DOM
import { createRoot } from 'react-dom/client'
// Import For Context
import { AuthContextProvider } from './context/AuthContext.tsx'
// Import For React Router
import { BrowserRouter } from 'react-router-dom'
// Import For ErrorBoundary
import ErrorBoundary from './ErrorBoundary.tsx'
// Import For App
import App from './App.tsx'
// Import For Style
import './assets/styles/index.css'

// Render For App 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </ErrorBoundary>
  </StrictMode>,
)
