const express = require('express');
const axios = require('axios');

require('dotenv').config();

const api_key = process.env.API_KEY;
const app = express();


app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/googleBooksAPI/:select/:searched', (req, res) => {

        if(req.params.select == "author"){
            var URL = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${req.params.searched}&key=${api_key}+&maxResults=40`
        } else if (req.params.select == "title"){
            var URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${req.params.searched}&key=${api_key}+&maxResults=40`
        }
        axios.get(URL) 
        .then((bookObj) => {
            res.send(bookObj.data.items)
        })        
        .catch((error) => {
            console.log("error");
        })
   
    // axios.get(URL)
    //     .then((bookObj) => {
    //         bookList.push(bookObj.data);
    //         res.send(bookObj.data)
    //     })
    //     .then(bookList => this.setState({ bookList }))
    //     .catch((error) => {
    //         console.error(error);
    //         res.send('An error occured.');
    //     })
    
});


module.exports = app;