const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
  res.render('index');
});
app.post('/saludo', function(req, res){
  var nombre= req.body.nombre;
  res.send('<h1> Hola ' + nombre + '!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
