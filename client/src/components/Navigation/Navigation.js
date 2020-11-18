import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ setCurrentPage }) {
	const links = [ 'abt-me', 'look-see', 'contact', 'cv' ];
	const activeStyle = {
    backgroundRepeat: 'repeat-x',
    backgroundImage: 'linear-gradient(to right, currentColor 100%, currentColor 0)',
    backgroundSize: '1px 1px',
    backgroundPosition: '0 calc(100% - 0.8em)' 
	};

	const [ checked, setChecked ] = useState(false);
	const checkbox = document.querySelector('.Navigation-toggler');

	useEffect(() => {
		if (checkbox) {
			checkbox.checked = checked;
		}
  });
  
  function handleMobileClick(link) {
    setCurrentPage(link)
    setChecked(false)
  }

	return (
		<div className="Navigation">
			<nav className="Navigation-navbar">
				<div className="Navigation-logo">
					<h2>
            <Link exact="true" to='/' onClick={() => setCurrentPage('abt-me')}>
							cc
						</Link>
					</h2>
				</div>
				<ul className="Navigation-nav-items">
					{links.map((link) => (
						<li className="Navigation-nav-item" key={link}>
							<NavLink
								exact
								to={`/${link}`}
								activeStyle={activeStyle}
								onClick={() => setCurrentPage(link)}
							>
								{link}
							</NavLink>
						</li>
					))}
				</ul>

				<div className="Navigation-overlay-wrap">
					<input
						onClick={() => setChecked(!checked)}
						// depends on previous state so use callback syntax
						// onClick={() => setChecked(prev => !prev)}
						type="checkbox"
						className="Navigation-toggler"
					/>
					<div className="Navigation-hamburger">
						<div />
					</div>
					<div className="Navigation-mobile-menu">
						<div>
							<div>
								<ul id="mobile-nav-links">
									{links.map((link) => (
										<li className="Navigation-nav-item" key={link}>
											<NavLink
												exact
												to={`/${link}`}
												activeStyle={activeStyle}
												onClick={() => handleMobileClick(link)}
											>
												{link}
											</NavLink>
										</li>
									))}
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
