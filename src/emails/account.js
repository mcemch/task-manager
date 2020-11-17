const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michael.christopher.emch@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michael.christopher.emch@gmail.com',
        subject: 'Sorry to see you go',
        text: `Thank you ${name} for using the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

