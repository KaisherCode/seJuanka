

const servicelist = [
  {
    title: "Reparación de contenedores",
    image: "https://cdn-icons-png.flaticon.com/128/1017/1017182.png",
  },
  {
    title: "Fabricación de puertas",
    image: "https://cdn-icons-png.flaticon.com/128/1666/1666297.png",
  },
  {
    title: "Fabricación de ventanas",
    image: "https://cdn-icons-png.flaticon.com/128/2401/2401126.png",
  },
  {
    title: "Fabricación de rejas",
    image: "https://cdn-icons-png.flaticon.com/128/10830/10830861.png",
  },
  {
    title: "Fabricación de enrollables",
    image: "https://cdn-icons-png.flaticon.com/128/1235/1235886.png",
  },
  {
    title: "Fabricación de escaleras",
    image: "https://cdn-icons-png.flaticon.com/128/7828/7828248.png",
  },
  {
    title: "Fabricación de tijerales",
    image: "https://cdn-icons-png.flaticon.com/128/9308/9308869.png",
  },
  {
    title: "Soldadura en general",
    image: "https://cdn-icons-png.flaticon.com/128/3461/3461941.png",
  },
]

const Service = () => {
  return (
    <section id="service" className="w-full h-auto flex flex-col justify-evenly items-center dark:text-white mb-16 ">

      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Servicios que ofrecemos</h2>

      <div className="grid lg:grid-cols-4 gap-4 p-6 max-w-screen-lg  ">
        {servicelist.map((service) => (
          <div className=" rounded-lg border shadow-xl hover:border-indigo-500" key={service.title}>
            <div className=" text-center p-4 flex flex-col">
              <img className=" rounded-t-lg mb-4 " src={service.image} alt={service.title} />
              <a href=""><h3 className=" font-semibold text-xl ">{service.title}</h3></a>
              <span className=" font-light text-xl">{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export { Service }