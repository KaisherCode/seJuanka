import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import './app.css'

export function App() {

  return (
    <div id='main' className=' w-screen'>
      <Navbar/>
      <Home/>
    </div>
  )
}
