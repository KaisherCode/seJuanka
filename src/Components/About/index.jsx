
const About = () => {
  return (
    <section id="about" className=" pl-52 pr-52 flex justify-evenly items-center relative w-screen">
      <div className=" border-2 rounded-lg p-16 ">
        <div className="p-16">
        <h2 className=" text-center font-bold text-3xl pt-0 mb-6 ">About Myself</h2>
        <p className=" text-3xl font-light text-center mb-4">I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways. </p>
        </div>
        <hr />
        <ul className="grid grid-cols-2 mb-4 text-center p-16">
          <li>
            <a href="">Web design</a>
          </li>
          <li>
          User experience
          </li>
          <li>
          Inclusive design
          </li>
          <li>
          Focus group testing
          </li>
          <li>
          Mobile user interfaces
          </li>
          <li>
          Graphic design
          </li>
        </ul>
        <hr/>
        <p className=" text-center font-light text-2xl p-16">
          I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.
        </p>

      </div>
    </section>
  )
}
export { About }