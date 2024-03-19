"use strict"

// Многоуровневое меню
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
}

// Меню бургер
const iconMenu = document.querySelector('.icon-menu');
const navLink = document.querySelectorAll('.menu__link');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});

	navLink.forEach(link => {
		link.addEventListener('click', function () {
			// Закрываем мобильное меню
			document.body.classList.remove('_lock');
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		});
	});
};
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};

window.addEventListener('scroll', scrollUp);
document.getElementById('scroll-up').addEventListener('click', function (event) {
	event.preventDefault(); // отменяем стандартное поведение при клике на ссылку
	scrollToTop();
});
/*=============== SCROLL SECTIONS===============*/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 110,
			sectionId = current.getAttribute('id'),
			sectionClass = document.querySelector('.menu__body a[data-goto*=' + sectionId + ']');
		if (sectionClass) {
			if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
				sectionClass.classList.add('active-link');
			} else {
				sectionClass.classList.remove('active-link');
			}
		}
	});
};

window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2500,
	delay: 300,
})

sr.reveal('.home__image, .new__header, .body-care__image, .contact__content, .footer')
sr.reveal('.home__content, .body-care__content, .contact__image', {delay: 500})
sr.reveal('.new__card', {delay: 500, interval: 100})
sr.reveal('.shop__card', {interval: 100})