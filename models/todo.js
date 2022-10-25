const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
})

module.exports = mongoose.model("Item", schema)