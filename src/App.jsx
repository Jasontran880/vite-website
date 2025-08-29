import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';



const App = () => {
  // Conditional rendering making it so if a user was last on
  // a certain theme, that theme is loaded on page refresh
  const [theme, setTheme] = useState(localStorage.getItem('theme') 
  ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  )
}

export default App