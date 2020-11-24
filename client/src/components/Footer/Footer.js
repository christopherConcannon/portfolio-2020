import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import calavera from '../../assets/images/calavera.svg';
import './Footer.css';

function Footer() {
	return (
		<footer id="footer" className="Footer">
			<div className="Footer-info">
				<div className="Footer-info-content">
					<ul className="Footer-social-links">
						<SocialLinks />
						<li>
							<a href="mailto:xtophe@christopherconcannon.com">
								<img src={calavera} alt="Traditional calavera" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
