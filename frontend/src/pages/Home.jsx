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
                        <div className='fs-5'>I am David, an aspiring game developer based in Frankfurt am Main, Germany. </div>
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
                        I love the challenges of programming, pushing the boundaries of technology to find efficient solutions for 
                        crafting new things out of nothing. Game development is exactly this for me. To work as a team and build a world 
                        filled with life through music, art and technology, fascinates me. Even so, I would love to compose the music, 
                        draw the art and program the game all by myself, but I know that this is too ambitious. My lifetime is too short to 
                        master all of these skills. Luckily, I don't have to. We humans are not ment to do everything on our own, we need each 
                        other to accomplish great things. I am sure that there are plenty of people who can create better artworks, music and 
                        stories than me. So I want to find these people and contribute my programming skills to bring their art, music and 
                        stories to life as a video game. Summarized in short: I am looking for a job in the gaming industry.
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
                        I started programming when I was 13 and have started several projects over the years. Unfortunately, 
                        not all my projects survived the years and got lost. Also, my time during my studies at the university 
                        was limited, so I have no big and complex projects to offer. I mainly played around with engines like Unity 
                        and Unreal Engine. I created worlds, programmed controls for different genres and got lost in the creation of assets. 
                        The assets were my biggest obstacle that hindered me a lot in committing to a single project. 
                        I ended up jumping around from project to project. As a fan of the visual art of a game, my perfectionism was my enemy 
                        in this case. 
                        </p>
                        <p className='text-center'>
                        As you probably can tell, my interest is not in coding alone, even though it is clearly my focus. 
                        Artworks, especially in the gaming industry, fascinates me. So I couldn't resist trying it myself 
                        and did some modeling and digital painting projects. Actually, I would really love to try music composing 
                        as well if I could, but programming and art is already time-consuming enough, so I never took the chance. 
                        Okay, actually I tried it as well, but just a little bit.                      
                        </p>
                        <p className='text-center'>
                            You can find more details about my programming projects here
                        </p>
                        <div className='text-center'>
                        <a className="bg-orange btn btn-primary mx-2 mb-5 px-1 py-1" href="\coding">Coding</a>
                        </div>
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
