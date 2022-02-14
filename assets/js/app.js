// let lang = document.querySelectorAll('.header__choose')
// let currentLocation = location.href;
// let menu = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

// lang.forEach(c => {

// 	c.addEventListener('click', function () {
// 		lang.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')
// 	})

// })

// Для многостраничной страницы

// for (let i = 0; i < menuLength; i++) {
// 	if (menu[i].href === currentLocation) {
// 		menu[i].classList.add("active");
// 	}
// }
// let burger = document.querySelector('.menu__icon')
// let iconMenu = document.querySelector('.menu')

// if (burger) {
// 	burger.addEventListener('click', function(e) {
// 		document.body.classList.toggle('lock')
// 		burger.classList.toggle('active')
// 		iconMenu.classList.toggle('active')
// 	})
// }
// let catalogSection = document.querySelector(".section-catalog");

// let removeChildren = function(item) {
// 	while(item.firstChild) {
// 		item.removeChild(item.firstChild);
// 	}
// }

// let pushChild = function(item, children) {
// 	removeChildren(item)
// 	for (let i = 0; i < children.length; i++) {
// 		item.appendChild(children[i]);
// 	}
// }

// let catalogRow = catalogSection.querySelector('.pizza__row');
// let catalogItem = catalogSection.querySelectorAll('.pizza__column');
// let catalogNav = catalogSection.querySelector('.menu-catalog__nav');

// catalogNav.addEventListener('click', function(e) {
// 	let target = e.target;
// 	let catalogBtn = target.closest('.menu-catalog__item')

// 	if(catalogBtn === null || catalogBtn.classList.contains('.menu-catalog__item.active')) {
// 		return;
// 	}

// 	let btnValue = catalogBtn.getAttribute('data-filter')

// 	if(btnValue === 'all') {
// 		pushChild(catalogRow, catalogItem);
// 		return;
// 	}

// 	let filterValue = [];
// 	for (let i = 0; i < catalogItem.length; i++) {
// 		const curent = catalogItem[i];
// 		if(curent.getAttribute('data-category') == btnValue) {
// 			filterValue.push(curent);
// 		}
// 	}

// 	pushChild(catalogRow, filterValue)

// })
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
// let autoresize = document.querySelectorAll('[data-autoresize]');

// autoresize.forEach(i => {
// 	let autoresizeH = i.offsetHeight;

// 	i.addEventListener('input', e => {
// 		let current = e.target;

// 		current.style.height = autoresizeH + 'px';
// 		current.style.height = current.scrollHeight + 'px';
// 	})
// })
// function ibg(){

// 	let ibg=document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if(ibg[i].querySelector('img')){
// 			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// 		}
// 	}
// }

// ibg();
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

// new Swiper(".swiper-container", {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {		
// 		el: '.swiper-pagination',
		
// 		type: 'fraction',
// 		renderFraction: function (currentClass, totalClass){
// 			return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
// 		},


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true, 


		// scss: swiper-pagination-bullets
	// },



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	// simulateTouch: false,
	// градус при котором поворот
	// touchAngle: 90,
	// grabCursor: true,


	// slideToClickedSlide: false,


	// hashNavigation: {
	// 	watchState: true,
	// },

	// keyboard: {
		// enabled: true,
		// onlyInViewport: true,
	// },

	// mousewheel: {
		// sensiitivity: 1,
	// },


	// autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	// watchOverflow: true,

	// spaceBetween: 30,
	
	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,
	
	// с какой начнет
	// initialSlide: 0,
	
	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPerColumn: 2,

	// бесконечность
	// loop: true,
	// loopedSlides: 0,
	
	
	// freeMode: true,
	
	
	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// },
	
	// speed: 800,
	
	// direction: 'vertical',

	// effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	// breakpoints: {
	// 	320: {
	// 	},
	// 	480: {
	// 	},
	// 	772: {
	// 	},
	// 	992: {
	// 	}, 
	// },

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
// });


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',
		
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass){
		// 	return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
// });
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

if (window.location.href.includes("single-product.html")) {
	header.classList.add('static');	
	// let href = logo.getAttribute('href');
	logo.setAttribute('href', 'index.html');
}