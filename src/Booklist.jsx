import React from 'react';
import App from './App'

export default props => (

    <div className='table'>
        <div className='col-md-12'>
            <table className='table table-hover' id='books-table'>
                <thread>
                    <tr>
                        <th scope="col-sm-3"><img src={props.thumbnail} alt= ""/></th> 
                        <th scope='col-sm-7' alt= "">
                        <h5>Title: {props.title}</h5>
                        <p>Description: {props.description}</p>
                            <ul className="mb-4">
                                <li>
                                    <span className="font-bold">Author:</span> {props.author}
                                </li>
                                <li>
                                    <span className="font-bold">Published Date:</span> {props.published}
                                </li>   
                                <li>
                                    <span className="font-bold">Publisher:</span> {props.publisher}
                                </li>
                                <li>
                                <span className="font-bold">Average Rating:</span>  {props.rating}
                                </li>
                            </ul>
                        <div class="d-grid gap-2 col-3 mx-auto">
                            <a className='btn btn-primary' 
                            name= "button" 
                            type= "button"> 
                            Look on Open Library 
                            </a>
                        </div>
                        </th>
                    </tr>
                </thread>
            </table>
        </div>
    </div>
);