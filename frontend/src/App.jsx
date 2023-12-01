import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";


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
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item btn btn-default" href="/coding">Coding</a></li>
                                    <li><a class="dropdown-item btn btn-default" href="/art">Art</a></li>
                                </ul>
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
                <Route path="cnn" element={<CNN />} />
                <Route path="bachelorThesis" element={<BachelorThesis />} />
                <Route path="mapGenerator" element={<MapGenerator />} />
            </Routes>
            <footer className='bg-footer'>
                <div className='position-relative h-100 w-100'>
                    <div className='position-absolute top-50 start-50 translate-middle fs-7 fc-footer'>
                    <FaRegCopyright className='fc-footer pb-1' size={15}/>2023 David Burgstaller. All Rights Reserved.
                    </div>
                </div>
            </footer>
      </div>
    );
}
export default App;

