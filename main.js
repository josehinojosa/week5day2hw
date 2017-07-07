const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./users/data.js');
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use('/css', express.static('users'))

app.get("/users", function(req,res)  {
  res.render('users',  {users: data.users})
});

app.get('/users/:id', function(req, res){
  let id =req.params.id;
  let user = data.users[id];
  res.render('user', user)
});


app.listen(3000, function ()  {
  console.log('Successfully started express application!');
})
