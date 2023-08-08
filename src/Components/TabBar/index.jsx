import {HiHome, HiMoon,HiUserGroup,HiPaperAirplane,HiLightBulb} from 'react-icons/hi'
const TabBar = () => {
  return (
      <div className='flex justify-center items-center space-x-10 pl-16 pr-16 bg-gray-800 text-white h-16 fixed p-4 bottom-0  lg:hidden '>
        <a href=""><HiHome/></a>
        <a href=""><HiUserGroup/></a>
        <a href=""><HiLightBulb/></a>
        <a href=""><HiPaperAirplane/></a>
        <a href=""><HiMoon/></a>
      </div>
    )
}

export {TabBar}