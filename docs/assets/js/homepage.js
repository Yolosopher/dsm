// // import './main.js'
// import regeneratorRuntime from '@babel/runtime/regenerator'
// import Swiper from 'swiper/bundle'
// import changeLoaderState from './components/changeLoaderState'
// import { navbar, navbariconsheader, header__navbar__icons__bottom, header__bg } from './components/vars';
// const body = document.querySelector('body')
// const navbar = document.querySelector('.header__navbar')
// const navbariconsheader = document.querySelector('.header__navbar__icons')
// const header__navbar__icons__bottom = document.querySelector(
// 	'.header__navbar__icons__bottom'
// )
// const header__navbar__icons__top = document.querySelector(
// 	'.header__navbar__icons__top'
// )
// const navbarMobile = document.querySelector('.respomenu .header__navbar__icons')
// const navbar__content = document.querySelector('.header__navbar__content')
// const header__bg = document.querySelector('.header__navbar__bg')
// const langbar = document.querySelector('.header__langbar')
// const header__loginbtn = document.querySelector('.header__loginbtn')
// const header__loginbtnMobile = document.querySelector(
// 	'.respomenu .header__loginbtn'
// )
// const loginmodal = document.querySelector('.loginmodal')
// const loginmodal__bg = document.querySelector('.loginmodal__bg')
// const loginmodal__X = document.querySelector('.loginmodal__X')
// const forgotpass = document.querySelector('.forgotpass')
// const loginbtnsInRecovery = document.querySelectorAll('.loginmodal .login')
// const registerbtn = document.querySelector('.loginmodal .register')

let homeTextSwiper = new Swiper('.homemain__swiper.left', {
	slidesPerView: 1,
	speed: 0,
	virtualTranslate: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	// touchAngle: 80,
	// direction: 'vertical',
	watchSlidesVisibility: true,

	pagination: {
		el: '.homemain__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: 'pagbullet',
		bulletActiveClass: 'pagbullet__active',
	},
	on: {
		slideChangeTransitionStart: () => {
			homeSwiper.el.parentElement.classList.remove('fadein')

			setTimeout(() => {
				homeSwiper.el.parentElement.classList.add('fadein')
			}, 400)
		},
		paginationRender: () => {
			let bullets = document.querySelectorAll('.pagbullet')
			// console.log(bullets)
			for (let i = 0; i < bullets.length; i++) {
				const bullet = bullets[i]
				bullet.innerHTML = '<div></div>'
			}
		},
		// reachEnd: () => {
		// 	homeSwiper.invert = true
		// },
		// reachBeginning: () => {
		// 	homeSwiper.invert = false
		// }
	},
	// loop: true,
	breakpoints: {
		1025: {
			direction: 'vertical',
		},
	},
})
let homeSwiper = new Swiper('.homemain__swiper.right', {
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 1000,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		// stopOnLastSlide: true
	},
	// touchAngle: 60,
	// passiveListeners: false,
	// virtualTranslate: true,
	watchSlidesVisibility: true,
	navigation: {
		nextEl: '.homemain__navigation__right',
		prevEl: '.homemain__navigation__left',
	},
	thumbs: {
		swiper: homeTextSwiper,
	},
	on: {
		slideChangeTransitionStart: () => {
			homeSwiper.el.parentElement.classList.remove('fadeinimg')
			// if (window.innerWidth > 1024) {
			// 	setTimeout(() => {
			// 		homeSwiper.el.parentElement.classList.add('fadeinimg')
			// 	}, 2400)
			// } else {
			// }
			setTimeout(() => {
				homeSwiper.el.parentElement.classList.add('fadeinimg')
			}, 1400)
		},
	},
	breakpoints: {
		1025: {
			direction: 'vertical',
			// speed: 2000
		},
	},
})
homeTextSwiper.on('slideChange', () => {
	homeSwiper.slideTo(homeTextSwiper.activeIndex)
})
// homeTextSwiper.on('slidePrevTransitionStart', () => {
//     homeSwiper.slidePrev()
// })
// homeSwiper.on('slideNextTransitionStart', () => {
//     homeTextSwiper.slideNext(500, false)
// })
// homeSwiper.on('slidePrevTransitionStart', () => {
//     homeTextSwiper.slidePrev(500, false)
// })

