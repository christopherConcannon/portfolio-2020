import React from 'react';

function Portfolio() {
	return (
		<div className="Portfolio">
			<section id="work" className="work">
				<div className="container">
					<h2 className="work-heading" id="work-heading">
						look/see
					</h2>
					<div className="grid">
						<div className="grid-item hover-skew">
							<a href="https://instartist.herokuapp.com/" target="blank">
								<img
									src="./assets/images/resized_project_images/instartist.jpg"
									className="rsp-image"
									alt="Screenshot of Instartist web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Instartist</h3>
								<a
									href="https://github.com/christopherConcannon/instartist"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>Express.js, Handlebars, Sequelize</span>
							</div>
						</div>

						<div className="grid-item hover-skew">
							<a
								href="https://github.com/christopherConcannon/call-it-a-night"
								target="blank"
							>
								<img
									src="./assets/images/resized_project_images/call-it-a-night-screenshot.jpg"
									className="rsp-image"
									alt="Screenshot of Call It A Night web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Call It A Night</h3>
								<a
									href="https://christopherconcannon.github.io/call-it-a-night/"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>Javascript, AJAX</span>
							</div>
						</div>

						<div className="grid-item hover-skew">
							<a
								href="https://drive.google.com/file/d/13Fr2NtNjTjwbumeZLdQ5HMzYugiWGzvE/view"
								target="blank"
							>
								<img
									src="./assets/images/resized_project_images/team-profile-generator.jpg"
									className="rsp-image"
									alt="Screenshot of Team Profile Generator web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Team Profile Generator</h3>
								<a
									href="https://github.com/christopherConcannon/team-profile-generator"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>Node.js</span>
							</div>
						</div>

						<div className="grid-item hover-skew">
							<a
								href="https://drive.google.com/file/d/1IP-UqG3k2mjywhdTtKAODVVYG2ul6H9X/view"
								target="blank"
							>
								<img
									src="./assets/images/resized_project_images/employee-database.jpg"
									className="rsp-image"
									alt="Screenshot of Employee Database web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Employee Database</h3>
								<a
									href="https://github.com/christopherConcannon/employee-database"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>Node.js, MySQL</span>
							</div>
						</div>

						<div className="grid-item hover-skew">
							<a
								href="https://rocky-sierra-41169.herokuapp.com/"
								target="blank"
							>
								<img
									src="./assets/images/resized_project_images/dev-connector.jpg"
									className="rsp-image"
									alt="Screenshot of Dev Connector web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Dev Connector</h3>
								<a
									href="https://github.com/christopherConcannon/devConnector"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>MERN Stack</span>
							</div>
						</div>

						<div className="grid-item hover-skew">
							<a
								href="https://whispering-shelf-69508.herokuapp.com/"
								target="blank"
							>
								<img
									src="./assets/images/resized_project_images/yelp-camp.jpg"
									className="rsp-image"
									alt="Screenshot of Yelp Camp web application"
								/>
							</a>
							<div className="project-meta">
								<h3>Yelp Camp</h3>
								<a
									href="https://github.com/christopherConcannon/yelp-camp"
									target="blank"
								>
									<i className="fab fa-github-alt" />
								</a>
								<span>Node.js Express</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Portfolio;
