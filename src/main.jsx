import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.jsx'

console.log("[v0] main.jsx executing, about to render");
console.log("[v0] root element:", document.getElementById('root'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
