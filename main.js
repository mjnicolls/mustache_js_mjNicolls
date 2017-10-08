var fs = require('fs');
const Mustache = require('Mustache');
fs.readFile('the_beatles.json', (err, data)=>{
    data = JSON.parse(data);
    fs.readFile('beatles.mst', 'utf8', (err, tmpl)=>{
        fs.writeFile('the-end.mst', Mustache.render(tmpl, data));
    });
});
