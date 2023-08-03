
const Project = () => {
  return (
    <section id="project" className="pl-16 pr-16 dark:text-white">
      <h2 className="text-center font-bold text-2xl pt-16 mb-4">Projects</h2>
      <div>     
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className=" rounded-lg border-2 p-8 ">
            <a href=""><h3>My Resumen site</h3></a>
            <p>Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.</p>
          </div>
          <div className="rounded-lg border-2 p-8 ">
            <a href=""><h3>My Resumen site</h3></a>
            <p>Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.</p>
          </div>
          <div className="rounded-lg border-2 p-8 ">
            <a href=""><h3>My Resumen site</h3></a>
            <p>Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.</p>
          </div>
          <div className="rounded-lg border-2 p-8 ">
            <a href=""><h3>My Resumen site</h3></a>
            <p>Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export { Project }