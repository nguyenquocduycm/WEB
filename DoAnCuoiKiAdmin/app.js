const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path=require('path');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath)); 


app.use(express.static(path.join(__dirname, '/public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//app.use('/admin/view', require('./routes/view.route'));


app.get('/', function (req, res) {
  // res.send('hello expressjs');
  res.render('home');
})

app.get('/home', function (req, res) {
  res.render('home');
})

app.get('/view', function (req, res) {
  res.render('view');
})

app.get('/add', function (req, res) {
  res.render('add');
})

app.get('/remove', function (req, res) {
  res.render('remove');
})

app.get('/update', function (req, res) {
  res.render('update');
})

app.use(function (req, res) {
  res.render('404', {
    layout: false
  });
})


const PORT = 1000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
})