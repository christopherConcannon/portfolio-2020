import React from 'react';
import Header from './components/Header/Header'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import { library } from './fontawesome'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
