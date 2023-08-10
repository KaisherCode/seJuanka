
const description = "I am a professional in Computer Science and Informatics. I like to build attractive applications and websites both backend and frontend, using Javascript, TailwindCss, React.js/Next.js and Node. I am also familiar with graphic design for creating logos and icons using Adobe Illustrator."
const detailOrQuote = "Learning new things always excites me, and I am constantly looking for new challenges to expand my knowledge and skills."
const About = () => {
  return (
    <section id="about" className=" dark:text-white lg:pl-52 lg:pr-52 flex justify-evenly m-6 ">
      <div className=" border border-indigo-500 rounded-lg lg:p-16 p-8 text-center ">
        <h2 className=" font-bold text-2xl mb-6 text-center ">About Myself</h2>
        <p className=" text-2xl font-light">{description}</p>
        <p className="  font-light text-2xl">
          {detailOrQuote}
        </p>
      </div>
    </section>
  )
} 
export { About }