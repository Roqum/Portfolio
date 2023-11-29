import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

import '../scss/Home.scss';

const Home = (props) => {

    window.onscroll = function() {scrollFunction()};
    let navigate = useNavigate(); 

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
                        <p>I am David, an aspiring game programmer who loves coding</p>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-end'>
                        <div className="">
                            <a href="#section02 " ><i class="arrow down py-4 px-4 mb-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 px-5 mx-auto w-100 bg-gray900 container">
                <div className="bg-gray900 h-100">
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange py-4' id="section02">About Me!</h4>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At vero eos et accusam et justo duo dolores et 
                        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua.orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et 
                        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    </div>
                </div>
                <div className="bg-gray900 h-100">
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange py-4'>Projects!</h4>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
                        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Home;
