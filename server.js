const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const port = 8000
const path = require("path")
const mainRoutes = require('./routes/routers')



const db = mongoose.connection
require("dotenv").config();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


mongoose
	.connect(process.env.MONGO_KEY, { useNewUrlParser: true })

app.use('/', mainRoutes)


app.listen(port, () => {
    console.log('...listening')
})



