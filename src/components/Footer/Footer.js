import React from 'react'

function Footer() {
  return (
    <footer id="contact" class="contact">
    <span id="goto-contact"> &nbsp; </span>

    <div class="contact-info">
      <div class="contact-info-content">
        <h2>Reach out</h2>
        <ul>
          <li>333-333-3333</li>
          <li>
            <ul class="social-links">
              <li><a href="https://github.com/christopherConcannon" target="blank" rel="noopener noreferrer"><i class="fab fa-github-alt"></i></a></li>
              <li><a href="https://www.linkedin.com/in/christopher-concannon-4a91841a6/" target="blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram" target="blank" rel="noopener noreferrer"></i></a></li>
              
              <li><a href="mailto:xtophe@christopherconcannon.com"><img src="./assets/images/calavera.svg"/></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
