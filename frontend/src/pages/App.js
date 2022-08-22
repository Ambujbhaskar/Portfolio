import MainInfoCard from '../components/MainInfoCard';
import ProjectTab from '../components/ProjectTab';
import projects from '../projects.json';
import './App.css';

function App() {

  return (
    <div className="App">
      <span className='leftContainer'>
        <h3>
          Hello, I'm
        </h3>
        <h1>
          Ambuj Bhaskar
        </h1>
        <div className='CardsContainer'>
          <MainInfoCard />
          <span className='RightContainer'>
            {
              projects.map((project) => <ProjectTab name={project.name} link={project.link} />)
            }
          </span>
        </div>
      </span>
    </div>
  );
}

export default App;
