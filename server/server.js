const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3001;



const transport = {
	// host: 'smtp.mail.yahoo.com', // Don’t forget to replace with the SMTP host of your provider
	host : 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
	port : 587,
	auth : {
		// user: creds.USER,
		// pass: creds.PASS
		user : process.env.USER,
		pass : process.env.PASS
	}
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
	if (error) {
		console.log(error)
	} else {
		console.log('Server is ready to take messages')
	}
})

router.post('/send', (req, res, next) => {
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	const content = `name: ${name} \n email: ${email} \n message: ${message} `

	const mail = {
		from    : name,
		// to: 'xocon10@gmail.com',  // Change to email address that you want to receive messages on
		to      : process.env.USER, // Change to email address that you want to receive messages on
		subject : 'New Message from Contact Form',
		text    : content
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			console.log('error:', err)
			res.json({
				status : 'fail'
			})
		} else {
			res.json({
				status : 'success'
			})
		}
		transporter.sendMail(
			{
				// from: "xocon10@gmail.com",
				from    : process.env.USER,
				to      : email,
				subject : 'Submission was successful',
				text    : `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
			},
			function(error, info) {
				if (error) {
					console.log(error)
				} else {
					console.log('Message sent: ' + info.response)
				}
			}
		)
	})
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
