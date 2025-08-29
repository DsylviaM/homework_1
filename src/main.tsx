import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { ThemeProvaider } from './shared/lib/theme/ThemeProvaider'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './app/providers/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvaider>
          <App />
        </ThemeProvaider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
