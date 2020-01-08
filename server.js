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

    res.send("Online");
});
app.post('/liff', function(req, res) {

    // res.send("0000");
    window.onload = function(e) {
        liff.init(function(data) {
            initializeApp(data);
        });
    };

    function initializeApp(data) {
        document.getElementById('send').addEventListener('click', function() {

            // var msg = document.getElementById('uname').value,
            //     var msg1 = document.getElementById('fdate').value,
            //         var msg2 = document.getElementById('ldate').value



            liff.sendMessages([{
                Type: 'text',
                text: "0000"
                    // Type: 'text',
                    // text: msg,
                    // text: msg1,
                    // text: msg2



            }]).then(function() {
                window.alert("Message sent");
            }).catch(function(error) {
                window.alert("Error sending message:" + error);
            });
        });
    }






});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
