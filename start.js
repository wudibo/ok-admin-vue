/*const express = require('express'),
    app = express(),
    port = 3000;
app.use(express.static('./dist'));
app.listen(port, function () {
  console.log("http://localhost:" + port);
});*/

const Koa = require('koa'),
    _static = require('koa-static'),
    app = new Koa(),
    port = 3000;
app.use(_static(__dirname + '/dist'));
app.listen(port, async () => {
  console.log("http://localhost:" + port);
});