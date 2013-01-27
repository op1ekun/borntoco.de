var express = require('express'),
        app = express();

    app.get('/about', function(req, res) {
        res.sendfile(__dirname + '/about.html');
    });
    
    app.get('/blog', function(req, res) {
        res.sendfile(__dirname + '/blog.html');
    });
    
    app.get('/works', function(req, res) {
        res.sendfile(__dirname + '/works.html');
    });
    
    app.get('/contact', function(req, res) {
        res.sendfile(__dirname + '/contact.html');
    });
    
    app.use(express.static(__dirname));

    app.listen(8888);