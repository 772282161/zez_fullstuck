const express = require('express')
const api = require('./api.js')
const path = require('path')
const cookieParase = require('cookie-parser');
const app = express()
const port = 3000

app.use(cookieParase());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/captcha', (req, res) => {
    api.createCaptcha(req, res)
})

app.get('/login', (req, res) => {
    res.render('login', {

    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})