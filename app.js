const express = require('express');
const app = express();
const PORT = 3000;
//variables 

app.use(express.static('public'));
app.use(express.static('views'));

//=======ROUTES=====


app.get('/',(req,res,next) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/photogallery',(req,res,next) => {
    res.sendFile(__dirname + '/views/photogallery.html');
})

app.get('/works',(req, res, next) => {
   res.sendFile(__dirname + '/views/works.html');
})

app.listen(PORT || 3000, () => console.log('Listening on port 3000!'));