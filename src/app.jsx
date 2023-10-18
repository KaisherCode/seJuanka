import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Service } from './Components/Service'
import { Project } from './Components/Project'
import { Footer } from './Components/Footer'
import './app.css'

const siteProps = {
name:"Servicios Generales JF",
title:"Realizamos reparación de contenedores con estructuras modulares.",
email:"fasabifenazoajuancarlos@gmail.com",
whatsapp:"923837388",
}

export function App() {

  return (
    <div id='main' className=' w-screen w-full '>
      <Navbar />
      <Home name={siteProps.name} title={siteProps.title} linkedIn={siteProps.linkedIn} />
      <About />
      <Service />
      <Project />
      <Footer
        name={siteProps.name}
        email={siteProps.email}
        whatsapp={siteProps.whatsapp}
        />
    </div>
  )
}
