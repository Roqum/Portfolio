import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';


const RayTracing = (props) => {
    const [videoData, setVideoData] = useState('');

    return (
        <>  <div className='container text-center pt-5 '>      
                <video autoPlay className='w-75'  muted='true'>
                    <source src="http://david-burgstaller.com/api/video/RaytracingSphereTriangle.mp4" type="video/mp4" />
                </video>
            </div> 
            <div className="container py-5 px-6 mx-auto w-65 bg-gray900 min-vh-100 ">
                <div className='text-white h3 text-center'>RayTracing!</div>
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

export default RayTracing;