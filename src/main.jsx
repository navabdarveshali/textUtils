import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import './index.css'
import TextForm from './textForm.jsx'
import About from './About.jsx'


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar></NavBar>
    <TextForm></TextForm>
    {/* <Router>
   <NavBar/>
    <Routes>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm />}>
          </Route>
        </Routes>
    </Router> */}
    </StrictMode>
)