import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { ThemeProvaider } from './shared/lib/theme/ThemeProvaider'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvaider>
        <App />
      </ThemeProvaider>
    </BrowserRouter>
  </StrictMode>,
)
