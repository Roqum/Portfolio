import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

import '../scss/Home.scss';

const Home = (props) => {

    let navigate = useNavigate(); 
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("resize").style.height = "50vh";
        } else {
          document.getElementById("resize").style.height = "80vh";
        }
    }

    const navigateToArt = () => {
        navigate("/art");
    } 
    const navigateToCoding = () => {
        navigate("/coding");
    } 
    return (
        <> 
            <div id="resize"className='bg-as-image w-100'>
                <div className='row h-100 mh-100'>
                    <div className='col-12 text-white col-12 d-flex justify-content-center flex-column align-self-end align-items-center'>
                        <p className='h1'>Welcome to my Portfolio!</p>
                        <div className='fs-5'>I am David, a rising game developer based in Frankfurt am Main, Germany. </div>
                        <div className='fs-5'>Feel free to explore this portfolio and get to know me more.</div>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-end'>
                        <div >
                            <a href="#section02" ><i className="arrow down py-4 px-4 mb-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section02" className="py-4 px-5 mx-auto w-100 bg-gray900 container">
                <div className="bg-gray900 h-100">
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange py-4'>About Me!</h4>
                        <p className='text-center'>
                        I love the challenges of programming, pushing the boundaries of technology to find efficient solutions so that your team is able to 
                        craft new immersive worlds out of nothing. To work as a team and build a world 
                        filled with life through music, art and technology, fascinates me. Even so, I would love to compose the music, 
                        draw the art and program the game all by myself, I know that this is too ambitious. My lifetime is too short to 
                        master all of these skills. Luckily, I don't have to. We humans are not ment to do everything on our own, we need each 
                        other to accomplish great things. I am sure that there are plenty of people who can create better artworks, music and 
                        stories than me. So I want to find these people and contribute my programming skills to bring their art, music and 
                        stories alife.
                        </p>
                        <p className='text-center'>
                        If you want to read my story you can have a look here
                        </p>
                        <div className='text-center'>
                        <a className="bg-orange btn btn-primary mx-2 px-1 py-1" href="\about">Read more</a>
                        </div>

                    </div>
                </div>
                <hr className='hrStyle mt-5'/>
                <div className="bg-gray900 h-100">
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange pb-4 pt-5'>Projects!</h4>
                        <p className='text-center'>
                        I started programming when I was 13 and with 14 I programmed my first small astroids game during my IT classes in school. 
                        After that my passion for game development ignited. I started to program with DirectX, modelled worlds with Blender and the
                        Cryengine and read books about programming. As my IT study started abd took up a lot of time my projects got less but my passion remained.
                        Now after I finished my bachelor I created this portfolio to show my future work and my path as a game programmer.
                        </p>
                        <p className='text-center'>
                            You can find more details about my programming projects here
                        </p>
                        <div className='text-center'>
                        <a className="bg-orange btn btn-primary mx-2 mb-5 px-1 py-1" href="\coding">Coding</a>
                        </div>
                        <p className='text-center'>
                        My interest is not in coding alone, even though it is clearly my focus. 
                        Artworks, especially in the gaming industry, fascinates me. So I couldn't resist trying it myself 
                        and did some modeling and digital painting projects. Actually, I would really love to try music composing 
                        as well if I could, but programming and art is already time-consuming enough, so I never took the chance. 
                        Okay, actually I tried it as well, but just a little bit.                      
                        </p>
                        <p className='text-center'>
                            And you can see some of my artistic attempts here 
                        </p>
                        <div className='text-center'>
                        <a className="bg-orange btn btn-primary mx-2 px-1 py-1" href="\art">Art</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Home;
