import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

// Rounting Pages
import Home from './pages/Home.jsx';
import Coding from './pages/Coding.jsx';
import Art from './pages/Art.jsx';
import Books from './pages/Books.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import RayTracing from './pages/RayTracing.jsx'

// Components
import { TiInfoLarge } from 'react-icons/ti';
import { BiSolidContact } from 'react-icons/bi';
import { FaCode, FaBookOpen } from 'react-icons/fa';

// import scss
import './scss/App.scss'

const App = () => {
    const [isVisible, setIsVisible] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const toggleVisibility = () => {
        if (location.pathname != "/") {
            setIsVisible(true);
            navigate("/");
        }
        else {
        isVisible == false ? setIsVisible(true): setIsVisible(false);
        }
    }

    return (
        <div className='bg-gray800'>
            <nav className="navbar navbar-expand-sm fc-gray800 bg-orange w-100 py-0">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand mb-0 h1" to="/" onClick={() => setIsVisible(false)}>David Burgstaller</Link> 
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarToggleExternalContent">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                            <button  className="btn btn-default w-100" onClick={toggleVisibility}><span className='float-start'><FaCode size={20}/> PROJECTS</span></button>
                            </li>
                            <li className="nav-item ">
                            <Link className="btn btn-default w-100" to="/books"><span className='float-start'><FaBookOpen size={20}/> BOOKS</span></Link>
                            </li>
                            <li className="nav-item ">
                            <Link className="btn btn-default w-100" to="/about"><span className='float-start'><TiInfoLarge size={21}/> ABOUT ME</span></Link>
                            </li>
                            <li className="nav-item ">
                            <Link className="btn btn-default w-100" to="/contact"><span className='float-start'><BiSolidContact size={20}/> CONTACT</span></Link>
                            </li>
                        </ul>
                    </div>
                    </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home visibility={isVisible}/>}/>
                <Route path="coding" element={<Coding/>} />
                <Route path="art" element={<Art/>} />
                <Route path="books" element={<Books />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="rayTracing" element={<RayTracing />} />
            </Routes>
            <footer className='bg-orange'>
                <div className='position-relative h-100 w-100'>
                    <div className='position-absolute top-50 start-50 translate-middle'>
                        Copyright by David Burgstaller
                    </div>
                </div>
            </footer>
      </div>
    );
}
export default App;

