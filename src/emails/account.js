const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey)

const sendEmail = (email, name, data) => {
    sgMail.send({
        to: email,
        from: 'aditya3250@gmail.com',
        subject: 'Sace remaining in the dustbin!',
        text: `Hi ${name}! The space remaining in the dustbin is ${data}.`
    })
}

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditya3250@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendEmail,
    sendWelcomeEmail
}