const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

//Define paths for express configuration
// const publicDirectoryPath = path.join(__dirname, '/public')
// const viewPath = path.join(__dirname, '/templates/views')
// const partialsPath = path.join(__dirname, '/templates/partials')

// //Setup for static directory to serve
// app.use(express.static(publicDirectoryPath))

// //setup handlebar engine and views location
// app.set('view engine', 'hbs')
// app.set('views', viewPath)
// hbs.registerPartials(partialsPath)


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

var data

app.post('/', (request, response) => {
    data = request.body
    console.log(request.body)
    
})

function base64ToHex(str) {
  for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
      let tmp = bin.charCodeAt(i).toString(16);
      if (tmp.length === 1) tmp = "0" + tmp;
      hex[hex.length] = tmp;
  }
  return hex.join(" ");
}
let d = base64ToHex( data.data );

app.get('/', (req, res) => {
    res.json(data)
    res.send(d.toUpperCase())
}) 




app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
  })