import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Demo2 from './Demo2.tsx'
import Basics1 from './Basics1.tsx'
import Demo6Feb from './Demo6Feb.tsx'
import { BrowserRouter } from 'react-router-dom'
import Launcher from './Launcher.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Launcher />
    </BrowserRouter>
  </StrictMode>,
)
