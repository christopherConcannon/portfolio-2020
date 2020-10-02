// NAVIGATION COLOR FADE ON SCROLL
window.addEventListener('scroll', () => {
  if (window.scrollY > 44) {
    document.querySelector('.Navigation-navbar').classList.add('faded-header')
  } else {
    document.querySelector('.Navigation-navbar').classList.remove('faded-header')
  }
})

// MOBILE MENU 
const mobileNavLinks = document.querySelector('#mobile-nav-links');
const checkbox = document.querySelector('.Navigation-toggler');

function resetMobileNavState() {
     checkbox.checked = false;
}



mobileNavLinks.addEventListener('click', resetMobileNavState);



