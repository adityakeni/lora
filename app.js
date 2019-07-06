const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs')
const base64 = require('base-64')

const app = express()
const port = process.env.PORT || 4000


const publicDirectoryPath = path.join(__dirname, '/public')
const viewPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.json())

var data

app.post('/', (req, res) => {
    data = req.body
})

app.get('/lora', (req, res) => {
    res.send(data)
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'LoRa',
        name: 'Aditya Keni'
    })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'Aditya Keni'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
      title: 'Help Page',
      helpText: 'Some helpful text',
      name: 'Aditya Keni'
  })
})


app.get('/help/*', (req, res) => {
  res.render('404', {
      title: 404,
      errorMessage: 'help article not found!',
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
    console.log(`Server running on port ${port}.`)
  })