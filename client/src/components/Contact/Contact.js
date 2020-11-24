import React, { useState, useRef } from 'react'
import axios from 'axios'

import Message from '../Message/Message'

import { validateEmail } from '../../utils/helpers'
import './Contact.css'

function Contact() {
	const [ formState, setFormState ] = useState({ name: '', email: '', message: '' })
	const { name, email, message } = formState

	const [ errorMessage, setErrorMessage ] = useState('')
  const [ formSubmitMessage, setFormSubmitMessage ] = useState(null)
  
  const formRef = useRef(null)

	function handleBlur(e) {
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
			setFormState({ ...formState, [e.target.name]: e.target.value })
		}
  }
  
  function resetForm() {
     Array.from(formRef.current.elements).forEach(el => el.value = '')
  }

	function handleSubmit(e) {
		e.preventDefault()
		const { name, email, message } = formState
		if (name !== '' && email !== '' && message !== '') {
			axios({
				method : 'POST',
				url    : 'http://localhost:3002/send',
				data   : formState
				// data:  {name: 'test', email: 'test@email.com', message: 'test'}
			}).then((response) => {
				if (response.data.status === 'success') {
          setFormSubmitMessage('success')
          resetForm()
				} else if (response.data.status === 'fail') {
          setFormSubmitMessage('fail')
          resetForm()
				}
			})
		} else {
      console.log('must fill out all form fields')
    }
	}

	return (
		<div id='contact' className='Contact container'>
			<h1>Just call my name, and I'll be there...</h1>
			<div className='Contact-wrapper'>
				<div className='Contact-details'>
					<h2>Reach out</h2>
					<p>9300 Castlewood Drive</p>
					<p>Austin, TX 78748</p>
					<br />
					<p>(512) 992-6167</p>
				</div>
				<form id='Contact-form' className='Contact-form' onSubmit={handleSubmit} ref={formRef}>
					<div>
						<label htmlFor='name'>Name:</label>
						<input type='text' name='name' defaultValue={name} onBlur={handleBlur} />
					</div>
					<div>
						<label htmlFor='email'>Email address:</label>
						<input type='email' name='email' defaultValue={email} onBlur={handleBlur} />
					</div>
					<div>
						<label htmlFor='message'>Message:</label>
						<textarea
							name='message'
              rows='5'
							defaultValue={message}
							onBlur={handleBlur}
						/>
					</div>
					{errorMessage && (
						<div>
							<p className='Contact-error-text'>{errorMessage}</p>
						</div>
					)}
          {formSubmitMessage === 'success' ? <Message>Thank you for reaching out, I will get back to you soon</Message> : formSubmitMessage === 'fail' ? <Message>Sorry, there was a problem with your submission, please try again later</Message> : null}
					<button data-testid='btntag' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

// <!-- CONTACT SECTION -->

// <footer id="contact" class="contact">
//   <span id="goto-contact"> &nbsp; </span>

//   <div class="contact-info">
//     <div class="contact-info-content">
//       <h2>Reach out</h2>
//       <ul>
//         <li>333-333-3333</li>
//         <li>
//           <ul class="social-links">
//             <li><a href="https://github.com/christopherConcannon" target="blank"><i class="fab fa-github-alt"></i></a></li>
//             <li><a href="https://www.linkedin.com/in/christopher-concannon-4a91841a6/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
//             <li><a href="#"><i class="fab fa-instagram" target="blank"></i></a></li>

//             <li><a href="mailto:xtophe@christopherconcannon.com"><img src="./assets/images/calavera.svg"/></a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div class="contact-form">
//       <h3>Contact Me</h3>
//       <form>
//         <label for="contact-name">Your Name</label>
//         <input type="text" id="contact-name"/>
//         <label for="contact-message">Message</label>
//         <textarea id="contact-message"  rows="10"></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   </div>
// </footer>

export default Contact
