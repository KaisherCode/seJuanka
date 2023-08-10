
const skillList = [{
  name: "Html",
  image: "http://drive.google.com/uc?export=view&id=1LAIPYIup-Yg7ie4Q2NQMCguvt5goN01-",
},
{
  name: "Css",
  image: "http://drive.google.com/uc?export=view&id=1v0ukuA1yf9nYt6H6ImI7iz5Hz9Q7Ojf6",
},
{
  name: "Javascript",
  image: "http://drive.google.com/uc?export=view&id=1pFXNpp8w6p_cxbymxfshHO-VVVYsF2rp",
},
{
  name: "React js",
  image: "http://drive.google.com/uc?export=view&id=1XuffJnevUp0g7_qM4ck3wNIQPA8Nc0Lj"
},
{
  name: "Node js",
  image: "http://drive.google.com/uc?export=view&id=1s2G568hsGRHkZoID5wqnPT-DXx010Gfc",
},
{
  name: "GitHub",
  image: "http://drive.google.com/uc?export=view&id=1-9ETB8nW2CQEE8Bo61JXT_WCG1nnakR5",
},
{
  name: "MySql",
  image: "http://drive.google.com/uc?export=view&id=1JgU1pausdUwof8kZLe-YMQCjqLFCt7S7",
},
{
  name: "Git",
  image: "http://drive.google.com/uc?export=view&id=1oR59RsjbHKFS3UL-oS8p_t6qqueAIECx",
},
]

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col justify-evenly items-center dark:text-white'>
      <h2 className="  text-center font-bold text-2xl pt-16 mb-4 ">My Skills</h2>
      <p className=" text-center font-light text-2xl mb-4 ">Working code using languages: HTML, CSS, JavaScript, React.js, Node.js, GitHub, MySql and Git</p>
      <div className='grid gap-4 lg:grid-cols-4 grid-cols-2 w-auto max-w-screen-lg mb-10 m-6'>
      {skillList.map((skill) => (
        <div className=" cursor-pointer w-full h-50 rounded-lg shadow-2xl border hover:border-indigo-500">
            <figure className="relative  p-8">
              <img className="w-full h-full object-cover rounded-lg lg:mb-2" src={skill.image} alt={skill.name} />
              <span className="flex justify-center items-center gap-2 absolute bottom-0 left-0 bg-indigo-200 rounded-lg text-black text-sx m-2 px-3 py-0.5">{skill.name}</span>
            </figure>
        </div>
        ))}
      </div>
    </section>
  )
}
export { Skills }