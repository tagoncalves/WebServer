//Importacion
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
//Usos de express
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico // prioriza el middleware
app.use(express.static('public'));


//Home Page
app.get('/', (req, res) => {
  res.render('Home', {
    nombre: 'Tomas Goncalves',
    titulo: 'Curso de Node'
  });
});

//Generic page
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Tomas Goncalves',
    titulo: 'Curso de Node'
  });
});

//Element Page
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Tomas Goncalves',
    titulo: 'Curso de Node'
  });
});

//Page doesnt exist
// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// })

//Listening Port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
