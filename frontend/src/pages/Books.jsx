import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import "../scss/Books.scss";

function Books() {

    const [books,setBooks]= useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/books')
            .then(data => data.json())
            .then(json => json.books)
            .then(allBooks => setBooks([...allBooks]))
    },[]); 


    return (
        <>
            <div className="w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark fc-gray800 opacity-0">
                <button className="navbar-brand mb-0 h1 opacity-0">test</button>
            </div>
            <div className="container py-5 mx-auto w-75 bg-gray900 min-vh-100 fc-gray800 ">
                <div className='h3 text-center'><span className='fc-orange'>Relevant Books I read</span></div>
                <hr className='hrStyle container'/>
                
                {books?.map(book => 
                    <div className='row fc-gray800 py-5' key={book.isbn}>
                        <div className='col-3 mh-100'>
                            <img src={'http://localhost:8000/images/' + book.imageName} alt="Clean Code" className="mw-100 container"/>
                        </div>
                        <div className='col-9 fc-gray800'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='row'>
                                        <div className='col-3'>Title:</div>
                                        <div className='col-9'>{book.title}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Author:</div>                                        
                                        <div className='col-9'>{book.author}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Publisher:</div>
                                        <div className='col-9'>{book.publisher}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Description:</div>
                                        <div className='col-9'>
                                            <a className='link-underline-opacity-0 link-light link-underline-opacity-75-hover' data-bs-toggle="collapse" href={'#' + book.isbn} role="button" aria-expanded="false" aria-controls="collapseExample">
                                                Click to Read
                                            </a>
                                            <div className="collapse" id={book.isbn}>
                                                <div className='fc-gray800' style={{"white-space": "pre-wrap"}}>
                                                    {book.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Page Count:</div>
                                        <div className='col-9'>{book.pageCount}</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>Link:</div>
                                        <a className='col-9 link-underline-opacity-0 link-light link-underline-opacity-75-hover' href={book.link}>{book.link}</a>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>ISBN:</div>
                                        <div className='col-9'>{book.isbn}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hrStyle container'/>
                    </div>
                )}
                
            </div>

        </>
    );
}

export default Books;