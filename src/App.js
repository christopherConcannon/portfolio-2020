import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeaderInner from './components/HeaderInner/HeaderInner';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import { library } from './fontawesome';

function App() {
	const [ currentPage, setCurrentPage ] = useState('abt-me');

	//  FOR REFERENCE  const links = ['abt-me', 'look/see', 'contact', 'cv', ]
	const renderPage = () => {
		switch (currentPage) {
			case 'look/see':
				return <Portfolio />;
			case 'cv':
				return <Resume />;
			case 'contact':
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div className="App">
			{currentPage === 'abt-me' ? (
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			) : (
				<HeaderInner currentPage={currentPage} setCurrentPage={setCurrentPage} />
			)}
			{renderPage()}
			<Footer />
		</div>
	);
}

export default App;
