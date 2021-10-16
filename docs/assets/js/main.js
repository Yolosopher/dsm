// import regeneratorRuntime from '@babel/runtime/regenerator'
// import axios from 'axios'
// import autoGrow from './components/autoGrow';
const profileToggle = document.querySelector('.header__loginbtn.loggedin')
const loggedinmenu = document.querySelector('.loggedinmenu.desktop')
const loggedinmenumob = document.querySelector('.loggedinmenu.mobile')
const autoGrow = (ul) => {
	let liNum = [...ul.querySelectorAll('li')].length
	let mobheight = liNum * 18 + (liNum - 1) * 16
	ul.style.setProperty('--mobheight', `${mobheight}px`)
}
const autoGrowSelect = (niceSelect) => {
	let height = niceSelect.scrollHeight + 2
	niceSelect.style.setProperty('--height', height + 'px')
}
const body = document.querySelector('body')
const changeLoaderState = (on = true) => {
	if (on) {
		body.classList.add('loaderOn')
	} else {
		body.classList.remove('loaderOn')
	}
}
const header = document.querySelector('header')
const header__searchform__X = document.querySelector('.header__searchform__X')
const header_searchform_mobile = document.querySelector(
	'.header__searchform.mobile'
)
// if basketform
const basketform = document.getElementById('basketform')
const addInBag_InTheFormBtn = document.querySelector('.inform')

const navbar = document.querySelector('.header__navbar')
const navbariconsheader = document.querySelector('.header__navbar__icons')
const header__navbar__icons__bottom = document.querySelector(
	'.header__navbar__icons__bottom'
)
const header__navbar__icons__top = document.querySelector(
	'.header__navbar__icons__top'
)
const navbarMobile = document.querySelector('.respomenu .header__navbar__icons')
const navbar__content = document.querySelector('.header__navbar__content')
const header__bg = document.querySelector('.header__navbar__bg')
const langbar = document.querySelector('.header__langbar')
const header__loginbtn = document.querySelector('.header__loginbtn')
const header__loginbtnMobile = document.querySelector(
	'.respomenu .header__loginbtn'
)
const loginmodal = document.querySelector('.loginmodal')
const loginmodal__bg = document.querySelector('.loginmodal__bg')
const loginmodal__X = document.querySelector('.loginmodal__X')
const forgotpass = document.querySelector('.forgotpass')
const loginbtnsInRecovery = document.querySelectorAll('.loginmodal .login')
const registerbtn = document.querySelector('.loginmodal .register')

navbarMobile.addEventListener('click', () => {
	if (!!document.querySelector('.homemain__sales__categories')) {
		if (
			document
				.querySelector('.homemain__sales__categories')
				.classList.contains('toggled')
		) {
			salesActiveText.click()
		}
	}
	navbarMobile.classList.toggle('toggled')
	navbar__content.classList.toggle('toggled')
	header__bg.classList.toggle('toggled')
	body.classList.toggle('noscroll')
})
navbar.addEventListener('click', () => {
	navbar.classList.toggle('toggled')
	navbar__content.classList.toggle('toggled')
	header__bg.classList.toggle('toggled')
	body.classList.toggle('noscroll')
})

header__bg.addEventListener('click', () => {
	navbarMobile.classList.remove('toggled')
	navbar.classList.remove('toggled')
	navbar__content.classList.remove('toggled')
	header__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
	document.querySelector('.homemain__sales__categories') &&
		document
			.querySelector('.homemain__sales__categories')
			.classList.remove('toggled')
	document.getElementById('filterform') &&
		document.getElementById('filterform').classList.remove('toggled')
})

// navbar.click()
const footerUls = document.querySelectorAll('.footer__columns__column ul')

footerUls.forEach((ul) => {
	autoGrow(ul)
	let parent = ul.parentElement
	parent
		.querySelector('.footer__columns__column__title')
		.addEventListener('click', () => {
			parent.classList.toggle('toggled')
		})
})

langbar.addEventListener('click', () => {
	langbar.classList.toggle('toggled')
})

window.addEventListener(
	'click',
	(e) => {
		if (e.target !== langbar) {
			langbar.classList.remove('toggled')
		}
		if (
			e.target.closest('.header__searchform') !== header_searchform_mobile
		) {
			header_searchform_mobile.classList.remove('toggled')
		}
		if (!!document.querySelector('.productsmain__filter')) {
			if (e.target.closest('.productsmain__filter')) {
				let filtered = [
					...document.querySelectorAll('.productsmain__filter'),
				].filter((a) => a !== e.target.closest('.productsmain__filter'))
				filtered.forEach((each) => each.classList.remove('toggled'))
			}
		}
		// if (e.target.closest('.header__navbar__content') !== navbar__content && e.target.closest('.header__navbar') !== navbar && e.target.closest('.respomenu .header__navbar__icons') !== navbarMobile) {
		//     navbarMobile.classList.remove('toggled')
		//     navbar.classList.remove('toggled')
		//     navbar__content.classList.remove('toggled')
		//     header__bg.classList.remove('toggled')
		//     body.classList.remove('noscroll')
		// }
	},
	true
)

