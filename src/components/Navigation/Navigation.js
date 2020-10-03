import React, {useState, useEffect} from 'react';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage }) {
	// const links = ['About', 'Portfolio', 'Resume', 'Contact']
  const links = [ 'abt-me', 'look/see', 'contact', 'cv' ];

  const [ checked, setChecked ] = useState(false);
  const checkbox = document.querySelector('.Navigation-toggler')

  useEffect(() => {
    if (checkbox) {
      checkbox.checked = checked
    }
  })


	return (
		<div className="Navigation">
			<nav className="Navigation-navbar">
				<div className="Navigation-logo">
					<h2>
						<a onClick={() => setCurrentPage('abt-me')} href="#root">
							cc
						</a>
					</h2>
				</div>
				<ul className="Navigation-nav-items">
					{links.map((link) => (
						<li className="Navigation-nav-item" key={link}>
							<a
								href="#root"
								// href="#Header"
								// href={currentPage === 'abt-me' ? "#Header" : "#HeaderInner"}
								onClick={() => setCurrentPage(link)}
								className={
									currentPage === link ? (
										'Navigation-link Navigation-active-link'
									) : (
										'Navigation-link'
									)
								}
							>
								{link}
							</a>
						</li>
					))}
				</ul>

				<div className="Navigation-overlay-wrap">
					<input onClick={() => setChecked(!checked)}type="checkbox" className="Navigation-toggler" />
					<div className="Navigation-hamburger">
						<div />
					</div>
					<div className="Navigation-mobile-menu">
						<div>
							<div>
								<ul id="mobile-nav-links">
									{links.map((link) => (
										<li onClick={() => setChecked(false)} className="Navigation-nav-item" key={link}>
											<a
												href="{'#' + link.toLowerCase()}"
												onClick={() => setCurrentPage(link)}
												className={
													currentPage === link ? (
														'Navigation-link Navigation-active-link'
													) : (
														'Navigation-link'
													)
												}
											>
												{link}
											</a>
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
