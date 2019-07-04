console.log('Client side javascript')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

fetch('/lora').then((response) => {
    messageOne.textContent = 'JSON Data'
    messageThree.textContent = 'Hex Data'
    response.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = 'Data is not accessible!'
        } else {
            messageTwo.textContent = JSON.stringify(data)
            const rawData = data.data
            const buffer = Buffer.from(rawData, 'base64')
            const bufString = buffer.toString('hex')
            messageFour.textContent = bufString
        }
    })
})