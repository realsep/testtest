window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    
    document.getElementById('send').addEventListener('click', function() {

        var msg = document.getElementById('txtCode').value;
        var msg1 = document.getElementById('txtDateF').value;
        var msg2 = document.getElementById('txtDateL').value;
                
        liff.sendMessages([{
            type: 'text',
            text: "0000"
        }]).then(function() {
            window.alert("Message Sent");
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });




    });
}
