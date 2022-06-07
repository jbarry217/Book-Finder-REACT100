import React from 'react';
import App from './App'

export default props => (

    <div className='table'>
        <div className='col-md-12'>
            <table className='table table-hover' id='books-table'>
                <thread>
                    <tr>
                        <th scope="col-sm-3"><img src={props.thumbnail} alt= ""/></th> 
                        <th scope='col-sm-7"'>
                            <h5>Title: {props.title}</h5>
                            <br/>
                            <h7>Author: {props.author}</h7>
                            <br/>
                            <h7>Published Date: {props.published}</h7>
                            <br/>
                            <h7>Average Rating: {props.rating}</h7>
                            <br/>
                            <p>Description: {props.description}</p>
                        </th>
                        <th scope='col-sm-2'>
                            <a className='btn btn-primary' 
                            name= "button" 
                            type= "button"> 
                            Look on Open Library 
                            </a>
                        </th>
                    </tr>
                </thread>
            </table>
        </div>
    </div>
);