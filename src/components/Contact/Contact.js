import React from 'react';
import './Contact.css'

function Contact() {
	return (
		<div className="Contact">
			<h3>Contact Me</h3>
			<form>
				<label htmlFor="Contact-name">Your Name</label>
				<input type="text" id="Contact-name" />
				<label htmlFor="Contact-message">Message</label>
				<textarea id="Contact-message" rows="10" />

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
