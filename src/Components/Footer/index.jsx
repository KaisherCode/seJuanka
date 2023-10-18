import {  FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = (props) => {
  const {
    name,
    email,
    whatsapp,
  } = props

  return (
    <footer id='contact' className=" w-screen bg-gray-500 p-10 lg:flex lg:justify-evenly justify-center lg:items-center text-white text-center ">
      <h2 className=' font-bold text-2xl mb-4 '>{name}</h2>
      <p className=' font-light text-lg mb-4'> © Todos los derechos reservados {name}</p>
      <div className="flex gap-3 items-center justify-center mb-10">
        {(
          <a href={`mailto:${email}`}>
            <HiOutlineMail className='w-8 h-8' />
          </a>
        )}
        {(
          <a href={`https://api.whatsapp.com/send?phone${whatsapp}`} target='_blank'>
            <FaWhatsapp className='w-8 h-8' />
          </a>
        )}
      </div>
    </footer>
  )
}
export { Footer }