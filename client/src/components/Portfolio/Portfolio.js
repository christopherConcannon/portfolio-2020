import React, { useState } from 'react';
import Project from '../Project/Project';
import { projects } from '../../data'
import './Portfolio.css';

function Portfolio() {
	return (
		<section id="look-see" className="Portfolio">
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
