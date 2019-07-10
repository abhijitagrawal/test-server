const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({text : 'Hello World!'}))
app.get('/login', (req, res) => {
    console.log("Body : ", req.body);
    res.json({text : req.body})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))