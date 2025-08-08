const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/SushkovPro/kontakt', async (req, res) => {
    const { name, email, text } = req.body

    console.log(name, email, text)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'spamim123452@gmail.com',
            pass: 'etcs hpjs uxjw gbqd'
        }
    })
    const mailOptions = {
        from: email,
        to: 'spamim123452@gmail.com',
        subject: `You have a new message from ${name}`,
        text: text
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).send({ message: 'Send' })
    } catch (err) {
        res.status(500).json({ error: 'Coś poszło nie tak', details: err.message })
    }
})

app.listen(5000, () => console.log('serwer run on port 5000'))