import React from 'react';
import portrait from '../../assets/images/web-sized-portrait.jpg';
import './About.css';

function About() {
	return (
		<section className="About" id="abt-me">
			<div className="About-header-wrapper">
				<div className="About-title">
					<h2>About Me</h2>
				</div>
				<img src={portrait} alt="portrait" className="About-portrait" />
			</div>
			<div className="About-content">
				<p>
					A native Austinite. The outline of my life's chronology can be
					expressed in terms of my passions...
					<br />The Beautiful Game.
					<br />Scholarship and voracious learning.
					<br />Language.
					<br />Rock and Roll and everything in between.
					<br />l'Art culinaire.
					<br />Some others ! germaine.
					<br />& design-developing websites and applications.
				</p>
			</div>
		</section>
	);
}

export default About;
