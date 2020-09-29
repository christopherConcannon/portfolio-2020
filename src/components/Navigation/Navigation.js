import React from 'react';

function Navigation() {
	return (
		<div className="Navigation">
			<nav id="navbar">
				<div className="logo">
					<h2>
						<a href="#home">cc</a>
					</h2>
				</div>
				<ul className="nav-items">
					<li>
						<a href="#about">abt-me</a>
					</li>
					<li>
						<a href="#work-heading">look/see</a>
					</li>
					<li>
						<a href="#goto-contact">contact</a>
					</li>
					<li>
						<a
							href="https://drive.google.com/file/d/1ZDTWGtWtq6Idg8-0AN4VQJD7ydhA1W63/view?usp=sharing"
							target="_blank"
						>
							cv
						</a>
					</li>
				</ul>

				<div className="overlay-wrap">
					<input type="checkbox" className="toggler" />
					<div className="hamburger">
						<div />
					</div>
					<div className="menu">
						<div>
							<div>
								<ul id="mobile-nav-links">
									<li>
										<a href="#about">about me</a>
									</li>
									<li>
										<a href="#work">look/see</a>
									</li>
									<li>
										<a href="#contact">contact</a>
									</li>
									<li>
										<a
											href="https://drive.google.com/file/d/1ZDTWGtWtq6Idg8-0AN4VQJD7ydhA1W63/view?usp=sharing"
											target="_blank"
										>
											cv
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
