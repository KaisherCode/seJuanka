import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = (props) => {
  const {
    name,
    email,
    github,
    linkedIn,
  } = props
  return (
    <footer id='contact' className=" w-screen flex justify-evenly p-16 bg-slate-500 text-white">
      <h2 className=' font-bold text-2xl '>{name}</h2>
      <p className=' font-light text-lg'> All rights reserved Kaisher Code</p>
      <div className="flex gap-3">
        {(
          <a href={`mailto:${email}`}>
            <HiOutlineMail className='w-8 h-8' />
          </a>
        )}
        {(
          <a href={`https://github.com/${github}`} target='_blank'>
          <FaGithub className='w-8 h-8' />
        </a>
        )}
        {(
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank'>
            <FaLinkedin className='w-8 h-8' />
          </a>
        )}
      </div>
    </footer>
  )
}
export { Footer }