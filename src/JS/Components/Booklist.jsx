import React from 'react';
import App from '../App'

export default props => {
    return(
<div className="container mt-5 mb-5">
    <div className="row">
    
        <div className='col-2'>
            <img src= {props.thumbnail} alt= "" className="block mx-auto w-2/3"/>
    
            <div>
            <a href={`https://openlibrary.org/isbn/${props.isbn}`} target="_blank">
                <button className='btn btn-primary mt-4 mb-5 px-3' 
                    name= "button" 
                    type= "button"
                    > 
                    Open Library 
                </button>
            </a>

            </div>
        </div>
        <div className='col-10'>
            <div>
                <h5 className='font-bold text-4xl mb-3'>{props.title}</h5>
                <p className="mb-4">{props.description}</p>
            </div> 

            <ul className="mb-5">
                <li>
                    <span className="fw-bold">Author:</span> {props.author}
                </li>
                <li>
                    <span className="fw-bold">Published Date:</span> {props.published}
                </li>   
                <li>
                    <span className="fw-bold">Publisher:</span> {props.publisher}
                </li>
                <li>
                    <span className="fw-bold">ISBN:</span>  {props.isbn}
                </li>
            </ul>
        </div>

    </div>
</div>
);
}