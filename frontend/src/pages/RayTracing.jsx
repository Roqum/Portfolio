import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';


const RayTracing = (props) => {
    const [videoData, setVideoData] = useState('');

    return (
        <>  <div className='container text-center pt-5 '>      
                <video autoPlay className='w-75'  muted='true'>
                    <source src="https://david-burgstaller.com/api/video/RaytracingSphereTriangle.mp4" type="video/mp4" />
                </video>
            </div> 
            <div className="container py-5 px-6 mx-auto bg-gray900 min-vh-100 ">
                <div className='text-white h3 text-center'>This page is in progress!</div>
                <div className='text-white'>
                
                </div>
            </div>
        </>
    );
}

export default RayTracing;