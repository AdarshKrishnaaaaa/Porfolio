import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navbar';
import About from './Components/About';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import MyDetails from './Components/Details';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavigationBar />
      <Intro />
      <About/>
      <Projects/>
      <MyDetails/>
    </div>
  )
}

export default App
