import React from 'react';
import Proficiency from '../Proficiency/Proficiency';

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
		<div className="Resume" id="cv">
			<h2>
				Download my CV{' '}
				<a
					href="https://drive.google.com/file/d/1ZDTWGtWtq6Idg8-0AN4VQJD7ydhA1W63/view?usp=sharing"
					target="_blank"
				>
					here
				</a>
			</h2>
			<h3>Front-end Proficiencies</h3>
			<ul>{frontEndProfs.map((prof) => <Proficiency key={prof} prof={prof} />)}</ul>
			<h3>Front-end Proficiencies</h3>
			<ul>{backEndProfs.map((prof) => <Proficiency key={prof} prof={prof} />)}</ul>
		</div>
	);
}

export default Resume;
