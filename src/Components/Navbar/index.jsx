
const Navbar = () => {
    return (
    <nav className=" flex w-full justify-between items-center p-5 border-b-2 top-0 fixed">
        <ul>
            <li className=" font-bold text-2xl ">Kaisher Code</li>
        </ul>
        <ul className="flex gap-8 font-semibold text-lg">
            <li className=" hover:text-indigo-500 "><a href="#home">Home</a></li>
            <li className=" hover:text-indigo-500 "><a href="#about">About</a></li>
            <li className=" hover:text-indigo-500 "><a href="#skills">Skills</a></li>
            <li className=" hover:text-indigo-500 "><a href="#projects">Projects</a></li>
        </ul>
        <ul>
            <li className="border-2 border-indigo-500 rounded-lg p-2 hover:bg-slate-200">
                <a href="#contact">Contact me</a>
            </li>
        </ul>
    </nav>
)
}
export {Navbar}