import React from 'react';
import Typewriter from 'typewriter-effect';
import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header({currentPage, setCurrentPage}) {
	return (
		<header className="Header">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<section id="hero" className="Header-hero">
				<h1>
          <Typewriter options={{
            strings: ["christoPher", "coNcannon", "chrIstopher", "concannOn", "christopheR", "conCannon", "christOpher", "concAnnon", "cHristopher", "concanNon"],
            autoStart: true, 
            loop: true,
            delay: 300
          }} />
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
