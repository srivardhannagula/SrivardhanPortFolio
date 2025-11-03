
import './App.css';
import  Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from'./pages/Home.js';
import WorkExperience from  './pages/WorkExperience.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import {  Routes ,Route} from 'react-router-dom';
function App() {
  return (
     <div className="text-4xl text-center text-blue-500 font-bold mt-10">
       
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/workExperience" element={<WorkExperience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
