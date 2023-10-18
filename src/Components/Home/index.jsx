import white_papper from '../../assets/white_papper.pdf'
import { FaLinkedin, FaArrowCircleDown } from 'react-icons/fa'
import home from '../../assets/img/oficina-quicornac-3.jpg'
const Home = ({ name, title }) => {
  return (
    <section id="home" className="w-full lg:min-h-screen lg:flex justify-start lg:space-y-80 dark:text-white">
      <img
        src={home}
        alt=""
        className=" opacity-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
            <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className=" abolute m-6">
        <h1 className="lg:mb-4 font-bold text-3xl">Realizamos servicio de soldadura en general</h1>
        <h2 className="mb-4 text-lg" >Somos la empresa <span className=" font-bold text-lg">{name}</span>, {title}</h2>
        <div className="flex gap-2 ">
          <a href={white_papper} download className="bg-white p-2 border border-indigo-400 rounded-lg dark:border-yellow-50 flex gap-2 justify-evenly items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% dark:text-black " ><FaArrowCircleDown />Descargar brochure</a>
        </div>
      </div>
    </section>
  )
}
export { Home }