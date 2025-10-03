import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './App.tsx'
import Test from './components/test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Profile /> */}
    <Test></Test>
  </StrictMode>,
)
