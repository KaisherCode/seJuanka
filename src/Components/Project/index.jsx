const projectlist = [
  {
    title: "Shop Admin Web Apps 🎉",
    description: "Shop Admin web application ",
    url: "https://github.com/KaisherCode/react-shop-admin",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Web Development Async landing page",
    description:
      "Async landing page ",
    url: "https://async-landing-page.netlify.app/",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Batata bitcoin Application",
    description: "Batatabitcoin store is an online store built using Html y Css.",
    url: "https://kaishercode.github.io/cursoMobileFirst/",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Landing Page de Platzi Travel",
    description:
      "Maquetación de Platzi Travel utilizando TailwindCss",
    url: "https://kaishercode.github.io/tailwind-3/public/",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Shoppi Store App",
    description: "Shoppi store is an online store built using React.js, Vite.js and Tailwindcss.",
    url: "https://shoppistore.netlify.app/",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Hynkor Sotore",
    description: "Hynkor Store is a web application built with WordPress CMS and Woocommerce.",
    url: "https://ecommerce.hynkor.com",
    image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
]
const Project = () => {
  return (
    <section id="project" className="flex flex-col justify-evenly items-center dark:text-white mb-16 ">
      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Projects Portfolio</h2>
      <div className="grid grid-cols-3 gap-10 p-6 max-w-screen-lg  ">
        {projectlist.map((project) => (
          <div className=" rounded-lg border shadow-xl hover:border-indigo-500" key={project.title}>
            <div className=" text-center p-4 flex flex-col">
              <img className=" rounded-t-lg mb-4 " src={project.image} alt={project.title} />
              <a href={project.url} target="_blank"><h3 className=" font-semibold text-xl ">{project.title}</h3></a>
              <span className=" font-light text-xl">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { Project }