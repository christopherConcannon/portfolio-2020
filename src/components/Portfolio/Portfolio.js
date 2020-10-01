import React, { useState } from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

function Portfolio() {
	const [ projects ] = useState([
		{
			title   : 'Instartist',
			imgName : 'instartist.jpg',
			projURL : 'https://instartist.herokuapp.com/',
			repoURL : 'https://github.com/christopherConcannon/instartist',
			techs   : 'Express.js, Handlebars, Sequelize'
		},
		{
			title   : 'Call It A Night',
			imgName : 'call-it-a-night-screenshot.jpg',
			projURL : 'https://christopherconcannon.github.io/call-it-a-night/',
			repoURL : 'https://github.com/christopherConcannon/call-it-a-night',
			techs   : 'Javascript, AJAX'
		},
		{
			title   : 'Team Profile Generator',
			imgName : 'team-profile-generator.jpg',
			projURL :
				'https://drive.google.com/file/d/13Fr2NtNjTjwbumeZLdQ5HMzYugiWGzvE/view',
			repoURL : 'https://github.com/christopherConcannon/team-profile-generator',
			techs   : 'Node.js'
		},
		{
			title   : 'Employee Database',
			imgName : 'employee-database.jpg',
			projURL :
				'https://drive.google.com/file/d/1IP-UqG3k2mjywhdTtKAODVVYG2ul6H9X/view',
			repoURL : 'https://github.com/christopherConcannon/employee-database',
			techs   : 'Node.js, MySQL'
		},
		{
			title   : 'Dev Connector',
			imgName : 'dev-connector.jpg',
			projURL : 'https://rocky-sierra-41169.herokuapp.com/',
			repoURL : 'https://github.com/christopherConcannon/devConnector',
			techs   : 'MERN Stack'
		},
		{
			title   : 'Yelp Camp',
			imgName : 'yelp-camp.jpg',
			projURL : 'https://whispering-shelf-69508.herokuapp.com/',
			repoURL : 'https://github.com/christopherConcannon/yelp-camp',
			techs   : 'Node.js, Express, EJS'
		}
	]);

	return (
		<section id="look/see" className="Portfolio">
			<div className="container">
				<h2 className="Portfolio-heading" id="Portfolio-heading">
					look/see
				</h2>
				<div className="Portfolio-grid">
					{projects.map((proj) => <Project {...proj} key={proj.title} />)}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
