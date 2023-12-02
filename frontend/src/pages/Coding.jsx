import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import '../scss/Coding.scss';



const Coding = (props) => {

    const changeImage = (id, source) => {
        document.getElementById(id).setAttribute("src", source);
    }
return (
    <>      
        <div className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark opacity-0">
            <button className="navbar-brand mb-0 h1 opacity-0">test</button>
        </div>
        <div className="container py-5 px-5 mx-auto bg-gray900 min-vh-100 ">
            
            <div className='h3 text-center'>
                <span className='fc-gray800'>Some Coding Projects!</span>
            </div>
            <div className='fc-gray800 py-5'>
                <p>
                I like coding. Coding fascinates me because it's like solving riddles. The more science and brain power is needed, 
                the more I am excited about mastering the challenge. And the greater the joy when you get a breakthrough after hours, 
                days or weeks of struggling. I am not afraid of math or complexity. The opposite is true. I love it if scientific approaches 
                to programming problems become true and I have to push my mind to its limits. Of course, it can be very frustrating at times, 
                but the greater the joy when I finally grasp the last missing bit and the feeling of surpassing myself. The ability to craft 
                something entirely new from just lines of code keeps me inspired, especially within the context of games where this 
                creativity truly shines.
                </p>
                <p>
                In the following list is a collection of some relevant programming projects I did over the last couple of years. 
                Unfortunately, I was unable to recover my game projects from my school days as they were lost over the years. 
                My highlights during this time were a simple spaceship Shoot 'em up game, a recreation of the game Bomberman and the classical 
                game Pong programmed with DirectX.
                </p>
                <hr className='hrStyle mt-5 mb-5'/>

            </div>
            

            <div className='row py-0 fc-gray800'>
                <h4 className='pb-4'>Data Visualization Website (Bachelor Thesis)</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="bachelor" src={"https://david-burgstaller.com/api/images/BachelorThesis.jpg"} 
                        onMouseOver={() => changeImage("bachelor", require("../gifs/Bachelor.gif"))} 
                        onMouseLeave={() => changeImage("bachelor", "https://david-burgstaller.com/api/images/BachelorThesis.jpg")}
                    />
                    <div className="mt-2 mb-4">
                        <span className='badge rounded-pill bg-orange me-1'>Python</span>
                        <span className='badge rounded-pill bg-orange me-1'>React</span>
                        <span className='badge rounded-pill bg-orange me-1'>Leaflet</span>
                        <span className='badge rounded-pill bg-orange me-1'>D3js</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    This is a website I created for my bachelor thesis project. 
                    It is a responsive data visualization website with some data mining algorithms to get valuable information out of a big dataset.
                    </p>
                    <p>
                    The data is from the metasearch machine "InfoWeb Weiterbildung (IWWB)". It searches for courses located in German-speaking 
                    area. My main focus in this visualization was the responsive map where each course is marked. Also, I coded a little 
                    categorization algorithm to classify the courses in different categories by their titles.
                    </p>
                    <p>
                        Live Demo: <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href="https://dashboard.iplus.svc.educs-hosting.net/">https://dashboard.iplus.svc.educs-hosting.net/</a>
                    </p>

                    <a className="align-bottom bg-orange btn btn-primary" href="\bachelorThesis">See more</a>

                </div>
                <hr className='hrStyle my-5'/>
            </div>
            <div className='row py-0 fc-gray800'>
                <h4 className='pb-4'>Raytracing Rendering of simple 3D Objects in Console </h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="raytracing" src={'https://david-burgstaller.com/api/images/RaytracingThreeSpheres.jpg'}
                            onMouseOver={() => changeImage("raytracing", require("../gifs/Raytracing.gif"))} 
                            onMouseLeave={() => changeImage("raytracing", "https://david-burgstaller.com/api/images/RaytracingThreeSpheres.jpg")}
                        />
                    <div className="mt-2 mb-4">
                        <span className='badge rounded-pill bg-orange'>Python</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    In this project I used a raytracing algorithm to render spheres and triangles inside a 3D space. Therefore, 
                    I placed a fixed camera and a canvas inside a coordinate axis. Outgoing from the camera rays are casted to each pixel of 
                    the canvas. The intersection of the ray with any object in space is calculated and the nearest object is drawn onto this 
                    canvas pixel.
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary" href="\rayTracing">See more</a>

                </div>
            </div>
            <hr className='hrStyle my-5'/>


            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>Configurable Procedural Hextile-map Generator (current project)</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="mapGenerator" src={"https://david-burgstaller.com/api/images/MapGenerator.jpg"} 
                        onMouseOver={() => changeImage("mapGenerator", require("../gifs/MapGeneratorGif.gif"))} 
                        onMouseLeave={() => changeImage("mapGenerator", "https://david-burgstaller.com/api/images/MapGenerator.jpg")}
                    />
                     <div className="mt-2 mb-4">
                        <span className='badge rounded-pill bg-orange me-1'>C#</span>
                        <span className='badge rounded-pill bg-orange me-1'>Unity</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    This is the current project I am working on. Actually, I want to code a little strategic game and thought a configurable 
                    map-tile generator would be great to test how the map could look like.
                    </p>
                    <p>
                    I just started this project not long ago, so the rest of the game is coming soon. 
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary" href="\mapGenerator">See more</a>
                </div>
                <hr className='hrStyle my-5'/>
            </div>

            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>This Portfolio Website</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="portfolio" src={"https://david-burgstaller.com/api/images/Portfolio.jpg"} 
                        onMouseOver={() => changeImage("portfolio", require("../gifs/Portfolio.gif"))} 
                        onMouseLeave={() => changeImage("portfolio","https://david-burgstaller.com/api/images/Portfolio.jpg")}
                    />
                    <div className="mt-2 mb-4">
                        <span className='badge rounded-pill bg-orange me-1'>React</span>
                        <span className='badge rounded-pill bg-orange me-1'>C++</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                        I created this website on my own. I decided to use C++ for the backend with purpose to get used to it again. My last C++
                        project was a while ago so I thought it was a good opertunity to freshen it up again.
                    </p> 
                    <p>
                    And yes, I made it more complicated as it has to be. 
                    Actually, I didn't even have to use a backend and could save several hours. Yeah, but I didn't
                    </p>
                    <p>
                        Explore this website to see more about this project.
                    </p>
                </div>        
                <hr className='hrStyle my-5'/>
            </div>
            
            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>Neural Network for Quark-Gluon-Plasma detection</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" src={"https://david-burgstaller.com/api/images/CNN.jpg"}/>
                    <span className='badge rounded-pill bg-orange me-1 mt-2 mb-4'>C++</span>
                    <span className='badge rounded-pill bg-orange me-1 mt-2 mb-4'>Qt</span>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    As a part of an university project, we received a big dataset from a particle accelerator. 
                    The data contains information about the collision of particles. In some of these collisions, Quark-Gluon-Plasma (QGP) emerged 
                    but in some it doesn't. In a team of three students, our task was to develop a convolutional neural network which has to detect 
                    if QGP has emerged, or it has not emerged by just receiving the collision data.
                    
                         
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary" href="\cnn">See more</a>
                </div>
                <hr className='hrStyle my-5'/>
            </div>

        </div>
    </>
);
}

export default Coding;