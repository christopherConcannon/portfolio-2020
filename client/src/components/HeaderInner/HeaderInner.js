import React from 'react';
// import Typewriter from 'typewriter-effect';
import Navigation from '../Navigation/Navigation';
import './HeaderInner.css';

function HeaderInner({ currentPage, setCurrentPage }) {
	return (
		<header className="HeaderInner" id="HeaderInner">
			<Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<section id="hero" className="HeaderInner-hero">
				<div className="HeaderInner-shape box-blue" />
				<div className="HeaderInner-shape crc-pink" />
				<div className="HeaderInner-shape box-grey" />
				<div className="HeaderInner-line line-1" />
				<div className="HeaderInner-line line-2" />
				<div className="HeaderInner-line line-3" />
				<div className="HeaderInner-line line-4" />
				<div className="HeaderInner-line line-5" />
			</section>
		</header>
	);
}

export default HeaderInner;
