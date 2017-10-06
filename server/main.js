var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
var models = require('./app/models');

app.use(bodyParser());

var nodeRoutes = require('./app/routes/nodes');
var actionRoutes = require('./app/routes/actions');
nodeRoutes(app);
actionRoutes(app);

models.sequelize.sync().then(() => {
    app.listen(port);
    console.log('Call Automation RESTful API server started on: ' + port);
})