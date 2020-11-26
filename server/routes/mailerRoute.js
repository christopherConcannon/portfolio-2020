const express = require('express')
const router = express.Router()
const transporter = require('../utils/mailerConfig')

router.post('/send', (req, res, next) => {
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	const content = `name: ${name} \n email: ${email} \n message: ${message} `

	const mail = {
		from    : name,
		// to: 'xocon10@gmail.com',
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

module.exports = router
