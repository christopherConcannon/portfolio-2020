import React from 'react'
import './About.css'

function About() {
  return (
    <section className="About" id="about">        
        <div className="abt-title">
          <h2>
            About Me
          </h2>
        </div>
        <div className="abt-content">
        <img src={require(`../../assets/images/web-sized-portrait.jpg`)} alt="portrait" className="About-portrait" />
          <p>
            A native Austinite.  The outline of my life's chronology can be expressed in terms of my passions...
            <br/>The Beautiful Game. 
            <br/>Scholarship and voracious learning. 
            <br/>Language. 
            <br/>Rock and Roll and everything in between. 
            <br/>l'Art culinaire. 
            <br/>Some others ! germaine. 
            <br/>& design-developing websites and applications.
          </p>
        </div>
    </section>
  )
}

export default About
