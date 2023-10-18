import { useState, useEffect } from 'react'
import { TabBar } from '../TabBar'
import {HiMoon} from 'react-icons/hi'
import '../../index.css'

const Navbar = () => {
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
    <>
    <nav className=" hidden w-full h-16 bg-white lg:flex p-5 justify-between fixed z-10 items-center dark:bg-slate-800  text-slate-800 dark:text-slate-200  border-b-2 top-0">
      <ul>
        <li className=" text-xl text-red-700 font-black dark:text-white "><a href="#home">Servicios Generales JF</a></li>
      </ul>
      <ul className="flex gap-8 font-bold text-md">
        <li className=" text-red-700 hover:text-indigo-700 dark:text-white "><a href="#home">Inicio</a></li>
        <li className=" text-red-700 hover:text-indigo-700 dark:text-white "><a href="#about">Nosotros</a></li>
        <li className=" text-red-700 hover:text-indigo-700 dark:text-white "><a href="#skills">Servicios</a></li>
        <li className=" text-red-700 hover:text-indigo-700 dark:text-white "><a href="#project">Proyectos</a></li>
      </ul>
      <ul className='flex justify-center items-center gap-4'>
        <button onClick={handleThemeSwitch}><HiMoon className='w-6 h-6'/></button>
        <li className="border-2 border-indigo-500 rounded-lg p-2 hover:bg-slate-200 hover:text-slate-600">
          <a href="#contact">Contáctenos</a>
        </li>
      </ul>
    </nav>
    <TabBar/>
    </>
  )
}
export { Navbar }