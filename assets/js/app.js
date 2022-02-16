// let modalBtn = document.querySelectorAll('[data-modal]');
// let madalCLose = document.querySelectorAll('.popup__close');
// let madalArea = document.querySelectorAll('.popup');


// modalBtn.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let current = e.currentTarget;
// 		let modalId = current.getAttribute('data-modal');
// 		let modal = document.getElementById(modalId);
// 		let modalContent = document.querySelector('.popup__content')

// 		modalContent.addEventListener('click', e => {
// 			e.stopPropagation()
// 		})

// 		modal.classList.add('open');
// 		document.body.classList.add('lock');
// 	})
// })

// madalCLose.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let currentModal = e.currentTarget.closest('.popup');

// 		currentModal.classList.remove('open');
// 		document.body.classList.remove('lock');
// 	})
// })


// madalArea.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let currentModal = e.currentTarget;

// 		currentModal.classList.remove('open');
// 		document.body.classList.remove('lock');
// 	})
// })
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

if ((!window.location.href.includes("index.html")) && (window.location.href.slice(-1) != '/')) {
	header.classList.add('static');	

	logo.setAttribute('href', 'index.html');
}
let controller;
let animationTrigger;
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