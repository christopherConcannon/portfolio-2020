import React from 'react';
import Proficiency from '../Proficiency/Proficiency';
import './Resume.css';

function Resume() {
	const frontEndProfs = [
		'HTML 5',
		'CSS 3',
		'Javascript',
		'React',
		'SASS',
		'Bootstrap',
		'Materialize',
		'jQuery',
		'Responsive design',
		'APIs',
		'AJAX'
	];

	const backEndProfs = [
		'NODE.js',
		'Express.js',
		'MySQL',
		'Sequelize ORM',
		'MongoDB',
		'Mongoose',
		'PHP'
	];

	return (
		<div className="Resume container" id="cv">
			<h2>
				Download my CV{' '}
				<a
          // href="https://drive.google.com/file/d/1ZDTWGtWtq6Idg8-0AN4VQJD7ydhA1W63/view?usp=sharing"
          href={(require('../../assets/images/Christopher_Concannon_CV.pdf'))}
					target="_blank"
          rel="noopener noreferrer"
          download="Christopher_Concannon_CV"
				>
					here
				</a>
			</h2>
			<div className="Resume-proficiency-container">
				<div className="Resume-front-end">
					<h3>Front-end Proficiencies</h3>
					<ul>
						{frontEndProfs.map((prof) => (
							<Proficiency key={prof} prof={prof} />
						))}
					</ul>
				</div>
				<div className="Resume-back-end">
					<h3>Back-end Proficiencies</h3>
					<ul>
						{backEndProfs.map((prof) => (
							<Proficiency key={prof} prof={prof} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Resume;
