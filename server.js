const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const port = 8000
const path = require("path")



const db = mongoose.connection
require("dotenv").config();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const schema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
})

const Item = mongoose.model("Item", schema)


mongoose
	.connect(process.env.MONGO_KEY, { useNewUrlParser: true })
	.then(() => {

        


        app.get('/', async (req,res) => {
            
            const posts = await Item.find()
            res.render(__dirname + '/public/views/index', {
                items: posts.reverse()
            })
            //  res.send(posts)


        })
        
        app.post('/list', async (req, res) => {
            let date = req.body.date
            let reformattedDate = [date.split('-')[1], date.split('-')[2], date.split('-')[0]].join('-')
            console.log(reformattedDate)

            const post = new Item({
                title: req.body.title,
                content: req.body.description,
                date: reformattedDate

            })
            await post.save()
            res.redirect('/')
        })
        

        app.post('/delete', async (req, res) => {
            const title = req.body.title
            console.log(req.body.title)
            await Item.findOneAndDelete({title: title})
        })

        app.post('/update', async (req, res) => {
        const title = req.body.title
        const desc = req.body.description

        res.redirect('/')
        })
        

		
	})












app.listen(port, () => {
    console.log('...listening')
})



