import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/NavBar.scss';
import { BsFillSuitHeartFill, BsCodeSlash } from 'react-icons/bs';
import { TiInfoLarge } from 'react-icons/ti';
import { BiSolidContact } from 'react-icons/bi';
import { FaCode, FaBookOpen } from 'react-icons/fa';

function NavBar() {
    const [isProjBtnVisible, setIsProjBtnVisible] = useState(false)

    const handleFadeIn = () => {
        setIsProjBtnVisible(true);
        window.isProjBtnVisible = true;
      };

    return (
        <nav className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark text-white opacity-75">
            <div className='container w-65'>
                <Link className="navbar-brand mb-0 h1" to="/">David Burgstaller</Link> 
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <button className="nav-link btn btn-default active" onClick={handleFadeIn}><FaCode size={20}/> PROJECTS</button>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link btn btn-default active" to="/books"><FaBookOpen size={20}/> BOOKS</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link btn btn-default active" to="/about"><TiInfoLarge size={21}/>ABOUT ME</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link btn btn-default active" to="/contact"><BiSolidContact size={20}/> CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;