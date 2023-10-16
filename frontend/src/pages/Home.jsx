import React from 'react';
import NavBar from '../components/NavBar.jsx';

import '../scss/Home.scss';

function Home() {
return (
    <>
        <img className="w-100 top-0 start-0 bg-image" src={require("../images/mainPage.png")} alt="Self drawn" />
        <div className="container py-4 px-6 mx-auto w-65">
            <div className='h4 text-center text-white'>About me!</div>
            <div className='text-white'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
             et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
             labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
             ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
        </div>
    </>
);
}

export default Home;
