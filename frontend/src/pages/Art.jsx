import React, { useEffect, useState } from 'react';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import '../scss/Projects.scss';


const Art = (props) => {
const [modalImageURL, setModalImageURL] = useState('')
    useEffect(() => {
},[]);
    return (
        <>  
                  
            <div className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark text-white opacity-0">
                <button className="navbar-brand mb-0 h1 opacity-0">test</button>
            </div>
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">    
                            <button type="button" className="btn-close float-end pt-0 mt-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            <img className="w-100 h-100"  src={modalImageURL}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5 px-6 mx-auto bg-gray900 min-vh-100 ">
                <div className=' h3 text-center pb-4'><span className='fc-gray800'>Meshes</span></div>
                <div className='row text-center text-lg-start fc-gray800'>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100" >
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HavenHouseOutside.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HavenHouseOutside.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HavenHouseEG.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HavenHouseEG.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HavenHouseOG1.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HavenHouseOG1.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HavenHouseOG2.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HavenHouseOG2.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/SmithOutside.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/SmithOutside.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/SmithOutside2.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/SmithOutside2.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/SmithEG.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/SmithEG.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HafenDock.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HafenDock.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HafenDockHouse.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HafenDockHouse.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/Temple.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/Temple.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/CityWall.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/CityWall.png")} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container py-5 px-6 mx-auto bg-gray900 min-vh-100 ">
                <div className=' h3 text-center pb-4'><span className='fc-gray800'>Paintings and Drawings</span></div>
                <div className='row text-center text-lg-start fc-gray800'>
                    <div className="col-lg-8 col-sm-12 col-12">
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/DragonDrawing.jpg" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/DragonDrawing1.jpg")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4" >
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/BilboDrawing.jpg" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/BilboDrawing.jpg")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/CementaryDrawing.jpg" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/CementaryDrawing.jpg")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/LandscapeDrawing.jpg" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/LandscapeDrawing.jpg")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className='h6 text-center'>currently working at:</div>
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/DesertPainting.jpg" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/DesertPainting.jpg")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/HandDrawing.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/HandDrawing.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <a href="#" className="d-block mb-4">
                            <img className="img-fluid img-thumbnail" data-bs-toggle="modal" data-bs-target="#imageModal" src="https://david-burgstaller.com/api/images/Crystal.png" onClick={() => setModalImageURL("https://david-burgstaller.com/api/images/Crystal.png")} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Art;