window.addEventListener('scroll', (e) => {
	if (window.innerWidth < 1025) {
		if (window.pageYOffset >= 80) {
			header.classList.add('scrolled')
			header_searchform_mobile.classList.add('scrolled')
		} else {
			header.classList.remove('scrolled')
			header_searchform_mobile.classList.remove('scrolled')
		}
	} else {
		header.classList.remove('scrolled')
		header_searchform_mobile.classList.remove('scrolled')
	}
})
header_searchform_mobile.addEventListener('submit', (e) => {
	if (!header_searchform_mobile.classList.contains('toggled')) {
		e.preventDefault()
		header_searchform_mobile.classList.add('toggled')
	}
})
header__searchform__X.addEventListener('click', () => {
	header_searchform_mobile.classList.remove('toggled')
})

header__loginbtn.addEventListener('click', () => {
	if (header__loginbtn.classList.contains('loggedin')) return
	loginmodal.classList.toggle('toggled')
	loginmodal__bg.classList.toggle('toggled')
	body.classList.toggle('noscroll')
})
header__loginbtnMobile.addEventListener('click', () => {
	if (profileToggle) {
		loggedinmenumob.classList.toggle('toggled')
	} else {
		if (header__loginbtn.classList.contains('loggedin')) return
		loginmodal.classList.toggle('toggled')
		loginmodal__bg.classList.toggle('toggled')
		body.classList.toggle('noscroll')
	}
})

loginmodal__bg.addEventListener('click', () => {
	loginmodal.classList.remove('toggled')
	loginmodal__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
})
loginmodal__X.addEventListener('click', () => {
	loginmodal.classList.remove('toggled')
	loginmodal__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
})

forgotpass.addEventListener('click', () => {
	loginmodal.classList.add('recovery')
	loginmodal.classList.remove('register')
})
registerbtn.addEventListener('click', () => {
	loginmodal.classList.remove('recovery')
	loginmodal.classList.add('register')
})
loginbtnsInRecovery.forEach((each) => {
	each.addEventListener('click', () => {
		loginmodal.classList.remove('recovery')
		loginmodal.classList.remove('register')
	})
})

