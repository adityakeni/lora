console.log('Client side JavaScript')

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');

// function base64toHEX(base64) {
//     var raw = atob(base64);
//     var HEX = '';
//     for ( i = 0; i < raw.length; i++ ) {
//         var _hex = raw.charCodeAt(i).toString(16)
//         HEX += (_hex.length==2?_hex:'0'+_hex);
//     }
//     return HEX.toUpperCase();
// }

(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
    
    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
    
    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
    
    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    
    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };
    
    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };
    
    this.ConvertBase = ConvertBase;
    
})(this);

fetch('/lora').then((response) => {
    messageOne.textContent = 'JSON Data'
    messageThree.textContent = 'Space remaining in the Dustbin'
    response.json().then((data) => {
        messageTwo.textContent = JSON.stringify(data)
        d = data[0].payload.data
        messageFour.textContent = ConvertBase.hex2dec(d)
        // try {
        //     const d1 = d + '='
        //     messageFour.textContent = base64toHEX(d1)
            
        //     console.log(ConvertBase.bin2dec(ConvertBase.hex2bin(d1)))
        // } catch (e) {
        //     messageFour.textContent = base64toHEX(d)
        // }
    })
    
}).catch((error) => {
    messageTwo.textContent = 'Data is not accessible!'
})
