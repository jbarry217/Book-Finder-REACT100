const express = require('express');
const axios = require('axios');


const api_key = process.env.API_KEY;
const app = express();


app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {

   if(props.searchObj.select == "author"){
        var URL = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:&key={api_key}`
    } else if (props.searchObj.select == "title"){
        var URL = `https://www.googleapis.com/books/v1/volumes?q=+intitle:&key={api_key}`
    }
    axios.get(URL)
        .then((bookObj) => {
            bookList.push(bookObj.data);
            res.send(bookObj.data)
        })
        .then(bookList => this.setState({ bookList }))
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
    
});


module.exports = app;