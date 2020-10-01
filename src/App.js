import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import { library } from './fontawesome';

function App() {
	const [ currentPage, setCurrentPage ] = useState('About');

	const renderPage = () => {
		switch (currentPage) {
			case 'Portfolio':
				return <Portfolio />;
			case 'Resume':
				return <Resume />;
			case 'Contact':
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div className="App">
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{renderPage()}
			<Footer />
		</div>
	);
}

export default App;
