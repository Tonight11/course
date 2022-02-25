const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

if ((!window.location.href.includes("index.html")) && (window.location.href.slice(-1) != '/')) {
	header.classList.add('static');	

	logo.setAttribute('href', 'index.html');
}
let controller = new ScrollMagic.Controller();
let firstTrigger;



// animation first-page

const info = document.querySelector('.firstpage__info');
const imgNike = document.querySelector('.firstpage__img');
const nav = document.querySelector('.header__top');

const firstTl = gsap.timeline({ defaults: { duration: .8, ease: Power2.inOut } });

firstTl.from(info, { opacity: 0, x: -40 })
firstTl.from(imgNike, { opacity: 0, x: -20 }, '-=0.3')

if (window.pageYOffset == 0) {
	firstTl.from(nav, { opacity: 0, y: -40 }, '-=0.8')
}

// animation cards

const cards = document.querySelectorAll('.card-animation');

cards.forEach(card => {

	const chips = card.querySelectorAll('.chips__column');
	const advantages = card.querySelectorAll('.advantage__column');
	const blogs = card.querySelectorAll('.blog__column');



	const secondTl = gsap.timeline({ defaults: { duration: .7, ease: Power2.inOut } });


	secondTl.from(chips, { opacity: 0, y: 40, stagger: 0.2 });
	secondTl.from(advantages, { opacity: 0, y: 40, stagger: 0.2 }, '-=0.7');
	secondTl.from(blogs, { opacity: 0, y: 40, stagger: 0.2 }, '-=1.4');

	firstTrigger = new ScrollMagic.Scene({
		triggerElement: card,
		triggerHook: 0.5,
		reverse: false
	})
		.setTween(secondTl)
		.addTo(controller)
});

// gallery animation

const galleryContent = document.querySelectorAll('.gallery__inner');
const galleries = document.querySelectorAll('.gallery__item');

const thirdTl = gsap.timeline({ defaults: { duration: .5, ease: Power2.inOut } });
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
		thirdTl.from(gallery, { x: 50, opacity: 0 }, "-=.2");
	}

})


secondTrigger = new ScrollMagic.Scene({
	triggerElement: galleryContent,
	triggerHook: 0.5,
	reverse: false
})
	.setTween(thirdTl)
	.addTo(controller);



// single product popup

const btn = document.querySelector('.single-product__btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__container');

function btnModal() {
	if(btn == null) {
		return;
	}
	
	btn.addEventListener('click', (e) => {
		popup.classList.add('active')
		popupContent.classList.add('active')
		document.body.classList.add('lock');
	})
}

btnModal();

const body = document.querySelector('body');


body.addEventListener('click', function (e) {

	let target = e.target;
	if (!target.hasAttribute("data-scroll-to")) {
		return;
	}

	let scrollToItemClass = target.closest('[data-scroll-to]').getAttribute('data-scroll-to');

	let scrollToItem = document.querySelector('.' + scrollToItemClass)

	console.log(scrollToItem)

	if (scrollToItem) {
		scrollToSection(scrollToItem);
	}
})

function scrollToSection(item) {
	let targetTop = item.getBoundingClientRect().top;
	let scrollTop = window.pageYOffset;
	let summTop = scrollTop + targetTop
	window.scrollTo({
		top: summTop - 75,
		behavior: "smooth"
	});

}
