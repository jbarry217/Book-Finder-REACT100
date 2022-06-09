import React from 'react';

export class Inputs extends React.Component{

render(){
    return(

        <div className='search'>
            <div className="input-group pb-5">
                <input className='search-box text-center col-5' name= "searched" type= "text" value={this.props.searchObj.searched} placeholder='Type an author or book name' onChange={(e) => this.props.textChange(e)}/>
                <select className='search-type col-2 text-center ' name='select' value ={this.props.searchObj.select} onChange={(e) => this.props.textChange(e)}>
                    <option>Search by...</option>
                    <option value= "author">Author</option>
                    <option value="title">Title</option>
                </select>
                <button 
                    onClick={() => this.props.newSearch()}
                    className='search-button btn btn-dark text center col-1' 
                    type= "submit" 
                    name= "submit">
                    Search
                </button>
            </div>
        </div>


    )
}
}

export default Inputs;