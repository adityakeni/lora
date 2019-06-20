const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const port = process.env.PORT || 3000

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

app.get('/', (request, response) => {
    response.json(data.txInfo.data)
}) 



app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
  })

  