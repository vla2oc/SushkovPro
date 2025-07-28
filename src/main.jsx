import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppFooter from './components/AppFooter.jsx'
import AppHeader from './components/AppHeader.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/SushkovPro'>
      <AppHeader />
      <App />
      <AppFooter />
    </BrowserRouter>
  </StrictMode>,
)
