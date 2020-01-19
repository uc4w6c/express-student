const express = require('express')
const app = express()

/*
app.use('/hello', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})
*/  
app.get('/hello', (req, res, next) => {
    console.log('hello1');
    // res.send('Hello World');
    next()
}, (req, res, next) => {
    console.log('hello2');
    res.send('Hello World');
})
app.post('/hello', (req, res) => {
    res.send('Hello World');
})

app.listen(3000);
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
