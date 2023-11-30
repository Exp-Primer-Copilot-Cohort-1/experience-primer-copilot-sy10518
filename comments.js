// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
    res.send('Comments');
});

app.get('/comments/:id', function(req, res) {
    res.send('Comments id: ' + req.params.id);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});