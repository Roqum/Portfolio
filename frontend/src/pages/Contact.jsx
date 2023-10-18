import React from 'react';

function Contact() {
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
                    <p className='text-white'>
                        Use my email or following form to write me a message.
                    </p>
                    <form className='text-white'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="exampleInputPassword1" rows="6"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileSm" className="form-label">Attachment</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;