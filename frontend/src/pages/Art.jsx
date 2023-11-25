import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import '../scss/Projects.scss';


const Art = (props) => {

    useEffect(() => {
},[]);
    return (
        <>         
            <div className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark text-white opacity-0">
                <button className="navbar-brand mb-0 h1 opacity-0">test</button>
            </div>
            <div className="container py-5 px-6 mx-auto bg-gray900 min-vh-100 ">
                <div className='text-white h3 text-center'>Art!</div>
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

export default Art;