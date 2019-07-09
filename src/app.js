const express = require('express')
require('./db/mongoose')
const Data = require('./models/data')
const User = require('./models/user')
const path = require('path')
const hbs = require('hbs')
const { sendEmail, sendWelcomeEmail } = require('./emails/account')

app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


app.use(express.json())

var moteData

app.post('/', async (req, res) => {
    moteData = req.body
    const data = new Data(req.body)
    try {
        await data.save()
        res.status(201).send(data)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        sendWelcomeEmail(user.email, user.name)
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        const hex = data.object.dataHex
        const dec = parseInt(hex,16)
        if ( dec < 8 ) {
            user.forEach((user) => {
                sendEmail(user.email, user.name, dec)
            })
        }
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})


app.get('/lora', (req, res) => {
    res.json(moteData)
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'LoRa',
        name: 'Aditya Keni'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Aditya Keni'
    })
  })
  
  app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Page not found!',
        name: 'Aditya Keni'
    })
  })

app.listen(port, () => {
    console.log(`Server is on ${port}`)
})