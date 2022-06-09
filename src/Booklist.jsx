import React from 'react';
import App from './App'

export default props => {
    return(
<row>
    
    <div className='col-2'>
        <img src= {props.thumbnail} alt= "" className="block mx-auto w-1/2"/>
    </div>
    <div className='col-10'>
    <div>
        <h5 className='font-bold my-2 text-2xl mb-2'>{props.title}</h5>
        <p className="mb-4">{props.description}</p>
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
    </div>
            <div>
                <button className='btn btn-primary mb-5' 
                    name= "button" 
                    type= "button"
                    // onClick={this.props.librarySearch(i)}
                    > 
                    Look on Open Library 
                </button>
            </div>
</row>
);
}