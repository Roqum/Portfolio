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
                <div className="fc-gray800 mw-100">
                    <h3 className='text-center fc-orange pb-4 pt-5'>About Me!</h3>
                    <p className='text-center'>
                        A game programmer freshly graduated in Computer Science with 1,5 years experience working as a software developer and several finished projects in the meantime.
                        With one published game on Itch.io, two published websites and the knowledge of several books in my pocket, I am currently working full-time on getting into the realm of Unreal Engine 5. <br />
                        Self-driven, hardworking and a balanced personality allowing me to adapt and contribute to a positive team culture.
                    </p>
                    <p className='text-center mt-5'>
                        <h5>Projects:</h5>
                    </p>
                        <div className='text-center'>
                            <a className="bg-orange btn btn-primary mx-1 px-1 py-1" href="\coding">Coding</a>
                            <a className="bg-orange btn btn-primary mx-1 px-1 py-1" href="\art">Art</a>
                        </div>
                </div>
                <hr className='hrStyle mt-5'/>
                    
                <div className="bg-gray900 h-100">
                    <div className="fc-gray800 mw-100">
                        <h3 className='text-center fc-orange py-4'>My Motivation!</h3>
                        <p className='text-center'>
                        I love the challenges of programming, pushing the boundaries of technology to find efficient solutions so that your team is able to 
                        craft new immersive worlds out of nothing. To work as a team and build a world 
                        filled with life through music, art and technology, fascinates me. Even so, I would love to compose the music, 
                        draw the art and program the game all by myself, I know that this is too ambitious. My lifetime is too short to 
                        master all of these skills. Luckily, I don't have to. We humans are not ment to do everything on our own. Together we can 
                        accomplish far great things. I am sure that there are plenty of people who can create better artworks, music and 
                        stories than me. But I am also sure that there also plenty of people who are not able to bring theire artwork, music and storie alive. 
                        Thats the skill I can contribute to the team. Exactly that is what I love in game development. Working as a team and enchance each others strenght to
                        craft an entire new world out of creativity. It is a masterpiece of science, music and art created by multiple people and for the whole world to enjoy it.
                        </p>
                        <p className='text-center'>
                        You can read more about me and my story here.
                        </p>
                        <div className='text-center'>
                        <a className="bg-orange btn btn-primary mx-2 px-1 py-1" href="\about">Read more</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
    }

export default Home;
