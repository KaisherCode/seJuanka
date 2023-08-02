import home from '../../assets/image-home.png'
const Home = () => {
  return (
    <section id="home" className=" min-h-screen flex justify-evenly items-center">
      <div className=" abolute ">
        <h1 className="mb-4 font-bold text-3xl">Hello everyone!</h1>
        <h2 className="mb-4">My name is <span className=" font-semibold text-lg">Kaisher Code</span>, I'm a Full Stack Developer</h2>
        <div className="flex gap-2">
        <a href="" className="p-2 border-2 border-indigo-500 rounded-lg hover:bg-slate-200 " >Check my CV</a>
        <a href="" className="p-2 border-2 border-indigo-500 rounded-lg hover:bg-slate-200 ">LinkedIn</a>
        </div>
      </div>
      <img className="w-96 h-96 rounded-full"  src={home} alt="" />
    </section>
  )
}
export { Home }