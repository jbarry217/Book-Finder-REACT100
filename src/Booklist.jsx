import React from 'react';
import App from './App'

export default props => (
<section>
    <div>
        <img src= {props.thumbnail} alt= ""/>
    </div>
    
    <div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
    </div> 

        <ul className="mb-4">
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
                <span className="fw-bold">Average Rating:</span>  {props.rating}
            </li>
            <li>
                <span className="fw-bold">ISBN:</span>  {props.isbn}
            </li>
        </ul>
            <div className="d-grid gap-2 col-3 mx-auto">
                <a className='btn btn-primary' 
                    name= "button" 
                    type= "button"> 
                    Look on Open Library 
                </a>
            </div>
       
</section>
);