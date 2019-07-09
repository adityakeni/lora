const mongoose = require('mongoose')
const validator = require('validator')

const Data = mongoose.model('Data', {
    applicationID: {
        type: Number
    },
    applicationName: {
        type: String
    },
    deviceName: {
        type: String
    },
    devEUI: {
        type: Number
    },
    rxInfo: {
        type: Object
    },
    txInfo: {
        type: Object
    },
    adr: {
        type: Boolean
    },
    fCnt: {
        type: Number
    },
    fPort: {
        type: Number
    },
    data: {
        type: String
    },
    object: {
        type: Object
    }
})

module.exports = Data