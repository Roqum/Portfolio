import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush } from 'react-icons/fa';

import '../scss/Home.scss';

const Home = (props) => {

    let navigate = useNavigate(); 

    const navigateToArt = () => {
        navigate("/art");
    } 
    const navigateToCoding = () => {
        navigate("/coding");
    } 
    return (
        <> 
            <div className='bg-as-image w-100'>
                <div className={`container mx-auto d-flex h-100 align-items-center animation ${props.visibility ? 'visible' : ''}`}>
                    <div className="row w-100 ">
                        <div className="col text-center pt-5">
                            <button onClick={props.visibility ? navigateToCoding : null} className={`btn btn-project h-100 w-100 py-5 bg-orange`}>
                                <FaCode size={100} color='white' opacity={.65} className='mb-5'/>
                                <br/>
                                <h1 className='font-weight-bold text-white'>Coding</h1>
                            </button> 
                        </div>
                        <div className="col text-center pt-5 ">
                            <button onClick={ props.visibility ? navigateToArt : null} className={`btn btn-project h-100 w-100 py-5 bg-orange`}>
                                <FaPaintBrush size={100} color='white' opacity={.65} className='mb-5'/>
                                <br/>
                                <h1 className='font-weight-bold text-white'>Art</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-4 px-5 mx-auto w-100 bg-gray900 display-inline-block">
                <div className={`hide bg-gray900 h-100 ${props.visibility ? 'visible' : ''}`}>
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange'>Projects!</h4>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At vero eos et accusam et justo duo dolores et 
                        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua.orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et 
                        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    </div>
                </div>
                <div className={`hide bg-gray900 h-100 ${props.visibility ? '' : 'visible'}`}>
                    <div className="fc-gray800 mw-100">
                        <h4 className='text-center fc-orange'>About me!</h4>
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
