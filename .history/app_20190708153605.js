const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   res.send('welcome, ' + req.body.username)
// })

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})
app.get('/', (req, res) => res.json({text : 'Hello World!'}))
app.post('/login', jsonParser, function(req, res){
    console.log("Body : ", req.body);
    res.json({text : req.body})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))