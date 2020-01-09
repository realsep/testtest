var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const port = 5000;

var app = new express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.options('*', cors())
app.get('/', function(req, res) {
    // res.sendFile('/search.html', { root: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

//     res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res) {

    res.send("00000");
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
