import axios from 'axios';
import { resolve } from 'bluebird';
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

            bookInfo: [],
            // libraryInfo: []
        };
        this.textChange = this.textChange.bind(this);
        this.newSearch = this.newSearch.bind(this);
        // this.librarySearch =this.librarySearch.bind(this);
    }

    textChange(event){
        const searchObjClone = JSON.parse(JSON.stringify(this.state.searchObj));
        searchObjClone[event.target.name] = event.target.value;
        this.setState({ searchObj : searchObjClone });
    }

    newSearch(){  
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
            this.setState({ bookInfo : bookObj.data.items})

        })
        .then(console.log(this.state.bookInfo))
        

        .catch((error) => {
            console.log("error");
        })
    };

    // librarySearch(i){
    //     console.log(i);
    //     console.log("library Search")
    //     var isbnNumber = this.state.bookInfo[i].volumeInfo.industryIdentifiers[0].identifier;
    
    //     const libaryURL = `http://openlibrary.org/api/volumes/brief/isbn/${isbnNumber}.json`
    //     axios.get(libaryURL)
    //     .then((libaryObj) => {
    //     this.setState({ libraryInfo : libaryObj })
    // })
    // };

    render() {
        return (

            <div className='container col-12'>
            <div className='row1'>
                <h1 className='font-bold text-center text-4xl pt-5 lg:text-6xl'>Book Finder</h1>
            </div>
                <div className='row2'>
                <h4 className='text-center pb-5'> Find Your Book </h4>
                </div>
                    <div className='search'>
                    <div className="input-group pb-5">
                        <input className='search-box text-center col-5' name= "searched" type= "text" value={this.state.searchObj.searched} placeholder='Type an author or book name' onChange={(e) => this.textChange(e)}/>
                        <select className='search-type col-2 text-center ' name='select' value ={this.state.searchObj.select} onChange={(e) => this.textChange(e)}>
                            <option>Search by...</option>
                            <option value= "author">Author</option>
                            <option value="title">Title</option>
                        </select>
                    <button 
                        onClick={() => this.newSearch()}
                        className='search-button btn btn-dark text center col-1' 
                        type= "submit" 
                        name= "submit">
                        Search
                        </button>
                        </div>
                    </div>
            <div >
                
            {
                this.state.bookInfo.length===0 ? <Welcome /> : 
                this.state.bookInfo.map((item, index) => {
                    try{
                    return(
                    <Booklist 
                            key={index}
                            index={index}
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            published={item.volumeInfo.publishedDate}
                            publisher={item.volumeInfo.publisher}
                            description={item.volumeInfo.description}
                            isbn={item.volumeInfo.industryIdentifiers[0].identifier}
                            thumbnail={item.volumeInfo.imageLinks.thumbnail}
                            handleChange={this.handleChange}
                            textChange={this.textChange}
                            librarySearch={this.librarySearch}
                            bookObj={item}
                            searched={item.searched}
                            select={item.select}
                    />
                    )}
                    catch(err){
                        <Booklist 
                            key={index}
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            published={item.volumeInfo.publishedDate}
                            publisher={item.volumeInfo.publisher}
                            description={item.volumeInfo.description}
                            isbn=""
                            thumbnail="https://flyclipart.com/book-png-images-transparent-free-download-book-png-569995"
                        />
                    }
                })
            }
{/* 
            {
                this.state.libraryInfo.map(info => (
                    <Booklist
                            key={info.id}
                            name={info.name}
                            url={info.records.recordURL}
                            libraryObj={info}
                    />
                ))
            } */}
                </div>
            </div>
          

        );
    };
}


export default App;