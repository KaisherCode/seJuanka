import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Project } from './Components/Project'
import { Footer } from './Components/Footer'
import './app.css'

const siteProps = {
name:"Servicios Generales JF",
title:"Realizamos reparación de contenedores con estructuras modulares.",
email:"wilson.hch@hynkor.com",
github:"KaisherCode",
linkedIn: "freddy-wilson-h-1788289b",
twitter: "https://twitter.com/KaisherCode?t=tBu3OU2HtPPAu8qDRnCKXA&s=09",
tiktok: "KaisherCode",
}

export function App() {

  return (
    <div id='main' className=' w-screen w-full '>
      <Navbar />
      <Home name={siteProps.name} title={siteProps.title} linkedIn={siteProps.linkedIn} />
      <About />
      <Skills />
      <Project />
      <Footer
        name={siteProps.name}
        email={siteProps.email}
        github={siteProps.github}
        linkedIn={siteProps.linkedIn}
        />
    </div>
  )
}
