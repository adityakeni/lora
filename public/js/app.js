console.log('Client side JavaScript')

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');

fetch('/lora').then((response) => {
    messageOne.textContent = 'JSON Data'
    messageThree.textContent = 'Space remaining in the Dustbin (%)'
    response.json().then((data) => {
        messageTwo.textContent = JSON.stringify(data)
        const hex = data.object.dataHex
        const dec = parseInt(hex,16)
        messageFour.textContent = dec
    })
    
}).catch((error) => {
    messageTwo.textContent = 'Data is not accessible!'
})
