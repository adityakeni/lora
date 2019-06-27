console.log('Client side javascript')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


fetch('/lora').then((response) => {
    messageOne.textContent = 'JSON Data'
    response.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = data.error
        } else {
            messageTwo.textContent = JSON.stringify(data)
        }
    })
})