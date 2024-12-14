
const nodeMailer = require('nodemailer')

const adminEmail = 'minhduc1103@gmail.com' // Email

const adminPassword = 'minhduc1103' // Password

const mailHost = 'smtp.gmail.com'

const mailPort = 587

const sendMail = (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
            user: adminEmail,
            pass: adminPassword
        }
    })

    const options = {
        from: adminEmail, 
        to: to, 
        subject: subject, 
        html: htmlContent
    }
    
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    return transporter.sendMail(options)
    
}

module.exports = {
    sendMail: sendMail
}
