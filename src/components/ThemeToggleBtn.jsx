import React from 'react'
import assets from '../assets/assets'
import { useEffect } from 'react'

const ThemeToggleBtn = ({theme, setTheme}) => {

    // Automatically detect light or dark mode from user media
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
    }, []); //initialized only once

    // Track user theme history 
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
  <>

  {/* Conditionally render sun or moon icon based on theme and toggle theme on click */}
    <button>
      {theme === 'dark' ? (
        <img 
          onClick={() => setTheme('light')} 
          src={assets.sun_icon} 
          className="size-8.5 p-1.5 border border-gray-500 rounded-full" 
          alt="" 
        />
      ) : (
        <img 
          onClick={() => setTheme('dark')} 
          src={assets.moon_icon} 
          className="size-8.5 p-1.5 border border-gray-500 rounded-full" 
          alt="" 
        />
      )}
    </button>
  </>
)

}

export default ThemeToggleBtn