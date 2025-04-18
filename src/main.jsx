import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppFooter from './components/AppFooter.jsx'
import AppHeader from './components/AppHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHeader />
    <App />
    <AppFooter />
  </StrictMode>,
)
