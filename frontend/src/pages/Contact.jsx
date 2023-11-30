import React, { useState } from 'react';
import "../scss/Contact.scss";
import {BsSend} from 'react-icons/bs';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



function Contact() {
    const [inputs,setInputs] = useState({
        email: "",
        message: ""
    })
    const [isEmailSent,setIsEmailSent] = useState(0);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("resize").style.height = "50vh";
        } else {
          document.getElementById("resize").style.height = "80vh";
        }
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const sendEmail = (event) => {
        event.preventDefault();

        if(inputs.email != ""|| nputs.email != "") {
            console.log(inputs.email, inputs.message);
            fetch('http://david-burgstaller.com/api/sendMail', {
                method: "POST",
                body: JSON.stringify({
                    emailFromAddr: inputs.email,
                    message: inputs.message
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.status)
            .then(status => {
                if (status == 200) { 
                    setIsEmailSent(200)
                } 
                else { 
                    setIsEmailSent(500)
                }
                setTimeout(() => {
                    setIsEmailSent(0);
                }, 5000);
            });
        }
    }
    

    return (
        <>
            <div id="resize" className='z-0 contact-as-image w-100'>
                <div className='position-relative h-100 w-100'>
                    <div className='position-absolute top-50 start-50 translate-middle display-1 text-white fw-normal'>
                        Write me!
                    </div> 
                </div>
            </div>
            <div className="container py-5 px-6 mx-auto bg-gray900 min-vh-100 ">
                <div className="p5-4 px-6 w-75 mx-auto">
                    <div className='row'>
                        <div className='col-1'>
                            <MdOutlineMail className="mb-2 fc-gray800" size={30}/>             
                        </div>
                        <div className='col-11'>
                            <p className='fc-gray800 fs-6'>
                                <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href= "mailto:david.burgstaller@yahoo.de">
                                    david.burgstaller@yahoo.de
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <IoLocationOutline className="mb-2 fc-gray800" size={30}/>
                        </div>
                        <div className='col-11'>
                        <p className='fc-gray800 fs-6'>
                            <span className=''> 
                                Frankfurt am Main <br />
                                Germany
                            </span>
                        </p>
                        </div>
                    </div>
                    <br />
                    <p className='fc-gray800'>
                        Use my email or following form to write me a message.
                    </p>
                    <br />
                    <form className='fc-gray800 needs-validation' onSubmit={sendEmail}>
                        <div className="mb-3">
                            <input type="email" className="form-control bg-textfield" name="email" id="email" value={inputs.email} placeholder='E-Mail Address' onChange={handleChange} aria-describedby="emailHelp" required/>
                        </div>
                        <br />
                        <div className="mb-3">
                            <textarea type="text" className="form-control bg-textfield" name="message" placeholder='Message' id="message" value={inputs.message} onChange={handleChange} rows="6" required/>
                        </div>
                        <button type="submit" className="bg-orange btn btn-primary fc-gray800"><BsSend size={18}/>&ensp; Send</button> 
                        <h5 className={`alert alert-success animationAlert ${isEmailSent == 200 ? 'visibleAlert' : ''}`}>
                            Email was succsessfully sent
                        </h5>
                        <h5 className={`alert alert-danger animationAlert ${isEmailSent == 500 ? 'visibleAlert' : ''}`}>
                            Email could not be sent. Please check your entries or use my email address.
                        </h5>
                    </form>
                    <br />
                    
                </div>
            </div>
        </>
    );
}

export default Contact;