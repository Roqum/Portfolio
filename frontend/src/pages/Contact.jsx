import React, { useState } from 'react';
import "../scss/Contact.scss";

function Contact() {
    const [inputs,setInputs] = useState({
        email: "",
        message: ""
    })
    const [isEmailSent,setIsEmailSent] = useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const sendEmail = (event) => {
        event.preventDefault();

        if(inputs.email != ""|| nputs.email != "") {
            console.log(inputs.email, inputs.message);
            fetch('http://localhost:8000/sendMail', {
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
            <div className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark text-white opacity-0">
                <button className="navbar-brand mb-0 h1 opacity-0">test</button>
            </div>
            <div className="container py-5 px-6 mx-auto w-65 bg-gray900 min-vh-100 ">
                <div className="p5-4 px-6 w-75 mx-auto">
                    <div className='text-white pb-4 text-center h2'>Write me!</div>
                    <p className='text-white fs-6'>
                        <span className='fw-bolder'>E-mail: </span><a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' href= "mailto:david.burgstaller@yahoo.de">david.burgstaller@yahoo.de</a>
                    </p>
                    <br />
                    <p className='text-white'>
                        Use my email or following form to write me a message.
                    </p>
                    <br />
                    <form className='text-white needs-validation' onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" id="email" value={inputs.email} onChange={handleChange} aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea type="text" className="form-control" name="message" id="message" value={inputs.message} onChange={handleChange} rows="6" required/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Send</button> 
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