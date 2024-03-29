import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaGithub} from "react-icons/fa";

// Rounting Pages
import Home from './pages/Home.jsx';
import Coding from './pages/Coding.jsx';
import Art from './pages/Art.jsx';
import Books from './pages/Books.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import RayTracing from './pages/RayTracing.jsx';
import CNN from './pages/CNN.jsx';
import MapGenerator from './pages/MapGenerator.jsx';
import BachelorThesis from './pages/BachelorThesis.jsx';

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
                        <Link className="navbar-brand mb-0 h1" to="/">David Burgstaller</Link> 
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarToggleExternalContent">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-default w-100" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" ><span className='float-start'><FaCode size={20}/> PROJECTS</span></a>
                                <ul className="dropdown-menu bg-orange" aria-labelledby="navbarDropdown">
                                    <li className='nav-item'>
                                        <a className="dropdown-item btn btn-default" href="/coding">Coding</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dropdown-item btn btn-default" href="/art">Art</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="btn btn-default w-100" href="/books"><span className='float-start'><FaBookOpen size={20}/> BOOKS</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="btn btn-default w-100" href="/about"><span className='float-start'><TiInfoLarge size={21}/> ABOUT ME</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="btn btn-default w-100" href="/contact"><span className='float-start'><BiSolidContact size={20}/> CONTACT</span></a>
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
                <Route path="cnn" element={<CNN />} />
                <Route path="bachelorThesis" element={<BachelorThesis />} />
                <Route path="mapGenerator" element={<MapGenerator />} />
            </Routes>
            <footer className='bg-footer'>
                <div className='h-100 w-100'>
                    <div className='row'>
                        <div className='col-12 opacity-0'>
                            text
                        </div>
                    </div>
                        <div className='row fs-7 fc-footer'>
                            <div className='col-4 ms-5'>
                                <a className='fc-footer' href="https://github.com/Roqum">
                                    <FaGithub className='mx-1' size={25}/>
                                </a>
                                <a className='fc-footer' href="https://linkedin.com/in/david-burgstaller">
                                    <FaLinkedin className='mx-1' size={25}/>
                                </a> 

                            </div>
                            <div className='col-4 text-center'>
                                <FaRegCopyright className='fc-footer pb-1' size={15}/>2023 David Burgstaller. All Rights Reserved.

                            </div>
                            <div className='col-4'>

                            </div>

                        </div>
                </div>
            </footer>
      </div>
    );
}
export default App;

