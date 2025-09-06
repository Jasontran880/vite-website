import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy'
import Expertise from './components/Expertise';
import Approach from './components/Approach';
import About from './components/About';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast'; // to display notifications



const App = () => {
  // Conditional rendering making it so if a user was last on
  // a certain theme, that theme is loaded on page refresh
  const [theme, setTheme] = useState(localStorage.getItem('theme') 
  ? localStorage.getItem('theme') : 'light');

  return (
   
      <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Expertise />
      <Approach />
      <About />
      <Footer />
  
    </div>
   

    
  )
}

export default App