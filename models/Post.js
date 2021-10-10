const mongoose = require ('mongoose')

const PostSchema = new mongoose.Schema({  // mongoose 3. adım schema model yapısı oluşturmak
    title: { type: String, require:true },  // olmasını istediğimiz döküman yapısının ayarlaıyoruz
    content: { type: String, require:true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', PostSchema)