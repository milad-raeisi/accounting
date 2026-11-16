import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/vazirmatn'
import '@fontsource-variable/inter/opsz.css'
import '@fontsource-variable/bricolage-grotesque'
import './index.css'
import '@/lib/gsap'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
