import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';


const RayTracing = (props) => {
    const [videoData, setVideoData] = useState('');

    return (
        <>  
            <div className='container text-center pt-5 '>      
                <video autoPlay className='w-100' muted='true' loop>
                    <source src="https://david-burgstaller.com/api/video/RayTracingExample0001-0822.mp4" type="video/mp4" />
                </video>
            </div> 
        </>
    );
}

export default RayTracing;