// import regeneratorRuntime from '@babel/runtime/regenerator'
// import Swiper from 'swiper/bundle'
// import changeLoaderState from './components/changeLoaderState';


const thumbSwiper = new Swiper('.productinmain__gallery__thumbswiper', {
	slidesPerView: 5,
	spaceBetween: 10,
	breakpoints: {
		1025: {
			slidesPerView: 8,
		},
	},
})
const mainSwiper = new Swiper('.productinmain__gallery__mainswiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 1000,
	grabCursor: true,
	thumbs: {
		swiper: thumbSwiper,
	},
	on: {
		slideChangeTransitionStart: () => {
			mainSwiper.el.classList.remove('scaling')
			// if (window.innerWidth > 1024) {
			// 	setTimeout(() => {
			// 		mainSwiper.el.classList.add('scaling')
			// 	}, 2400)
			// } else {
			// }
			setTimeout(() => {
				mainSwiper.el.classList.add('scaling')
			}, 1400)
		},
	},
})

// description & ingredients switcher
const tabs = document.querySelectorAll('.productinmain__info__details__tab')
const contents = document.querySelectorAll(
	'.productinmain__info__details__content'
)

const switchTabs = () => {
	tabs.forEach((tab) => tab.classList.toggle('active'))
	contents.forEach((content) => content.classList.toggle('switched'))
}
tabs.forEach((tab) => {
	tab.addEventListener('click', switchTabs)
})

// ingredients
const ingredientsUl = document.querySelector('.ingredients__list')
const ingredientTogglerBtn = document.querySelector('.ingredients__toggler')

const ingredientsUlHeightSetter = (ul) => {
	ul.style.setProperty('--height', `${ul.scrollHeight}px`)
}
window.addEventListener('load', () => {
	ingredientsUlHeightSetter(ingredientsUl)
})

ingredientTogglerBtn.addEventListener('click', () => {
	ingredientsUl.classList.toggle('toggled')
})

// similars & alsointerested
const similarsSwiper = new Swiper('.productin__similars__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.productin__similars__nav__right',
		prevEl: '.productin__similars__nav__left',
	},
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
	},
})
const alsointerestedSwiper = new Swiper('.productin__alsointerested__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.productin__alsointerested__nav__right',
		prevEl: '.productin__alsointerested__nav__left',
	},
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
	},
})

// reviewcomments
const productin__reviewcomments__list = document.querySelector(
	'.productin__reviewcomments__list'
)
const loadmorecommentsbtn = document.querySelector('.loadmorecommentsbtn')

let notLoadedYet = true
loadmorecommentsbtn.addEventListener('click', () => {
	if (notLoadedYet) {
		changeLoaderState()
		loadmorecommentsbtn.classList.toggle('toggled')
		productin__reviewcomments__list.classList.toggle('toggled')
		notLoadedYet = false
		setTimeout(() => {
			changeLoaderState(false)
		}, 400)
	} else {
		loadmorecommentsbtn.classList.toggle('toggled')
		productin__reviewcomments__list.classList.toggle('toggled')
	}
	if (loadmorecommentsbtn.classList.contains('toggled')) {
		scrollToEle(
			productin__reviewcomments__list.querySelector('li:last-child'),
			60
		)
	} else {
		scrollToEle(productin__reviewcomments__list, 140)
	}
})

// plus and minus btns
let plusbtn = document.querySelector(
	'.productinmain__info__basketform__quantity__plusbtn'
)
let minusbtn = document.querySelector(
	'.productinmain__info__basketform__quantity__minusbtn'
)

const handlePlusBtn = async () => {
	let quantityInput = document.getElementById('quantity')
	quantityInput.value = Number(quantityInput.value) + 1
}
const handleMinusBtn = async () => {
	let quantityInput = document.getElementById('quantity')
	if (+quantityInput.value < 2) return
	quantityInput.value = Number(quantityInput.value) - 1
}

plusbtn.addEventListener('click', handlePlusBtn)
minusbtn.addEventListener('click', handleMinusBtn)

