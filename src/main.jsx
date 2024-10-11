import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import AppProviders from './context/AppProviders'

createRoot(document.getElementById('root')).render(
  <AppProviders>
    <App />
  </AppProviders>,
)
