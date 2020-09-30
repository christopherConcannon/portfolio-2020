import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header() {
	return (
		<header className="Header">
      <Navigation />
			<section id="hero" className="Header-hero">
				<h1>
          Christopher Concannon
					{/* <span
						className="txt-type"
						data-wait="2000"
						data-words="[&quot;christoPher&quot;, &quot;coNcannon&quot;, &quot;chrIstopher&quot;, &quot;concannOn&quot;, &quot;christopheR&quot;, &quot;conCannon&quot;, &quot;christOpher&quot;, &quot;concAnnon&quot;, &quot;cHristopher&quot;, &quot;concanNon&quot;]"
					>
          </span> */}
				</h1>
				<div className="Header-shape box-blue" />
				<div className="Header-shape crc-pink" />
				<div className="Header-shape box-grey" />
				<div className="Header-line line-1" />
				<div className="Header-line line-2" />
				<div className="Header-line line-3" />
				<div className="Header-line line-4" />
				<div className="Header-line line-5" />
			</section>
		</header>
	);
}

export default Header;
