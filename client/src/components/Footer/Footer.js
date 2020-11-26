import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

function Footer() {
	return (
		<footer id="footer" className="Footer">
			<div className="Footer-info">
				<div className="Footer-info-content">
					<ul className="Footer-social-links">
						<SocialLinks />
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
