import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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


	return (
		<div className="App">
			{currentPage === 'abt-me' ? (
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			) : (
				<HeaderInner currentPage={currentPage} setCurrentPage={setCurrentPage} />
			)}
        <>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/abt-me' component={About} />
            <Route exact path='/look-see' component={Portfolio} />
            <Route exact path='/cv' component={Resume} />
            <Route exact path='/contact' component={Contact} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
			<Footer />
		</div>
	);
}

export default App;


