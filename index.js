const express = require('express');
const app = express();


app.set('view-engine','ejs');

const port = process.env.PORT ||  3000;

app.listen( port, ()=> {
    console.log('express listening at ' + port );
});

app.use( express.static('public') );

app.get('/register', (request,response) => {

    global.location = "register";
    response.redirect('/register.html');
});

app.get('/forgot', (req, res) => {

    res.render('forgot.ejs',{ who: 'me'});
});

