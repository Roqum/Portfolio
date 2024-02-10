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
                I started coding when I was thirteen. At the age of fourteen, I programmed my first game during my IT classes in middle school while the other students had to learn how to code in the meantime. 
                Soon after that as a team of 4 students, we developed my second game, a Bombermann replica. Coding is a part of me and surly a skill I posses. I am eager to advance my skills and become a remarkable 
                programmer so that one day I will be able to lead other people to become great programmers aswell.
                </p>
                <p>
                In the following list you find some project I worked on over the last years.
                </p>
                <hr className='hrStyle mt-5 mb-5'/>

            </div>

            <div className='row py-0 fc-gray800'>
                <h4 className='pb-4'>Charming Hell (3 Day Gamejam)</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="charmingHell" src={"https://david-burgstaller.com/api/images/CharmingHell.jpg"}
                    />
                    <div className="mt-2 mb-4">
                    <span className='badge rounded-pill bg-date-badge me-1'>2023</span>
                    <span className='badge rounded-pill bg-orange me-1'>Godot Engine</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    This game is my submission to the Melon Game Jam 2023 with the chosen theme "CHARM". I created this prototype in 3 
                    days even though I hadn't used the Godot Engine before. To my surprise, it worked out quite well and Godot was easy 
                    to get used to. It is a great engine with a big potential for the future.
                    </p>
                    <p>
                    <a className='bg-orange btn btn-primary mx-1 px-1 py-1' href="https://roqum.itch.io/charming-hell">
                        Play Game
                    </a>
                    <a className='bg-orange btn btn-primary mx-1 px-1 py-1' href="https://github.com/Roqum/CharmingHell_3DayGameJam">
                        Source Code
                    </a>
                    </p>

                </div>
                <hr className='hrStyle my-5'/>
            </div>

            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>Configurable Procedural Hextile-map Generator</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="mapGenerator" src={"https://david-burgstaller.com/api/images/MapGenerator.jpg"} 
                        onMouseOver={() => changeImage("mapGenerator", require("../gifs/MapGeneratorGif.gif"))} 
                        onMouseLeave={() => changeImage("mapGenerator", "https://david-burgstaller.com/api/images/MapGenerator.jpg")}
                    />
                     <div className="mt-2 mb-4">
                     <span className='badge rounded-pill bg-date-badge me-1'>2022</span>
                        <span className='badge rounded-pill bg-orange me-1'>C#</span>
                        <span className='badge rounded-pill bg-orange me-1'>Unity</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    With this little project my goal was to get to know the Unity engine and to learn more about procedural generation inside of games.
                    </p>
                    <p>
                    I wrote a script which is drawing the vertices and polygons of a single hexagon-tile. A map generator draws multiple of these hex-tile and assigns each of them
                    a type randomly using perlin noise. The types should refer to "deep water", "water", "mountain", "grass" and "forest". Together they form a world for a strategy game.
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="\mapGenerator">Demo Videos</a>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://github.com/Roqum/Precedural_HextileMap_Generator">Source Code</a>
                </div>
                <hr className='hrStyle my-5'/>
            </div>

            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>Neural Network for Quark-Gluon-Plasma detection</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" src={"https://david-burgstaller.com/api/images/CNN.jpg"}/>
                    <span className='badge rounded-pill bg-date-badge me-1'>2019</span>
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
                    <p>
                    <b>Unfortunately, back then we had no experience with git so the repository is pretty dirty.</b>
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://www.mdpi.com/1999-4893/16/7/344/pdf">Article</a>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://github.com/Roqum/Milestone3/tree/master/CNN_Leon">Source Code</a>
                </div>
                <hr className='hrStyle my-5'/>
            </div>

            <div className='row py-0 fc-gray800'>
                <h4 className='pb-4'>Top Down RPG Controll Demo</h4>
                <div className='col-sm-4 col-12'>
                    <video autoPlay className='w-100' muted='true' loop>
                        <source src="https://david-burgstaller.com/api/video/TopDownRPG.mp4" type="video/mp4" />
                    </video>
                    <div className="mt-2 mb-4">
                        <span className='badge rounded-pill bg-date-badge me-1'>2023</span>
                        <span className='badge rounded-pill bg-orange me-1'>Godot Engine</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                    After the successful usage of Godot in the Melon Game Jam 2023 I decided to test the engine even more by 
                    creating a little 3D game. So I created this little demonstration of a character and focused on keeping the code clean by a clean seperation
                    of animation and game logic.
                    </p>
                    <p>
                    Godot is a pretty strong lightweight engine and phenomenal for 2D games, but for 3D games it still has its 
                    limits. So I decided to leave this project as it is and stick with Unreal Engine as I love creating 3D games.
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://github.com/Roqum/TopDownRPGControlls">Source Code</a>
                </div>
                <hr className='hrStyle my-5'/>
            </div>

            <div className='row py-0 fc-gray800'>
                <h4 className='pb-4'>Raytracing Rendering of simple 3D Objects in Console</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="raytracing" src={'https://david-burgstaller.com/api/images/RaytracingThreeSpheres.jpg'}
                            onMouseOver={() => changeImage("raytracing", require("../gifs/Raytracing.gif"))} 
                            onMouseLeave={() => changeImage("raytracing", "https://david-burgstaller.com/api/images/RaytracingThreeSpheres.jpg")}
                        />
                    <div className="mt-2 mb-4">
                    <span className='badge rounded-pill bg-date-badge me-1'>2020</span>
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
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="\rayTracing">Demo</a>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://github.com/Roqum/Raytracing-Rendering-in-Console">Source Code</a>

                </div>
            </div>
            <hr className='hrStyle my-5'/>

            <div className='row pt-5 fc-gray800'>
                <h4 className='pb-4'>Data Visualization Website (Bachelor Thesis)</h4>
                <div className='col-sm-4 col-12'>
                    <img className="mw-100" id="bachelor" src={"https://david-burgstaller.com/api/images/BachelorThesis.jpg"} 
                        onMouseOver={() => changeImage("bachelor", require("../gifs/Bachelor.gif"))} 
                        onMouseLeave={() => changeImage("bachelor", "https://david-burgstaller.com/api/images/BachelorThesis.jpg")}
                    />
                    <div className="mt-2 mb-4">
                    <span className='badge rounded-pill bg-date-badge me-1'>2023</span>
                        <span className='badge rounded-pill bg-orange me-1'>Python</span>
                        <span className='badge rounded-pill bg-orange me-1'>React</span>
                        <span className='badge rounded-pill bg-orange me-1'>Leaflet</span>
                        <span className='badge rounded-pill bg-orange me-1'>D3js</span>
                    </div>
                </div>
                <div className='col-sm-8 col-12'>
                    <p>
                        For my bachelor thesis I received a data set with information about 20 000 educational courses from the german-speaking area. It was a huge JSON file with all the data stuffed in there. 
                        My task was to visualize the data so that valuable hidden information could be discovered to investigate  the educational situation in Germany.
                    </p> 
                    <p>
                        My main focus was to visualize the geo data of the courses on a large map. My second goal was to assign the courses to distinct categories and display them with a color on the website.
                    </p>
                    <p> 
                        I implemented some Data Mining methods and developed a algorithm that categorized the courses into different areas. During all of that I, had to solve several performance issues due to the large data size.
                    </p>
                    <p>
                        <b>If you want to have more detail about how I created the website, my thesis is attached to the source code.</b>
                    </p>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://dashboard.iplus.svc.educs-hosting.net/">Live Demo</a>
                    <a className="align-bottom bg-orange btn btn-primary mx-1 px-1 py-1" href="https://github.com/Roqum/Bachelorarbeit_Dashboard">Source Code</a>
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
                    <span className='badge rounded-pill bg-date-badge me-1'>2023</span>
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
            

        </div>
    </>
);
}

export default Coding;