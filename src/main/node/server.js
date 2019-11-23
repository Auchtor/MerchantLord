const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

const htmlPort = 3000;

app.get('/', function (request, response) {
  //req.body.searchstring
  //TODO: database request
  response.render('index');
})

app.listen(htmlPort, function () {
  console.log('Example app listening on port {0}!'.replace('{0}',htmlPort));
})