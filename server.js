var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

const port = 5000;

var app = new express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res, next) {
    // res.sendFile('/search.html', { ro,ot: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

    //     res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res, next) {
    const https = require('https')
    const options = {
        url: 'https://gentle-crag-28693.herokuapp.com/search',
        port: 3001,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': DataCue.length
        }
    }
    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', d => {
            process.stdout.write(d)
        })
    })
    req.on('error', error => {
        console.error(error)
    })
    req.write(data)
    req.end()
    //     res.send("0527");
    // // An object of options to indicate where to post to
    // var post_options = {
    //     url: 'https://gentle-crag-28693.herokuapp.com/search',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     }
    // };

    // // Set up the request
    // var post_req = http.request(post_options, function(res) {
    //     res.setEncoding('utf8');
    //     res.on('data', function(chunk) {
    //         console.log('Response: ' + chunk);
    //     });
    // });

    // // post the data
    // post_req.write(post_data);
    // post_req.end();

});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