// stars

const reviewmodal = document.querySelector('.reviewmodal')
const reviewmodal__bg = document.querySelector('.reviewmodal__bg')
const reviewOpenBtn = document.querySelector(
	'.productin__reviewcomments__menu__writeareview'
)
const reviewmodal__X = document.querySelector('.reviewmodal__X')

const reviewform = document.getElementById('reviewform')

let clickableStars = document.querySelectorAll('.star.real')
clickableStars = [...clickableStars]
const starsParentReal = document.querySelector(
	'.reviewmodal__writereview__stars.real'
)
const hiddenStarInput = document.getElementById('stars')

clickableStars.forEach((realstar, realstarIndex) => {
	realstar.addEventListener('click', () => {
		starsParentReal.style.setProperty('--multix', `${realstarIndex + 1}`)
		hiddenStarInput.value = realstarIndex + 1
	})
})

// reviewModal
const handleRemoveReview = async (btn) => {
	let id = +btn.dataset.id
	let response, data
	try {
		response = await axios.post(UPDATE_REVIEW, {
			id,
		})
		data = response.data
	} catch (error) {
		console.log(error)
	}
	if (data.ok) {
		btn.closest('li').remove()
	}
}
let rmvReviewBtns = document.querySelectorAll(
	'.productin__reviewcomments__list__item__X'
)
rmvReviewBtns = [...rmvReviewBtns]

rmvReviewBtns.forEach((each) =>
	each.addEventListener('click', () => {
		handleRemoveReview(each)
	})
)

reviewOpenBtn.addEventListener('click', () => {
	if (reviewOpenBtn.classList.contains('loggedin')) return
	reviewmodal.classList.toggle('toggled')
	reviewmodal__bg.classList.toggle('toggled')
	body.classList.toggle('noscroll')
})
reviewmodal__bg.addEventListener('click', () => {
	reviewmodal.classList.remove('toggled')
	reviewmodal__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
})
reviewmodal__X.addEventListener('click', () => {
	reviewmodal.classList.remove('toggled')
	reviewmodal__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
})
const removeReviewSvg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66667 12C6.84348 12 7.01305 11.9298 7.13807 11.8048C7.2631 11.6798 7.33333 11.5102 7.33333 11.3334V7.33337C7.33333 7.15656 7.2631 6.98699 7.13807 6.86197C7.01305 6.73695 6.84348 6.66671 6.66667 6.66671C6.48986 6.66671 6.32029 6.73695 6.19526 6.86197C6.07024 6.98699 6 7.15656 6 7.33337V11.3334C6 11.5102 6.07024 11.6798 6.19526 11.8048C6.32029 11.9298 6.48986 12 6.66667 12ZM13.3333 4.00004H10.6667V3.33337C10.6667 2.80294 10.456 2.29423 10.0809 1.91916C9.70581 1.54409 9.1971 1.33337 8.66667 1.33337H7.33333C6.8029 1.33337 6.29419 1.54409 5.91912 1.91916C5.54405 2.29423 5.33333 2.80294 5.33333 3.33337V4.00004H2.66667C2.48986 4.00004 2.32029 4.07028 2.19526 4.1953C2.07024 4.32033 2 4.4899 2 4.66671C2 4.84352 2.07024 5.01309 2.19526 5.13811C2.32029 5.26314 2.48986 5.33337 2.66667 5.33337H3.33333V12.6667C3.33333 13.1971 3.54405 13.7058 3.91912 14.0809C4.29419 14.456 4.8029 14.6667 5.33333 14.6667H10.6667C11.1971 14.6667 11.7058 14.456 12.0809 14.0809C12.456 13.7058 12.6667 13.1971 12.6667 12.6667V5.33337H13.3333C13.5101 5.33337 13.6797 5.26314 13.8047 5.13811C13.9298 5.01309 14 4.84352 14 4.66671C14 4.4899 13.9298 4.32033 13.8047 4.1953C13.6797 4.07028 13.5101 4.00004 13.3333 4.00004ZM6.66667 3.33337C6.66667 3.15656 6.7369 2.98699 6.86193 2.86197C6.98695 2.73695 7.15652 2.66671 7.33333 2.66671H8.66667C8.84348 2.66671 9.01305 2.73695 9.13807 2.86197C9.2631 2.98699 9.33333 3.15656 9.33333 3.33337V4.00004H6.66667V3.33337ZM11.3333 12.6667C11.3333 12.8435 11.2631 13.0131 11.1381 13.1381C11.013 13.2631 10.8435 13.3334 10.6667 13.3334H5.33333C5.15652 13.3334 4.98695 13.2631 4.86193 13.1381C4.7369 13.0131 4.66667 12.8435 4.66667 12.6667V5.33337H11.3333V12.6667ZM9.33333 12C9.51014 12 9.67971 11.9298 9.80474 11.8048C9.92976 11.6798 10 11.5102 10 11.3334V7.33337C10 7.15656 9.92976 6.98699 9.80474 6.86197C9.67971 6.73695 9.51014 6.66671 9.33333 6.66671C9.15652 6.66671 8.98695 6.73695 8.86193 6.86197C8.73691 6.98699 8.66667 7.15656 8.66667 7.33337V11.3334C8.66667 11.5102 8.73691 11.6798 8.86193 11.8048C8.98695 11.9298 9.15652 12 9.33333 12Z" fill="#FE7E7E"></path>
              </svg>
