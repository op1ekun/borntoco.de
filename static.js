var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8888, '192.168.1.102');