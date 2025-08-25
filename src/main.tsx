import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { ThemeProvaider } from './shared/lib/theme/ThemeProvaider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
    
  </StrictMode>,
)
