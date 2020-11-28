import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Project.css'

function Project({ title, imgName, projURL, repoURL, description, techs }) {
	return (
		// <div className='Project hover-skew'>
		<div className='Project'>
			<div className='Project-img-container'>
				<a href={projURL} target='blank'>
					<img
						src={require(`../../assets/images/${imgName}`)}
						className='Project-img rsp-image'
						alt={`Screenshot of ${title} web application`}
					/>
				</a>
				<div class='Project-img-overlay'>
					<div class='Project-desc'>
						<p>{description}</p>
            <a href={projURL} target='blank'>go</a>
					</div>
				</div>
			</div>
			<div className='Project-meta'>
				<h3>{title}</h3>
				<a href={repoURL} target='blank'>
					<FontAwesomeIcon icon={[ 'fab', 'github-alt' ]} />
				</a>
				<span>{techs}</span>
			</div>
		</div>
	)
}

export default Project
