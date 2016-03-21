var express = require('express');
var fs = require('fs');
var Bing = require('node-bing-api')({ accKey: process.env.BING_ACCOUNT_KEY });

var app = new express();

app.get('/', home);
app.get('/query/*', query);
app.get('/history', history);

app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Listening on port: ' + process.env.PORT);
});

function query (req, res) {
    var query = req.params[0];
    var offset = req.query.offset || 0;
    store(query);
    Bing.images(query, {top: 10, skip: 10 * offset}, function(error, result, body){
        res.send(body.d.results.map(function (element) {
            return {
                url: element.MediaUrl,
                title: element.Title,
                thumb: element.Thumbnail.MediaUrl,
                context: element.SourceUrl,
            }
        }));
    });
}

function home (req, res) {
    res.send(fs.readFileSync('home.html', 'utf8'));
}

function history (req, res) {
    res.send(store.list);
}

function store(query) {
    store.list.push({
        date: new Date(),
        query: query
    });
    var nbToRemove = Math.max(0, store.list.length - 50);
    if (nbToRemove) store.list.splice(0, nbToRemove);
}
store.list = [];