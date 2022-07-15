import MainInfoCard from '../components/MainInfoCard';
import ProjectTab from '../components/ProjectTab';
import './App.css';

function App() {
  const projects = [
    {
      name: "Garima",
      link: "#"
    },
    {
      name: "Poggers",
      link: "https://iiitd-chat.herokuapp.com"
    },
    {
      name: "Anshul",
      link: "#"
    },
    {
      name: "Bruh",
      link: "http://test-hcd.herokuapp.com"
    }
  ]

  return (
    <div className="App">
      <span className='leftContainer'>
        <h3>
          Hello I'm
        </h3>
        <h1>
          High Cast Brahmin
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
