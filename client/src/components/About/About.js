import React from 'react'
import portrait from '../../assets/images/web-sized-portrait.jpg'
import './About.css'

function About() {
	return (
		<section className='About' id='abt-me'>
			<div className='About-header-wrapper'>
				<div className='About-title'>
					<h2>About Me</h2>
				</div>
				<img src={portrait} alt='portrait' className='About-portrait' />
			</div>
			<div className='About-content'>
				{/* <p>
					A native Austinite. The outline of my life's chronology can be
					expressed in terms of my passions...
					<br />The Beautiful Game.
					<br />Scholarship and voracious learning.
					<br />Language.
					<br />Rock and Roll and everything in between.
					<br />l'Art culinaire.
					<br />Some others ! germaine.
					<br />& design-developing websites and applications.
				</p> */}
				<p>
					Full-stack Web Developer and Executive Chef skilled in orchestrating macro- and
					micro-processes over variable timeframes. As a chef, I have a demonstrated
					history of designing and implementing systems which allow teams to increase
					their efficiency in pressure-filled, customer-facing domains, enabling
					creativity to flourish. After having independently practiced web-development for
					4 years, I recently completed a Full-stack Web Developer program through the
					University of Texas at Austin which has fuelled my passion, broadened my skills
					in HTML5, CSS3, JavaScript, and the MERN stack, and ingrained collaborative,
					industry-driven workflows. My background in literature and languages provides me
					with skills and research habits well-suited to interface with technology through
					language constructs such as vocabulary, syntax, and semantics. I combine
					Node-powered data-driven back-end solutions with modern React tools on the
					front-end to deliver effective, visually attractive products. I look forward to
					finding my role in a team focused on providing superior web experiences.
				</p>
			</div>
		</section>
	)
}

export default About
