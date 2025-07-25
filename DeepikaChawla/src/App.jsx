import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Components/Homepage'

import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
 

  return (
    <>
<div className="flex flex-col min-h-screen">
<Navbar/>
<main className="flex-grow">
<HomePage/>
<About/>
<Contact/>
</main>
<Footer />
</div>
  </>
  )
}

export default App
