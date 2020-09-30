import React from 'react';
import './Project.css'

function Project({ title, imgName, projURL, repoURL, techs }) {
	return (
			<div className="Project hover-skew">
				<a href={projURL} target="blank">
					<img
						src={require(`../../assets/images/${imgName}`)}
						className="rsp-image"
						alt={`Screenshot of ${title} web application`}
					/>
				</a>
				<div className="Project-meta">
					<h3>{title}</h3>
					<a
						href={repoURL}
						target="blank"
					>
						<i className="fab fa-github-alt" />
					</a>
					<span>{techs}</span>
				</div>
			</div>
	);
}

export default Project;
