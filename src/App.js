import NavBar from "./Components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import { Contact } from "./Components/Contact";



const App = () => {
  return (
    <div className="App"> 
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App