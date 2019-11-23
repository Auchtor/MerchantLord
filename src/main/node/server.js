const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const htmlPort = 3000;

app.get('/', function (request, response) {
  response.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port {0}!'.replace('{0}',htmlPort));
})