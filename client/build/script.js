// NAVIGATION COLOR FADE ON SCROLL...MAYBE ADD TO USEEFFECT HOOK IN NAV COMPONENT TO SIMULATE COMPONENT DID MOUNT
window.addEventListener('scroll', () => {
	if (window.scrollY > 44) {
		document.querySelector('.Navigation-navbar').classList.add('faded-header');
	} else {
		document.querySelector('.Navigation-navbar').classList.remove('faded-header');
	}
});
