import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import calavera from '../../assets/images/calavera.svg';
import './Footer.css';

function Footer() {
	return (
		<footer id="footer" className="Footer">
			{/* <span id="goto-Footer"> &nbsp; </span> */}

			<div className="Footer-info">
				<div className="Footer-info-content">
					<h2>Reach out</h2>
					<ul>
						<li>333-333-3333</li>
						<li>
							<ul className="Footer-social-links">
								<li>
									<a
										href="https://github.com/christopherConcannon"
										target="blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={[ 'fab', 'github-alt' ]} />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/christopher-concannon-4a91841a6/"
										target="blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon
											icon={[ 'fab', 'linkedin-in' ]}
										/>
									</a>
								</li>
								<li>
									<a href="#" target="blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
									</a>
								</li>

								<li>
									<a href="mailto:xtophe@christopherconcannon.com">
										<img src={calavera} />
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
