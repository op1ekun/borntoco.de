// receive params
var params  = process.argv.splice(2);

// require hogan
var hogan   = require('hogan.js');
var fs      = require('fs');

var templateName = params[0];

fs.readFile(templateName, 'utf8', function(err, tmpl) {
    var compiledTmpl    = hogan.compile(tmpl, { "asString" : true });

    var key = templateName.replace('.html', '');

        var literal = 
            '(function(){' +
                'var tmpl = use(\'core.templates\');' +
                'tmpl.Templates.register(\'' + key + '\', new Hogan.Template(' + compiledTmpl + '));' +
            'return ' + compiledTmpl + ';' +
        '})();';

    if (params[1]) {
        fs.writeFile(params[1], literal, 'utf8', function(err){
            console.log('compiled: ' + params[1]);
        });
    }
    else {
        process.stdout.write(literal);
    }

});
