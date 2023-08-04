import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Project } from './Components/Project'
import { Footer } from './Components/Footer'
import './app.css'

const siteProps = {
name:"Kaisher Code",
title:"I'm Full Stack Developer",
email:"web@hynkor.com",
github:"@KaisherCode",
instagram: "@Kaishercode",
linkedIn: "https://www.linkedin.com/in/freddy-wilson-h-1788289b",
twitter: "@KaisherCode",
tiktok: "KaisherCode",
}

export function App() {

  return (
    <div id='main' className=' w-screen '>
      <Navbar />
      <Home name={siteProps.name} title={siteProps.title} linkedIn={siteProps.linkedIn} />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}
