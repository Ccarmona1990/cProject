import FooterContent from "./utils/FooterContent";
import NavBar from "./utils/NavBar";
import Project from "./utils/Project";
import { projectData } from "./utils/projectData";

function App() {
  return (
  <>
  <header>
    <NavBar/>
  </header>
  <main>
    <aside className='container'>
    <h1 className='projectTitle'>Projects</h1>
    </aside>
    <article id='projects'>
      {projectData.map(({id,projectImg,URL,projectName})=>{
        return (
          <Project key={id} techName={projectName} URL={URL} img={projectImg} />
        )
      })}
    </article>
  </main>
  <footer>
    <FooterContent/>
  </footer>
  </>)
}

export default App;
