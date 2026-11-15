import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/vazirmatn'
import '@fontsource-variable/inter'
import './index.css'
import '@/lib/gsap'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
