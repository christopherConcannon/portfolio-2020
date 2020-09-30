import React from 'react';

function Contact() {
	return (
		<div className="contact-form">
			<h3>Contact Me</h3>
			<form>
				<label htmlFor="contact-name">Your Name</label>
				<input type="text" id="contact-name" />
				<label htmlFor="contact-message">Message</label>
				<textarea id="contact-message" rows="10" />

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
