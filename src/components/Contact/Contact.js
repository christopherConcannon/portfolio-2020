import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers'
import './Contact.css';

function Contact() {
  const [ formState, setFormState ] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState

  const [ errorMessage, setErrorMessage ] = useState('')

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      // console.log(isValid)
      if (!isValid) {
        setErrorMessage('Your email is invalid')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`)
      } else {
        setErrorMessage('')
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }


	return (
		<div id="contact" className="Contact">
			<h3>Contact Me</h3>
			{/* <form>
				<label htmlFor="Contact-name">Your Name</label>
				<input type="text" id="Contact-name" />
				<label htmlFor="Contact-message">Message</label>
				<textarea id="Contact-message" rows="10" />

				<button type="submit">Submit</button>
			</form> */}
			<form id="Contact-form" className="Contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="Contact-error-text">{errorMessage}</p>
					</div>
				)}
				<button data-testid="btntag" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
