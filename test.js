const { prototype } = require('express-handlebars/lib/express-handlebars')
const mongoose = require('mongoose')

const Post = require('./models/Post') // oluşturulan verilerileri models den çek

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {  // veri tabanınna bağlanmak için
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

/*  Bul ve SİLME ÖZELLİĞİ
Post.findByIdAndDelete('615c1b7c7994c3567621d170', (error,post)=>{
    console.log(error,post)
}) */

/* BUL ve GÜNCELLE ÖZELLİĞİ
Post.findByIdAndUpdate('615c1b701111a79f821a365e', {
    title:' Bizim İlk Postumuz'
}, (error, post)=> {
    console.log(error, post)
}) */

/*   ID ye göre BULMA
 Post.findById('615c1b701111a79f821a365e', (error,post)=> {
    console.log(error, post)
}) */


/* Bütün verileri getirme özelliği süslü prantezler boş bırakılır
Post.find({ }, (error,post) => {
    console.log(error,post)
}) */


/*   FIND TITLE ATTRIBUTE ILE ARAMA  OZELLIGI
Post.find({
    title: 'benim 2. post başlığım'
},(error,post)=>{
    console.log(error, post)
}) */


/* Post.create({
    title: 'First create',
    content: 'First content,Lorem ipsum'
}, (error, post) => {
    console.log(error, post)
})
 */



/*               CREARE 
    Post.create({                         // static veri oluşturuduk
    title: 'benim 2. post başlığım',
    content: '2. Post içeriği, lorem ipsum test'
}, (error, post) => {                   //callback fonksiyonu syntaxi Aenkron çalışma 
    console.log(error, post)            // hata veirse bize error ve postu göster.
}) */

// terminale node test.js  yazılır null alınırsa hata yoktur.