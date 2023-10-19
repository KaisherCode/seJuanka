import { useState, useEffect } from 'react'
import {HiHome, HiMoon,HiUserGroup,HiPaperAirplane,HiLightBulb} from 'react-icons/hi'

const TabBar = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(()=>{
    if (theme === 'dark'){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch =()=>{
    setTheme(theme==="dark"? "ligth":"dark")
  }

  return (
      <div className=' h-16 fixed flex justify-center items-center space-x-10 pl-16 pr-16 bg-gray-800 text-white p-4 bottom-0  lg:hidden z-10 '>
        <a href="#home"><HiHome className='w-6 h-6'/></a>
        <a href="#about"><HiUserGroup className='w-6 h-6'/></a>
        <a href="#service"><HiLightBulb className='w-6 h-6'/></a>
        <a href="#project"><HiPaperAirplane className='w-6 h-6'/></a>
        <button onClick={handleThemeSwitch}><HiMoon className='w-6 h-6'/></button>
      </div>
    )
}

export {TabBar}