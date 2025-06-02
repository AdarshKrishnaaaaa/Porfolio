import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navbar';
import About1 from './Components/About-1';
import About2 from './Components/About-2';
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
      <About1/>
      <About2/>
      <Projects/>
      <MyDetails/>
    </div>
  )
}

export default App