`
reviewform.addEventListener('submit', async (e) => {
	e.preventDefault()
	if (
		1 <= +reviewform.star.value <= 5 &&
		Number.isInteger(+reviewform.star.value)
	) {
		let newReview = {
			firstName: reviewform.firstname.value,
			lastName: reviewform.lastname.value,
			review: reviewform.review.value,
			star: +reviewform.star.value,
		}
		if (newReview.firstName.length < 1) return
		if (newReview.lastName.length < 1) return
		let response, data
		try {
			changeLoaderState()
			response = await axios.post(UPDATE_REVIEW, newReview)
			data = response.data
		} catch (error) {
			console.log(error)
		}
		if (data.ok) {
			let img = 'assets/img/persons/default.svg'
			let newLi = document.createElement('li')
			let newreview = data.newreview
			console.log(newreview)
			// if (newreview.image) img = newreview.image
			console.log(img)
			newLi.dataset.id = newreview.id
			newLi.classList.add('productin__reviewcomments__list__item')
			// id: Date.now(),
			// firstname: req.body.firstName,
			// lastname: req.body.lastName,
			// review: req.body.review,
			// star: +req.body.star
			newLi.innerHTML = `
			<div class="productin__reviewcomments__list__item__X">${removeReviewSvg}</div>
			
			<div class="productin__reviewcomments__list__item__imgbox">
				<img src="${img}" alt="${newreview.firstname + ' ' + newreview.lastname}" />
			</div>
			<div class="productin__reviewcomments__list__item__rest">
				<h6>${newreview.firstname + ' ' + newreview.lastname}</h6>
				<div class="homemain__slide__left__reviews">
					<div
						class="homemain__slide__left__reviews__stars"
						style="--multix: ${newreview.star}"
					></div>
				</div>
				<div class="productin__reviewcomments__list__item__commentbox">
					<p>${newreview.review}</p>
				</div>
			</div>
			`
			let firstChild = productin__reviewcomments__list.querySelector('li')
			newLi = productin__reviewcomments__list.insertBefore(
				newLi,
				firstChild
			)
			let rmvbtn = newLi.querySelector(
				'.productin__reviewcomments__list__item__X'
			)
			console.log(rmvbtn)
			rmvbtn.dataset.id = newreview.id
			rmvbtn.addEventListener('click', () => {
				handleRemoveReview(rmvbtn)
			})
			scrollToEle(newLi)
			reviewmodal__X.click()
		}
		changeLoaderState(false)
	}
})
