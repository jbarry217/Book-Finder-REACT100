import axios from 'axios';
import { resolve } from 'bluebird';
import React, { Component } from 'react';
import Booklist from './Components/Booklist';
import Welcome from './Components/Welcome'
import Inputs from './Components/Inputs'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchObj : {
               searched: "",
               select: "",
            },

            bookInfo: [],
            
        };
        this.textChange = this.textChange.bind(this);
        this.newSearch = this.newSearch.bind(this);
    }

    textChange(event){
        const searchObjClone = JSON.parse(JSON.stringify(this.state.searchObj));
        searchObjClone[event.target.name] = event.target.value;
        this.setState({ searchObj : searchObjClone });
    }

    newSearch(){  
       axios.get(`/googleBooksAPI/${this.state.searchObj.select}/${this.state.searchObj.searched}`)
       .then(items => 
        this.setState({ bookInfo : items.data})
        )
    };

    render() {
        return (

            <div className='container col-12'>
            <div className='row1'>
                <h1 className='font-bold text-center text-4xl pt-5 lg:text-6xl'>Book Finder</h1>
            </div>
                <div className='row2'>
                <h4 className='text-center pb-5'> Find Your Book </h4>
                </div>

                <Inputs searchObj={this.state.searchObj} newSearch={this.newSearch} textChange={this.textChange}/>

                    <div> 
                    {
                    this.state.bookInfo.length===0 ? <Welcome /> : 
                    this.state.bookInfo.map((item, index) => {
                        try{
                            return(
                            <Booklist 
                                    key={index}
                                    index={index}
                                    title={item.volumeInfo.title}
                                    author={item.volumeInfo.authors }
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
                            )
                        }
                            catch(err){
                                <Booklist 
                                    key={index}
                                    title={item.volumeInfo.title}
                                    author={item.volumeInfo.authors }
                                    published={item.volumeInfo.publishedDate}
                                    publisher={item.volumeInfo.publisher}
                                    description={item.volumeInfo.description}
                                    isbn=""
                                    thumbnail="https://flyclipart.com/book-png-images-transparent-free-download-book-png-569995"
                                />
                            }
                    })
                }
            </div>
        </div>
          

        );
    };
}


export default App;