const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

if (
	!window.location.href.includes('index.html') &&
	window.location.href.slice(-1) != '/'
) {
	header.classList.add('static');

	logo.setAttribute('href', 'index.html');
}
let controller = new ScrollMagic.Controller();
let firstTrigger;

// animation first-page

const info = document.querySelector('.firstpage__info');
const imgNike = document.querySelector('.firstpage__img');
const nav = document.querySelector('.header__top');

const firstTl = gsap.timeline({
	defaults: { duration: 0.8, ease: Power2.inOut },
});

firstTl.from(info, { opacity: 0, x: -40 });
firstTl.from(imgNike, { opacity: 0, x: -20 }, '-=0.3');

if (window.pageYOffset == 0) {
	firstTl.from(nav, { opacity: 0, y: -40 }, '-=0.8');
}

// animation cards

const cards = document.querySelectorAll('.card-animation');

cards.forEach(card => {
	const chips = card.querySelectorAll('.chips__column');
	const advantages = card.querySelectorAll('.advantage__column');
	const blogs = card.querySelectorAll('.blog__column');

	const secondTl = gsap.timeline({
		defaults: { duration: 0.7, ease: Power2.inOut },
	});

	secondTl.from(chips, { opacity: 0, y: 40, stagger: 0.2 });
	secondTl.from(advantages, { opacity: 0, y: 40, stagger: 0.2 }, '-=0.7');
	secondTl.from(blogs, { opacity: 0, y: 40, stagger: 0.2 }, '-=1.4');

	firstTrigger = new ScrollMagic.Scene({
		triggerElement: card,
		triggerHook: 0.5,
		reverse: false,
	})
		.setTween(secondTl)
		.addTo(controller);
});

// gallery animation

const galleryContent = document.querySelectorAll('.gallery__inner');
const galleries = document.querySelectorAll('.gallery__item');

const thirdTl = gsap.timeline({
	defaults: { duration: 0.5, ease: Power2.inOut },
});
const secondController = new ScrollMagic.Controller();
let secondTrigger;

galleries.forEach((gallery, index, galleries) => {
	if (index == 0) {
		thirdTl.from(gallery, { x: -50, opacity: 0 });
	}
	if (index == 1) {
		thirdTl.from(gallery, { y: -50, opacity: 0 });
	}
	if (index == 2) {
		thirdTl.from(gallery, { y: 50, opacity: 0 });
	}
	if (index == 3) {
		thirdTl.from(gallery, { x: 50, opacity: 0 });
	}
});

secondTrigger = new ScrollMagic.Scene({
	triggerElement: galleryContent,
	triggerHook: 0.5,
	reverse: false,
})
	.setTween(thirdTl)
	.addTo(controller);

// single product popup

const btn = document.querySelector('.single-product__btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__container');

function singleBtn() {
	if (btn == null) {
		return;
	}

	btn.addEventListener('click', e => {
		popup.classList.add('active');
		popupContent.classList.add('active');
		document.body.classList.add('lock');
	});
}

singleBtn();

// animation mouse

const mouse = document.querySelector('.mouse');
const subscribe = document.querySelector('.subscribe');
const scene = document.querySelector('.scene');
if (
	location.href.includes('index.html') ||
	location.href.slice(-1) === '/' ||
	location.href.slice(-1) === '#'
) {
	const parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		hoverOnly: true,
	});
}

window.addEventListener('mouseover', mouseActive);

function moveCircle(e) {
	TweenLite.to(mouse, 0.7, {
		x: e.clientX,
		y: e.clientY,
	});
}

window.addEventListener('mousemove', moveCircle);

function mouseActive(e) {
	if (
		e.target.classList.contains('logo-img') ||
		e.target.classList.contains('menu__link') ||
		e.target.classList.contains('filter__select')
	) {
		mouse.classList.add('active');
		TweenLite.to(mouse, 0.3, {
			scale: 2,
		});
	} else {
		mouse.classList.remove('active');
		
		if (e.target.classList.contains('popup__close')) {
			mouse.classList.add('active-tap');
			console.log(e.target)
			TweenLite.to(mouse, 0.3, {
				scale: 2,
			});
			mouse.innerText = 'Tap';
		} else {
			TweenLite.to(mouse, 0.3, {
				scale: 1,
			});
			mouse.classList.remove('active-tap');
			mouse.innerText = '';
		}
	}
}
const body = document.querySelector('body');

body.addEventListener('click', function (e) {
	let target = e.target;
	if (!target.hasAttribute('data-scroll-to')) {
		return;
	}

	let scrollToItemClass = target
		.closest('[data-scroll-to]')
		.getAttribute('data-scroll-to');

	let scrollToItem = document.querySelector('.' + scrollToItemClass);

	console.log(scrollToItem);

	if (scrollToItem) {
		scrollToSection(scrollToItem);
	}
});

function scrollToSection(item) {
	let targetTop = item.getBoundingClientRect().top;
	let scrollTop = window.pageYOffset;
	let summTop = scrollTop + targetTop;
	window.scrollTo({
		top: summTop - 75,
		behavior: 'smooth',
	});
}
(function () {
	let catalogRow = document.querySelector('.product__row');
	const filter = document.querySelector('.filter__select');
	const products = document.querySelectorAll('.product__column');
	let filterValue = [];

	if (!filter) {
		return;
	}

	filter.addEventListener('change', sort);

	function sort(e) {
		const sortBy = e.target.value;

		if (sortBy === 'default') {
			pushChild(catalogRow, products);
			return;
		}

		const filterName = [...products].map(e => {
			let item = e;
			filterValue.push(item);
		});

		if (sortBy === 'price') {
			const sorting = filterValue.sort((a, b) => {
				const first = a.querySelector('.product__price').textContent;
				const second = b.querySelector('.product__price').textContent;

				return first - second;
			});

			pushChild(catalogRow, sorting);
		} else if (sortBy === 'popular') {
			const sorting = filterValue.sort((a, b) => {
				const first = a.querySelector(
					'.product__rating-text'
				).textContent;
				const second = b.querySelector(
					'.product__rating-text'
				).textContent;

				return second - first;
			});
			pushChild(catalogRow, sorting);
		}
	}

	function removeChild(item) {
		while (item.firstChild) {
			item.removeChild(item.firstChild);
		}
	}

	function pushChild(item, children) {
		removeChild(item);
		for (let i = 0; i < children.length; i++) {
			item.appendChild(children[i]);
		}
	}
})();
