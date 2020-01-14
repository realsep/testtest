var express = require('express');
var bodyParser = require('body-parser');

const port = 5000;

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    // res.sendFile('/search.html', { root: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

//     res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res) { 
//เรียก heroku gentle-crag-28693/search
    res.send("0000");
   
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
