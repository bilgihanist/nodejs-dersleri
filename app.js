const path = require('path')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')     // mongoose 1. adım require etmek

mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {  //mongoose 2. adım bağlantı oluşturma
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


// app.get('/blog', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'site/blog.html'))
// })

app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})





