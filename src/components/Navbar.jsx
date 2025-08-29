import React from 'react'
import assets from '../assets/assets'

const Navbar = ({theme, setTheme}) => {
  return (

    <div className='flex justify-between items-center px-4
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    backdrop-blur-xl font-medium bg-white/50
    dark:bg-gray-900/70'>

        {/* Logo */}
        <a href="#">
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} 
            className='w-32 sm:w-40' alt="Logo" />
        </a>
        
     
        {/* Menu items */}
        <div className='text-gray-700 dark:text-white sm:text-sm max-sm:w-60
        max-sm:pl-10 max-sm:fixe top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-5 transition-all '>

        {/* Note I may not want these links to lead to seperate pages, but to just 
        reference to sections within the same page */}
        
            <a href="#expertise" className='sm:hover:border-b'>Expertise</a>
            <a href="#our-approach" className='sm:hover:border-b'>Our Approach</a>
            <a href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
        </div>

        {/* Call to Action */}
        <div>
            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2
            bg-primary text-white px-6 py-2 rounded-full cursor-pointer 
            hover:scale-103 transition-all'>
                Get in Touch  <img src={assets.arrow_icon} width={14} alt="arrow" />
            </a>
        </div>


    </div>
  )
}

export default Navbar