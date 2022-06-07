import axios from 'axios';
import React, { Component } from 'react';
import Booklist from './Booklist';
import Welcome from './Welcome'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchObj : {
               searched: "",
               select: "",
            },

            bookInfo: []
        };
        this.textChange = this.textChange.bind(this);
        this.newSearch = this.newSearch.bind(this);
    
    }

    textChange(event){
        const searchObjClone = JSON.parse(JSON.stringify(this.state.searchObj));
        searchObjClone[event.target.name] = event.target.value;
        this.setState({ searchObj : searchObjClone });
    }

    newSearch(event){  
        const api_key = process.env.API_KEY;
        if(this.state.searchObj.select == "author"){
            var URL = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${this.state.searchObj.searched}&key=${api_key}+&maxResults=40`
        } else if (this.state.searchObj.select == "title"){
            var URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${this.state.searchObj.searched}&key=${api_key}+&maxResults=40`
        }
        axios.get(URL) 
        .then((bookObj) => {
            // const bookListClone = JSON.parse(JSON.stringify(this.state.bookInfo));
            // bookListClone.push(bookObj.data);
            console.log(bookObj.data)
            this.setState({ bookInfo : bookObj.data.items})
        })
        .catch((error) => {
            console.log("error");
        })
};

    render() {
        return (

            <div className='container'>
            <div className='row1'>
                <h1>Book Finder</h1>
            </div>
                <div className='row2'>
                <h2> Find Your Book </h2>
                </div>
                    <div className='search'>
                    <div className="input-group input-lg">
                        <input className='search-box' name= "searched" type= "text" value={this.state.searchObj.searched} placeholder='Type an author or book name' onChange={(e) => this.textChange(e)}/>
                        <select className='search-type' name='select' value ={this.state.searchObj.select} onChange={(e) => this.textChange(e)}>
                            <option>Search by...</option>
                            <option value= "author">Author</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                    </div>
                    <button 
                        onClick={(e) => this.newSearch(e)}
                        className='btn btn-block' 
                        type= "submit" 
                        name= "submit">
                        Search
                        </button>
            
            <div className='row3'>
                <div className='card'>
            
            {
                this.state.bookInfo.length===0 ? <Welcome /> : 
                this.state.bookInfo.map(item => {
                    return(
                    <Booklist 
                            key={item.id}
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            published={item.volumeInfo.publishedDate}
                            description={item.volumeInfo.description}
                            rating={item.volumeInfo.averageRating}
                            thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
                            handleChange={this.handleChange}
                            textChange={this.textChange}
                            bookObj={item}
                            searched={item.searched}
                            select={item.select}
                    />
                    )
                })
            }
                </div>
            </div>
            </div>

        );
    };
}


export default App;