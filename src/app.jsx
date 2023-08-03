import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Project } from './Components/Project'
import './app.css'

export function App() {

  return (
    <div id='main' className=' w-screen'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  )
}
