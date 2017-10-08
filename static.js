var express = require('express'),
        app = express();
        
app.use(express.static(__dirname));

function handleRoute(res, route) {
    res.set('Content-Type', 'text/html');
    res.sendfile(__dirname + '/' + route + '.html');
}

function handleSlash(req, res) {
    if (req.path.substr(req.path.length -1, 1) !== "/") {
        res.redirect(req.path + '/');
    }
}

app.get('/about*', function(req, res) {
    handleSlash(req, res);
    handleRoute(res, 'about');
});

app.get('/works*', function(req, res) {
    handleSlash(req, res);
    handleRoute(res, 'works');
});

app.get('/contact*', function(req, res) {
    handleSlash(req, res);
    handleRoute(res, 'contact');
});

// if everything else fails ;)
app.get('/', function(req, res) {
    res.redirect(req.path + 'about/');
});

app.listen(8888);