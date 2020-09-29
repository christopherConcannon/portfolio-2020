import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
	return (
		<div className="Header">
      <Navigation />
			<section id="hero" className="hero">
				<h1>
					<h1
						className="txt-type"
						data-wait="2000"
						data-words="[&quot;christoPher&quot;, &quot;coNcannon&quot;, &quot;chrIstopher&quot;, &quot;concannOn&quot;, &quot;christopheR&quot;, &quot;conCannon&quot;, &quot;christOpher&quot;, &quot;concAnnon&quot;, &quot;cHristopher&quot;, &quot;concanNon&quot;]"
					/>
				</h1>
				<div className="shape box-blue" />
				<div className="shape crc-pink" />
				<div className="shape box-grey" />
				<div className="line line-1" />
				<div className="line line-2" />
				<div className="line line-3" />
				<div className="line line-4" />
				<div className="line line-5" />
			</section>
		</div>
	);
}

export default Header;
