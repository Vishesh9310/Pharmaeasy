import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <Home/>
      <About/> */}
      <Services/>
      {/* <App /> */}
    </>
  </StrictMode>,
)
