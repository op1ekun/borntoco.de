var express = require('express'),
        app = express();

function handleRoute(res, route) {
    res.set('Content-Type', 'text/html');  
    res.sendfile(__dirname + '/' + route + '.html');
}

app.get('/about', function(req, res) {
    handleRoute(res, 'about');
});

app.get('/blog', function(req, res) {
    handleRoute(res, 'blog');
});

app.get('/works', function(req, res) {
    handleRoute(res, 'works');
});

app.get('/contact', function(req, res) {
    handleRoute(res, 'contact');
});

app.use(express.static(__dirname));

app.listen(8888);