// addtobasket buttons
let minusvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16 11H13H12.5H12H11.5H11H8C7.73479 11 7.48043 11.1054 7.2929 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.2929 12.7071C7.48043 12.8946 7.73479 13 8 13H11H11.5H13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z" fill="#131313"></path>
</svg>
`
let plusvg = `	
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16 11H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V11H8C7.73479 11 7.48043 11.1054 7.2929 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.2929 12.7071C7.48043 12.8946 7.73479 13 8 13H11V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z" fill="#131313"></path>
</svg>
`
// image: 'assets/img/homeslider/1.png',
// category: '1 moisturize',
// title: '1 Powerful Olive Oil & Honey Cream',
// size: '5ml',
// color: '#3BCEAC',
// price: 9.99,
// id: 1,
const appendBasketUl = (
	link,
	image,
	category,
	title,
	size = false,
	color = false,
	price,
	id,
	qty = 1
) => {
	let ul = document.querySelector('.basketmodal__mains__basket__list')
	let newbasketli = document.createElement('li')
	newbasketli.classList.add('basketmodal__mains__basket__list__li__fixer')
	newbasketli.classList.add('fixer')
	newbasketli.innerHTML = `
	<div class="basketmodal__mains__basket__list__li">
		<label class="basketmodal__mains__basket__list__li__checkbox">
			<input type="checkbox">
			<div class="customcheckbox"></div>
		</label>
		<div class="basketmodal__mains__basket__list__li__item"><a class="basketmodal__mains__basket__list__li__imgbox" href="${link}"><img src="${image}" alt="${title}"></a>
		<div class="basketmodal__mains__basket__list__li__texts">
			<p class="basketmodal__mains__basket__list__li__category">${category}</p>
			<h6 class="basketmodal__mains__basket__list__li__title"><a href="${link}">${title}</a></h6>
		</div>
		</div>
		<div class="basketmodal__mains__basket__list__li__size"><span class="labelll">Size</span><span>${size}</span></div>
		<div class="basketmodal__mains__basket__list__li__color" style="--color: ${
			color ? color : 'transparent'
		}"><span class="labelll">Color</span></div>
		<div class="basketmodal__mains__basket__list__li__quantity" data-id="${id}">
		<div class="basket__minus ${qty > 1 ? '' : 'inactive'}">${minusvg}</div>
		<input type="number" value="${qty}" name="quantity">
		<div class="basket__plus">${plusvg}</div>
		</div>
		<div class="basketmodal__mains__basket__list__li__price"><span>${price}</span> USD</div>
		${
			size || color
				? `<div class="basketmodal__mains__basket__list__li__moredetails">more details</div>`
				: ''
		}
		<div class="basketmodal__mains__basket__list__li__removebtn" data-id="${id}"></div>
	</div>
	`
	ul.appendChild(newbasketli)
	let moredetailsbtn = newbasketli.querySelector(
		'.basketmodal__mains__basket__list__li__moredetails'
	)
	let removerbtn = newbasketli.querySelector(
		'.basketmodal__mains__basket__list__li__removebtn'
	)
	if (!!moredetailsbtn) {
		moredetailsbtn.addEventListener('click', () => {
			handleMoreDetails(moredetaills)
		})
	}
	removerbtn.addEventListener('click', async () => {
		let result = await handleRemoveFromBasket(removerbtn)
		console.log(result)
		updateBasketPrices()
	})
	// itemsinfo__list
	const itemsinfo__list = document.querySelector('.itemsinfo__list')
	let new__itemsinfo__list__li = document.createElement('div')
	new__itemsinfo__list__li.classList.add('itemsinfo__list__item')
	new__itemsinfo__list__li.inerHTML = `
		<p class="itemsinfo__list__item__title">${title}</p>
		<div class="itemsinfo__list__item__qtyprice">
		<div class="itemsinfo__list__item__qtyprice__qty">${qty}x</div>
		<div class="itemsinfo__list__item__qtyprice__price">${price} USD</div>
		</div>
	`
	itemsinfo__list.appendChild(new__itemsinfo__list__li)
}

// TODO: insert this 'appendBasketSmallUl' function on vasos backend code server
const appendBasketSmallUl = (id, title, qty = 1, price) => {
	let itemsinfo__list = document.querySelector('.itemsinfo__list')
	// small_ul.innerHTML = '' // RESET UL (currently only adding or removing one li and not needed)

	let newItem = document.createElement('div')
	newItem.classList.add('itemsinfo__list__item')
	newItem.dataset.id = id
	newItem.innerHTML = `
	<div class="itemsinfo__list__item">
		<p class="itemsinfo__list__item__title">${title}</p>
		<div class="itemsinfo__list__item__qtyprice">
			<div class="itemsinfo__list__item__qtyprice__qty">${qty}x</div>
			<div class="itemsinfo__list__item__qtyprice__price">${
				Math.round(price * 100) / 100
			} USD</div>
		</div>
	</div>
	`
	itemsinfo__list.appendChild(newItem)
}

let addBtns = document.querySelectorAll('.addinbasketbtn:not(.inform)')
let addToFavBtns = document.querySelectorAll('.addtofav')
let addToCompareBtns = document.querySelectorAll('.addtocompare')
addBtns = [...addBtns]
addToFavBtns = [...addToFavBtns]
addToCompareBtns = [...addToCompareBtns]
const addInBasket = async (id, btn) => {
	let response, data
	try {
		response = await axios.get(ADD_TO_BASKET_URL, {
			params: {
				id,
			},
		})
		if (response.data.ok) {
			data = response.data
			btn.classList.toggle('added')
			appendBasketUl(
				data.link,
				data.image,
				data.category,
				data.title,
				data.size ? data.size : false,
				data.color ? data.color : false,
				data.price,
				data.id,
				data.qty ? data.qty : 1
			)
			appendBasketSmallUl(data.id, data.title, data.qty, data.price)
			if (data.total > 0) {
				document
					.querySelector('header .header__basket')
					.classList.add('notempty')
				document
					.querySelector('.respomenu .header__basket')
					.classList.add('notempty')
			} else {
				document
					.querySelector('header .header__basket')
					.classList.remove('notempty')
				document
					.querySelector('.respomenu .header__basket')
					.classList.remove('notempty')
			}
			applyFixarIndexs()
			return data
		}
	} catch (error) {
		return console.log(error)
	}
}
const basketButton = document.querySelector('header .header__basket')
const basketButtonMobile = document.querySelector('.respomenu .header__basket')
const updateBasket = async (id, btn, qty, color = false, milligram = false) => {
	let response, data
	if (btn.classList.contains('inform') && btn.classList.contains('added')) {
		try {
			response = await axios.get(REMOVE_FROM_BASKET, {
				params: {
					id,
				},
			})
			console.log(response)
			if (response.data.ok) {
				data = response.data

				// not changable quantityInput
				let qtyInp = document.getElementById('quantity')
				qtyInp.value = 1
				document.querySelector(
					'.productinmain__info__basketform__quantity__minusbtn'
				).style.pointerEvents = 'all'
				document.querySelector(
					'.productinmain__info__basketform__quantity__plusbtn'
				).style.pointerEvents = 'all'
				qtyInp.style.pointerEvents = 'all'

				btn.classList.toggle('added')
				if (data.total > 0) {
					basketButton.classList.add('notempty')
					basketButtonMobile.classList.add('notempty')
				} else {
					basketButton.classList.remove('notempty')
					basketButtonMobile.classList.remove('notempty')
				}
			}
			// return alert('deleted')
		} catch (error) {
			console.log(error)
			alert('Something went wrong!')
		}
		return data
	} else {
		try {
			response = await axios.post(BASKET_UPDATE, {
				id,
				qty,
				color,
				milligram,
			})
			if (response.data.ok) {
				data = response.data
				// console.log(data)
				btn.classList.toggle('added')

				// changable quantityInput
				let qtyInp = document.getElementById('quantity')
				document.querySelector(
					'.productinmain__info__basketform__quantity__minusbtn'
				).style.pointerEvents = 'none'
				document.querySelector(
					'.productinmain__info__basketform__quantity__plusbtn'
				).style.pointerEvents = 'none'
				qtyInp.style.pointerEvents = 'none'

				if (data.total > 0) {
					document
						.querySelector('header .header__basket')
						.classList.add('notempty')
					document
						.querySelector('.respomenu .header__basket')
						.classList.add('notempty')
				} else {
					document
						.querySelector('header .header__basket')
						.classList.remove('notempty')
					document
						.querySelector('.respomenu .header__basket')
						.classList.remove('notempty')
				}
				return data
			}
		} catch (error) {
			return console.log(error)
		}
	}
}
const addInFavs = async (id, btn) => {
	let response, data
	try {
		response = await axios.get(ADD_TO_FAV_URL, {
			params: {
				id,
			},
		})
		if (response.data.ok) {
			data = response.data
			btn.classList.toggle('added')
			document.querySelector(
				'header .header__favourites span'
			).dataset.length = data.total
			document.querySelector(
				'.respomenu .header__favourites span'
			).dataset.length = data.total
			return data
		}
	} catch (error) {
		return console.log(error)
	}
}
const addInCompares = async (id, btn) => {
	let response, data
	try {
		response = await axios.get(ADD_TO_COMPARE_URL, {
			params: {
				id: id,
			},
		})
		if (response.data.ok) {
			data = response.data
			btn.classList.toggle('added')
			document.querySelector('header .header__smth span').dataset.length =
				data.total
			document.querySelector(
				'.respomenu .header__smth span'
			).dataset.length = data.total
			return data
		}
	} catch (error) {
		return console.log(error)
	}
}
if (addBtns[0]) {
	addBtns.forEach((btn) => {
		let flipAddSpan = btn.querySelector('.flip .add')
		let flipRemoveSpan = btn.querySelector('.flip .remove')
		flipAddSpan.style.setProperty(
			'--offsetwidth',
			`${flipAddSpan.scrollWidth + 1}px`
		)
		flipRemoveSpan.style.setProperty(
			'--offsetwidth',
			`${flipRemoveSpan.scrollWidth + 1}px`
		)
		btn.addEventListener('click', () => {
			addInBasket(+btn.dataset.id, btn)
		})
	})
}

if (addToFavBtns[0]) {
	addToFavBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			addInFavs(+btn.dataset.id, btn)
		})
	})
}
if (addToCompareBtns[0]) {
	addToCompareBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			addInCompares(+btn.dataset.id, btn)
		})
	})
}

// if basketform
let setAddBtnInForm = () => {
	let flipAddSpan = addInBag_InTheFormBtn.querySelector('.flip .add')
	let flipRemoveSpan = addInBag_InTheFormBtn.querySelector('.flip .remove')
	flipAddSpan.style.setProperty(
		'--offsetwidth',
		`${flipAddSpan.scrollWidth + 1}px`
	)
	flipRemoveSpan.style.setProperty(
		'--offsetwidth',
		`${flipRemoveSpan.scrollWidth + 1}px`
	)
}
if (!!basketform) {
	setAddBtnInForm()
	addInBag_InTheFormBtn.addEventListener('click', () => {
		let id = +addInBag_InTheFormBtn.id
		let qty = +basketform.quantity.value
		let color = +basketform.color.value
		let milligram = +basketform.milligram.value
		updateBasket(id, addInBag_InTheFormBtn, qty, color, milligram)
	})
}

const scrollToEle = (ele, paddingtop = 20) => {
	let elementScrollHeight = ele.offsetTop
	window.scrollTo(0, elementScrollHeight - paddingtop)
}

// Basket
const basketmodal = document.querySelector('.basketmodal')
const basketmodal__bg = document.querySelector('.basketmodal__bg')
const basketmodal__Xs = document.querySelectorAll('.basketmodal__X')

// TODO: insert this code on vasos server
const handleRemoveFromSmallBasket = (id) => {
	let item = document.querySelector(`.itemsinfo__list__item[data-id="${id}"]`)
	console.log(item)
	if (!!item) {
		item.remove()
	}
}
const handleRemoveFromBasket = async (el) => {
	let id = parseInt(el.dataset.id)

	let response, data
	try {
		response = await axios.post(BASKET_UPDATE, {
			id,
		})
		console.log(response)
	} catch (error) {
		console.log(error)
	}
	if (response.data.ok) {
		// remove from real basket
		let addBtnsOnDom = [
			...document.querySelectorAll(`.addinbasketbtn[data-id="${id}"]`),
		]
		addBtnsOnDom.forEach((each) => {
			each.classList.remove('added')
		})
		// TODO: insert this code on vasos server
		// remove from small basket
		handleRemoveFromSmallBasket(id)

		let fxrli = el.closest('.basketmodal__mains__basket__list__li__fixer')
		fxrli.remove()
		return new Promise((resolve, reject) => {
			resolve(true)
		})
	} else {
		return new Promise((resolve, reject) => {
			resolve(false)
		})
	}
}
const basketmodal__mains = document.querySelector('.basketmodal__mains')
const handleBasketClick = (on = true) => {
	if (on) {
		basketmodal__mains.classList.add('basket')
		basketmodal.classList.add('toggled')
		basketmodal__bg.classList.add('toggled')
		body.classList.add('noscroll')
	} else {
		basketmodal.classList.remove('toggled')
		body.classList.remove('noscroll')
		basketmodal__bg.classList.remove('toggled')
		setTimeout(() => {
			basketmodal__mains.className = 'basketmodal__mains'
		}, 400)
		// setTimeout(() => {
		// }, 400);
	}
}
// when dev mode
// handleBasketClick()
// when dev mode END

basketButton.addEventListener('click', () => {
	handleBasketClick()
})
basketButtonMobile.addEventListener('click', () => {
	handleBasketClick()
})
basketmodal__bg.addEventListener('click', () => {
	handleBasketClick(false)
})
basketmodal__Xs.forEach((each) => {
	each.addEventListener('click', () => {
		handleBasketClick(false)
	})
})

// moredetails
const handleMoreDetails = (btn) => {
	btn.closest(
		'.basketmodal__mains__basket__list__li__fixer'
	).classList.toggle('toggled')
}
let moredetaills = document.querySelectorAll(
	'.basketmodal__mains__basket__list__li__moredetails'
)
moredetaills = [...moredetaills]
if (moredetaills[0]) {
	moredetaills.forEach((each) => {
		each.addEventListener('click', () => {
			handleMoreDetails(each)
		})
	})
}
// rmvbuttons

let removebtnsInBasket = document.querySelectorAll(
	'.basketmodal__mains__basket__list__li__removebtn'
)
removebtnsInBasket = [...removebtnsInBasket]

removebtnsInBasket.forEach((each) => {
	each.addEventListener('click', async () => {
		let result = await handleRemoveFromBasket(each)
		console.log(result)
		updateBasketPrices()
	})
})
// updateprices function
const updateBasketPrices = (promocodeCut = 0) => {
	// el vars
	let subtotalSpan = document.querySelector(
		'.orderdetails__infos__value.subtotal span'
	)
	let productSpan = document.querySelector(
		'.orderdetails__infos__value.product span'
	)
	let salesSpan = document.querySelector(
		'.orderdetails__infos__value.sale span'
	)
	let totaltotalSpan = document.querySelector(
		'.orderdetails__totals__value span'
	)

	let subtotal = 0
	let product = 0
	let sales = 0
	let allBaskLis = [
		...document.querySelectorAll('.basketmodal__mains__basket__list__li'),
	]
	allBaskLis.forEach((li) => {
		let priceSpan = li.querySelector(
			'.basketmodal__mains__basket__list__li__price span'
		)
		let price = +priceSpan.innerText
		let sale = +priceSpan.dataset.sale
		product += price
		sales += sale
	})
	subtotal = product - sales
	// changeContent
	subtotalSpan.innerText = Math.round(subtotal * 100) / 100
	productSpan.innerText = Math.round(product * 100) / 100
	salesSpan.innerText = (Math.round(sales * 100) / 100) * -1
	totaltotalSpan.innerText = Math.round(subtotal * 100) / 100 - promocodeCut
}
updateBasketPrices()

// Basket END

// checkout basket
const handleCheckoutBtn = () => {
	document.querySelector('.basketmodal__mains').className =
		'basketmodal__mains ordering'
}
// tobuild
// handleCheckoutBtn()
// tobuild END
const checkoutbtn = document.querySelector('.checkoutbtn')
checkoutbtn.addEventListener('click', () => {
	handleCheckoutBtn()
})
const gobackfromcheckout = document.querySelector(
	'.basketmodal__mains__ordering__staticinfo__back'
)

gobackfromcheckout.addEventListener('click', () => {
	const basketmodalform = document.getElementById('basketmodalform')
	const item__restmobile__yellows = document.querySelector(
		'.item__restmobile__yellows'
	)
	if (+basketmodalform.dataset.pg > 1) {
		basketmodalform.dataset.pg = +basketmodalform.dataset.pg - 1
		item__restmobile__yellows.dataset.pg = +basketmodalform.dataset.pg - 1
	} else {
		document.querySelector('.basketmodal__mains').className =
			'basketmodal__mains basket'
	}
})
const handeCheckBag = (on = true) => {
	if (on) {
		document.querySelector('.itemsinfo__rest').classList.add('toggled')
		document.querySelector('.itemsinfo__rest__bg').classList.add('toggled')
	} else {
		document.querySelector('.itemsinfo__rest').classList.remove('toggled')
		document
			.querySelector('.itemsinfo__rest__bg')
			.classList.remove('toggled')
	}
}

const checkbag = document.querySelector('.item__restmobile__checkbag')
const offcheckbagX = document.querySelector('.itemsinfo__rest__X')
const checkbag__bg = document.querySelector('.itemsinfo__rest__bg')
checkbag.addEventListener('click', () => {
	handeCheckBag()
})
offcheckbagX.addEventListener('click', () => {
	handeCheckBag(false)
})
checkbag__bg.addEventListener('click', () => {
	handeCheckBag(false)
})

const editbagbtns = [...document.querySelectorAll('.itemsinfo__editbag')]
editbagbtns.forEach((each) => {
	each.addEventListener('click', () => {
		document.querySelector('.basketmodal__mains').className =
			'basketmodal__mains basket'
	})
})
const applyFixarIndexs = () => {
	const basketorderingcontents =
		document.querySelectorAll('.basketform > div')
	basketorderingcontents.forEach((each) => {
		if (!each.querySelector('.form__fixer')) {
			return
		} else {
			let fixars = [...each.querySelectorAll('.form__fixer')]
			// console.log(fixars)
			fixars[0] &&
				fixars.forEach((fixar, index) => {
					fixar.style.setProperty('--delay-que', index + 1)
				})
		}
	})
}
applyFixarIndexs()
const changeCheckoutBagContent = (pg = 1) => {
	const basketmodalform = document.getElementById('basketmodalform')
	basketmodalform.dataset.pg = pg
	const item__restmobile__yellows = document.querySelector(
		'.item__restmobile__yellows'
	)
	item__restmobile__yellows.dataset.pg = pg
}
const proctosheepTowhere = document.querySelectorAll('.proctosheep.towhere')
const proctosheepTopaytype = document.querySelectorAll('.proctosheep.topaytype')
proctosheepTowhere.forEach((each) => {
	each.addEventListener('click', () => {
		changeCheckoutBagContent(2)
	})
})
proctosheepTopaytype.forEach((each) => {
	each.addEventListener('click', () => {
		changeCheckoutBagContent(3)
	})
})
const checkoutBagNavBtns = [
	...document.querySelectorAll(
		'.basketmodal__mains__ordering__form__nav span'
	),
]
checkoutBagNavBtns.forEach((each, index) =>
	each.addEventListener('click', () => {
		changeCheckoutBagContent(index + 1)
	})
)
// checkout basket END

// VALIDATION FUNCTIONS
const nameChecker = (el, onInput = false, atleast = 5) => {
	let val = el.value
	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')
			el.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.classList.add('invalid')
			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')
			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')
			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

const emailChecker = (el, onInput = false) => {
	let val = el.value
	let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')
			el.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.classList.add('invalid')
			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')
			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')
			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

const repeatPassChecker = (el, inputToCheck, onInput = false) => {
	let repeatedVal = el.value
	let passVal = inputToCheck.value

	if (onInput) {
		if (repeatedVal === '') {
			el.classList.add('invalid')
			el.classList.remove('invalid-shown')
		} else if (repeatedVal !== passVal) {
			el.classList.add('invalid')
			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')
			el.classList.remove('invalid-shown')
		}
	} else {
		if (repeatedVal === '') {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.remove('invalid-shown')
		} else if (repeatedVal !== passVal) {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')
			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

// VALIDATIONS LOGIN
const loginform = document.getElementById('loginform')

// LOGIN INPUTS
const loginemail = document.getElementById('loginemail')
const loginpassword = document.getElementById('loginpassword')

loginemail.addEventListener('change', () => {
	emailChecker(loginemail, false)
})
loginpassword.addEventListener('change', () => {
	nameChecker(loginpassword, false, 2)
})
loginform.addEventListener('submit', (e) => {
	emailChecker(loginemail, false)
	nameChecker(loginpassword, false, 2)
	if (loginform.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		loginform.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})

// VALIDATIONS REGISTER
const registerform = document.getElementById('registerform')

// REGISTER INPUTS
const registeremail = document.getElementById('registeremail')
const registername = document.getElementById('registername')
const registerpassword = document.getElementById('registerpassword')
const registerconfirmpassword = document.getElementById(
	'registerconfirmpassword'
)

registeremail.addEventListener('change', () => {
	emailChecker(registeremail, false)
})
registername.addEventListener('change', () => {
	nameChecker(registername, false, 2)
})

registerpassword.addEventListener('change', () => {
	nameChecker(registerpassword, false, 2)
})
registerconfirmpassword.addEventListener('change', () => {
	repeatPassChecker(registerconfirmpassword, registerpassword)
})

registerform.addEventListener('submit', (e) => {
	emailChecker(registeremail, false)
	nameChecker(registername, false, 2)
	nameChecker(registerpassword, false, 2)
	repeatPassChecker(registerconfirmpassword, registerpassword)
	if (registerform.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		registerform.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})

if (profileToggle) {
	profileToggle.addEventListener('click', () => {
		loggedinmenu.classList.toggle('toggled')
	})
}

// ns

const nsClickHandler = (select, ns__ul, clickedLi, activetext) => {
	select.value = clickedLi.dataset.value
	activetext.dataset.value = clickedLi.innerText
	if (!!ns__ul.querySelector('li.active')) {
		ns__ul.querySelector('li.active').classList.remove('active')
	}
	clickedLi.classList.add('active')
	// remove toggled from ns
	select.parentElement.classList.remove('toggled')
}
const generateNs = (select) => {
	const ns__ul = select.nextElementSibling
	const activetext = select.previousElementSibling
	ns__ul.innerHTML = ''

	activetext.addEventListener('click', () => {
		if (!!select.closest('.form__fixer')) {
			if (select.parentElement.classList.contains('toggled')) {
				setTimeout(() => {
					select.closest('.form__fixer').style.overflow = 'hidden'
				}, 200)
			} else {
				select.closest('.form__fixer').style.overflow = 'visible'
			}
		}
		select.parentElement.classList.toggle('toggled')
	})
	;[...select.querySelectorAll('option')].forEach((option, index) => {
		let newLi = document.createElement('li')
		newLi.dataset.value = option.value
		newLi.innerText = option.innerText
		ns__ul.appendChild(newLi)

		// if (index === 0) {
		// }
		if (option.selected) {
			activetext.dataset.value = option.innerText
			nsClickHandler(select, ns__ul, newLi, activetext)
		}
		newLi.addEventListener('click', () => {
			nsClickHandler(select, ns__ul, newLi, activetext)
		})
	})
	window.addEventListener('load', () => {
		;[...document.querySelectorAll('.ns')].forEach((ns) => {
			let __height = ns.scrollHeight
			ns.style.setProperty('--height', __height + 'px')
		})
	})
}

// ns declares
const basketgender = document.getElementById('basketgender')
const cityselect = document.getElementById('cityselect')
const basketcity = document.getElementById('basketcity')

// TODO:
const genderselect = document.getElementById('genderselect')
if (basketgender) {
	generateNs(basketgender)
}
// TODOEND:

if (genderselect) {
	generateNs(genderselect)
}
if (cityselect) {
	generateNs(cityselect)
}
if (basketcity) {
	generateNs(basketcity)
}

// if wishlist
const formsec_qty_list = [...document.querySelectorAll('.formsec_qty')]
formsec_qty_list.forEach((each) => {
	// declarations
	let minusBtn = each.querySelector('.minus_quantity_in_wishlist')
	let input = each.querySelector('.inputquantity_in_wishlist')
	let plusBtn = each.querySelector('.plus_quantity_in_wishlist')
	// events
	minusBtn.addEventListener('click', () => {
		let oldInputVal = +input.value
		if (oldInputVal !== 1) {
			input.value = oldInputVal - 1
		}
		if (+input.value === 1) {
			minusBtn.classList.add('inactive')
		}
	})
	plusBtn.addEventListener('click', () => {
		input.value = +input.value + 1
		minusBtn.classList.remove('inactive')
	})
})

const basketClearner = () => {
	;[
		...document.querySelectorAll(
			'.basketmodal__mains__basket__list input:checked'
		),
	].forEach((each) => {
		each.closest('li')
			.querySelector('.basketmodal__mains__basket__list__li__removebtn')
			.click()
	})
}

const basketmodal__mains__basket__cleaner = document.querySelector(
	'.basketmodal__mains__basket__cleaner'
)

basketmodal__mains__basket__cleaner.addEventListener('click', basketClearner)

const basketform__radio__labels = [
	...document.querySelectorAll(
		'.basketform__paytype .basketform__radio__label input[type="radio"]'
	),
]

basketform__radio__labels.forEach((each) => {
	each.addEventListener('change', () => {
		;[
			...document.querySelectorAll(
				'.basketform__paytype .basketform__radio__label.withbanks input[type="radio"]'
			),
		].forEach((eachin) => {
			if (eachin.checked) {
				eachin.parentElement.classList.add('seld')
			} else {
				eachin.parentElement.classList.remove('seld')
			}
		})
	})
})

const bankinfomodal = document.querySelector('.bankinfomodal')
const bankinfomodal__bg = document.querySelector('.bankinfomodal__bg')
const bankinfomodal__X = document.querySelector('.bankinfomodal__X')

const bankname = document.querySelector('.bankname')
const bankiban = document.querySelector('.bankiban')
const bankrecipient = document.querySelector('.bankrecipient')
const bankdestination = document.querySelector('.bankdestination')

;[...document.querySelectorAll('div.banklogos__item')].forEach((each) => {
	each.addEventListener('click', () => {
		bankname.innerText = each.dataset.bankname
		bankiban.innerText = each.dataset.iban
		bankrecipient.innerText = each.dataset.recipient
		bankdestination.innerText = each.dataset.desination

		// show
		bankinfomodal.classList.add('toggled')
		bankinfomodal__bg.classList.add('toggled')
	})
})

bankinfomodal__bg.addEventListener('click', () => {
	bankinfomodal.classList.remove('toggled')
	bankinfomodal__bg.classList.remove('toggled')
})
bankinfomodal__X.addEventListener('click', () => {
	bankinfomodal.classList.remove('toggled')
	bankinfomodal__bg.classList.remove('toggled')
})

// profilemain mobile toggle TODO:
const profilemain__nav = document.querySelector('.profilemain__nav')
if (!!profilemain__nav) {
	profilemain__nav.addEventListener('click', () => {
		if (window.innerWidth < 1025) {
			profilemain__nav.classList.toggle('toggled')
		} else {
			profilemain__nav.classList.remove('toggled')
		}
	})
}
const fastorderbtn = document.querySelector('.fastorderbtn')
const fastordermodal = document.querySelector('.fastordermodal')
const fastordermodal__bg = document.querySelector('.fastordermodal__bg')
const fastordermodal__X = document.querySelector('.fastordermodal__X')

if (!!fastorderbtn) {
	fastorderbtn.addEventListener('click', () => {
		fastordermodal.classList.add('toggled')
		fastordermodal__bg.classList.add('toggled')
	})

	fastordermodal__bg.addEventListener('click', () => {
		fastordermodal.classList.remove('toggled')
		fastordermodal__bg.classList.remove('toggled')
	})

	fastordermodal__X.addEventListener('click', () => {
		fastordermodal.classList.remove('toggled')
		fastordermodal__bg.classList.remove('toggled')
	})
}

// VALIDATIONS CONTACT
const contactform = document.getElementById('contactform')

if (!!contactform) {
	// CONTACT INPUTS
	const contactemail = document.getElementById('contactemail')
	const contactfullname = document.getElementById('contactfullname')
	const contactsubject = document.getElementById('contactsubject')
	const contactmessage = document.getElementById('contactmessage')

	contactemail.addEventListener('change', () => {
		emailChecker(contactemail, false)
	})
	contactfullname.addEventListener('change', () => {
		nameChecker(contactfullname, false, 2)
	})
	contactsubject.addEventListener('change', () => {
		nameChecker(contactsubject, false, 2)
	})
	contactmessage.addEventListener('change', () => {
		nameChecker(contactmessage, false, 2)
	})

	contactform.addEventListener('submit', (e) => {
		emailChecker(contactemail, false)
		nameChecker(contactfullname, false, 2)
		nameChecker(contactsubject, false, 2)
		nameChecker(contactmessage, false, 2)

		if (contactform.querySelectorAll('.invalid')[0]) {
			e.preventDefault()
			contactform.querySelectorAll('.invalid').forEach((each) => {
				each.classList.add('invalid-shown')
			})
		}
	})
}
// TODO:
// VALIDATIONS new password form
const newpasswordform = document.getElementById('newpasswordform')

if (!!newpasswordform) {
	// new password form INPUTS
	const newpassword_newpass = document.getElementById('newpassword_newpass')
	const newpassword_newpassrepeat = document.getElementById(
		'newpassword_newpassrepeat'
	)

	newpassword_newpass.addEventListener('change', () => {
		nameChecker(newpassword_newpass, false, 2)
	})
	newpassword_newpassrepeat.addEventListener('change', () => {
		repeatPassChecker(newpassword_newpassrepeat, newpassword_newpass)
	})

	newpasswordform.addEventListener('submit', (e) => {
		nameChecker(newpassword_newpass, false, 2)
		repeatPassChecker(newpassword_newpassrepeat, newpassword_newpass)
		
		if (newpasswordform.querySelectorAll('.invalid')[0]) {
			e.preventDefault()
			newpasswordform.querySelectorAll('.invalid').forEach((each) => {
				each.classList.add('invalid-shown')
			})
		}
	})
}

const allInputTextareas = [
	...document.querySelectorAll('.input-div input, textarea'),
]
allInputTextareas.forEach((eachput) => {
	eachput.addEventListener('focus', () => {
		eachput.closest('.input-div').classList.add('focused')
	})
	eachput.addEventListener('blur', () => {
		eachput.closest('.input-div').classList.remove('focused')
	})
})
// TODOEND:
