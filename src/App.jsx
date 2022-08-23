import { useState } from 'react';
import Home from "./modules/Home";
import Projects from "./modules/Projects";
import About from "./modules/About";
import Skills from "./modules/Skills";
import Footer from "./modules/Footer";
import Navbar from "./modules/Navbar";
import './style/style.scss';

function App() {

  const [navstate, setNavState] = useState("Home");

    function updateNavState(newNavstate){
        setNavState(newNavstate);
    }

  return (
    <div className="wrapper">
            <Navbar updateNavState={updateNavState} navstate={navstate}/>
            <main>
                {navstate == "Home" && <Home updateNavState={updateNavState}/>}
                {navstate == "Projects" && <Projects />}
                {navstate == "About" && <About />}
                {navstate == "Skills" && <Skills />}
            </main>
            <Footer />
        </div>
  )
}

export default App;