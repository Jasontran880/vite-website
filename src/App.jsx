import React, { useState } from 'react'
import Navbar from './components/Navbar'

const [theme, setTheme] = useState('light');

const App = () => {
  return (
    <div className='dark:bg-black relaative'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App