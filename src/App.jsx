import './App.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import "./styles.css"

function App() {
  return (
    <>
      <div className='App'>
          <h1>This is My Portfolio</h1>
          <Header />
          <AboutMe />
          <Projects />

      </div>
      <p className="read-the-docs">
        Click on the links to learn more
      </p>
    </>
  )
}

export default App
