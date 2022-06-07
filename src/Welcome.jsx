import React from 'react'
import App from './App'
              
export class Welcome extends React.Component{

render(){
    return (

            <div className='container'>
                <h5>Welcome to the Book Finder App!</h5>
                <p>Get started now by searching for a book title or author.</p>  
            </div>
    )
}
}

export default Welcome;