const express = require('express');
const app = express();


app.set('view-engine','ejs');

app.listen( 3000, ()=> {
    console.log('express listening at 3000');
});

app.use( express.static('public') );

app.get('/register', (request,response) => {

    global.location = "register";
    response.redirect('/register.html');
});

app.get('/forgot', (req, res) => {

    res.render('forgot.ejs',{ who: 'me'});
});

