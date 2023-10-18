const projectlist = [
  {
    title: "Oficina container",
    description: "Servicio de fabricación de oficinas a base de contenedores de metal. ",
    url: "#",
    image: "https://images.unsplash.com/photo-1529939828339-56039bb75a63?auto=format&fit=crop&q=80&w=1483&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Habitación de container",
    description:
      "Servicio de fabricación de casas habitacionlaes a base container. ",
    url: "#",
    image: "https://images.unsplash.com/photo-1523351964962-1ee5847816c3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Casa container en playa",
    description: "Fabricación de casas habitacionales en playa.",
    url: "#",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Casa container de campo",
    description:
      "Fabricación de casa a base de modulos container.",
    url: "#",
    image: "https://images.unsplash.com/photo-1628394029761-acc83a2a08a6?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Puertas y ventanas",
    description: "Servicio de fabricación de puertas y ventanas.",
    url: "#",
    image: "https://images.unsplash.com/photo-1628394029749-ea3dcce4caa6?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Escalera en container",
    description: "Fabricación de escaleras acopladas a casa container.",
    url: "#",
    image: "https://images.unsplash.com/photo-1508770044900-7c405a2a7f4b?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Soldadura general",
    description: "Servicio de soldadura en general, puertas, ventanas, rejas, tijerales y escaleras.",
    url: "#",
    image: "https://images.unsplash.com/photo-1648671921845-895549805092?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Escalera de fierro",
    description: "Fabricación de escaleras con tubos rectangulares de fierro.",
    url: "#",
    image: "https://images.unsplash.com/photo-1665399319596-9508b286fb4e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
const Project = () => {
  return (
    <section id="project" className="w-full h-auto flex flex-col justify-evenly items-center dark:text-white mb-16 ">
      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Proyectos más importantes</h2>
      <p className="p-8">Estructuras metálicas y fabricamos puertas, ventanas, portones enrollables, rejas, tijerales, escaleras y soldadura en general.</p>
      <div className="grid lg:grid-cols-4 gap-4 p-6 max-w-screen-lg  ">
        {projectlist.map((project) => (
          <div className=" rounded-lg border shadow-xl hover:border-indigo-500" key={project.title}>
            <div className=" text-center p-4 flex flex-col">
              <img className=" rounded-t-lg mb-4 " src={project.image} alt={project.title} />
              <a href="#project"><h3 className=" font-semibold text-xl ">{project.title}</h3></a>
              <span className=" font-light text-xl">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { Project }