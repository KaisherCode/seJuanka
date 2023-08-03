import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = ()=>{
    return(
        <footer id='contact' className=" w-screen flex justify-evenly p-16 bg-slate-500 text-white">
            <h2 className=' font-bold text-2xl '>Kaisher Code</h2>
            <p className=' font-light text-lg'> All rights reserved Kaisher Code</p>
            <div className="flex gap-3">
                <a href="#"><HiOutlineMail className='w-8 h-8'/></a>
                <a href="#"><FaFacebook className='w-8 h-8'/></a>
                <a href="#"><FaInstagram className='w-8 h-8'/></a>
                <a href="#"><FaLinkedin className='w-8 h-8'/></a>
                <a href="#"><FaTiktok className='w-8 h-8'/></a>
            </div>
        </footer>
    )
}
export {Footer}