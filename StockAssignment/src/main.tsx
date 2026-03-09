import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StockProvider } from './StockContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StockProvider>
    <App />
  </StockProvider>,
)