const slides = document.querySelectorAll('.homemain__slide')

setTimeout(() => {
	slides.forEach((slid) => slid.classList.remove('starting'))
}, 350)

let popularSwiper = new Swiper('.homemain__populars__swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	scrollbar: {
		el: '.homemain__populars__scrollbar',
		hide: false,
		draggable: true,
	},
	navigation: {
		nextEl: '.homemain__populars__navigation__right',
		prevEl: '.homemain__populars__navigation__left',
	},
	breakpoints: {
		1025: {
			slidesPerView: 'auto',
		},
	},
})

// sales toggle
const salesCategories = document.querySelector('.homemain__sales__categories')
const salesActiveText = document.querySelector(
	'.homemain__sales__categories__activetext'
)
salesActiveText.addEventListener('click', () => {
	salesCategories.classList.toggle('toggled')
	header__bg.classList.toggle('toggled')
	body.classList.toggle('noscroll')
})

// sales tabbing
const categoriUl = document.querySelector('.homemain__sales__categories__list')
const coverimg = document.querySelector('.homemain__sales__coverbox img')
const sales = document.querySelector('.homemain__sales')

const handleCatChange = (categoryId, innertext) => {
	let catId = +categoryId
	let currentActiveCategoryLi = document.querySelector(
		'.homemain__sales__categories__list li.active'
	)
	currentActiveCategoryLi.classList.remove('active')
	let chosenCategoryLi = document.querySelector(
		`.homemain__sales__categories__list li[data-id="${catId}"]`
	)
	chosenCategoryLi.classList.add('active')
	salesActiveText.dataset.value = innertext
}

const switchCover = (src) => {
	coverimg.src = src
}
const filterProducts = (categoryId) => {
	let saleItems = document.querySelectorAll(
		'.homemain__sales .homemain__sales__item'
	)
	saleItems = [...saleItems]
	if (categoryId === '0') {
		saleItems.forEach((saleitem) => saleitem.classList.remove('hidden'))
	} else {
		saleItems.forEach((saleitem) => {
			if (saleitem.dataset.id === categoryId) {
				saleitem.classList.remove('hidden')
			} else {
				saleitem.classList.add('hidden')
			}
		})
	}
}

// add click listener on categories
categoriUl.querySelectorAll('li').forEach((li) => {
	li.addEventListener('click', () => {
		// switch active class on categories
		handleCatChange(li.dataset.id, li.innerText)
		// mobile toggler minimize
		salesCategories.classList.remove('toggled')
		header__bg.classList.remove('toggled')
		body.classList.remove('noscroll')

		///// VISUALIZE CATEGORY FILTER
		// sales.classList.add('effect')

		changeLoaderState()
		setTimeout(() => {
			switchCover(li.dataset.image)
			// filter content by category id
			filterProducts(li.dataset.id)
			// sales.classList.remove('effect')
			changeLoaderState(false)
		}, 700)
		// change cover image by category id
	})
})

window.addEventListener('load', () => {
	document.querySelector('.animstartpoint').classList.remove('animstartpoint')
})

document.addEventListener('DOMContentLoaded', function () {
	const ele = document.querySelector('.homemain__sales__categories')
	ele.style.cursor = 'grab'

	let pos = { top: 0, left: 0, x: 0, y: 0 }

	const mouseDownHandler = function (e) {
		ele.style.cursor = 'grabbing'
		ele.style.userSelect = 'none'

		pos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY,
		}

		document.addEventListener('mousemove', mouseMoveHandler)
		document.addEventListener('mouseup', mouseUpHandler)
	}

	const mouseMoveHandler = function (e) {
		// How far the mouse has been moved
		const dx = e.clientX - pos.x
		const dy = e.clientY - pos.y

		// Scroll the element
		ele.scrollTop = pos.top - dy
		ele.scrollLeft = pos.left - dx
	}

	const mouseUpHandler = function () {
		ele.style.cursor = 'grab'
		ele.style.removeProperty('user-select')

		document.removeEventListener('mousemove', mouseMoveHandler)
		document.removeEventListener('mouseup', mouseUpHandler)
	}

	// Attach the handler
	ele.addEventListener('mousedown', mouseDownHandler)
})
