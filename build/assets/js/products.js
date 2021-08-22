// import regeneratorRuntime from '@babel/runtime/regenerator'
// import autoGrowSelect from './components/autoGrowSelect'
// import changeLoaderState from './components/changeLoaderState';
// import axios from 'axios'
// FILTER
// switch disabled sort select
const productsmain__filters__content = document.querySelector(
	'.productsmain__filters__content'
)
let sortmob = document.getElementById('sortmob')
let sort = document.getElementById('sort')
let sortParent = document.querySelector('.productsmain__filter.sort')
const switchSortSelsActivness = () => {
	if (window.innerWidth > 1024) {
		sortmob.disabled = true
		sort.disabled = false
		sortParent.style.display = ''
	} else {
		sortmob.disabled = false
		sort.disabled = true
		sortParent.style.display = 'none'
	}
}
switchSortSelsActivness()
window.addEventListener('resize', () => {
	switchSortSelsActivness()
})
// main
let productsmain__mobilebtns = document.querySelector(
	'.productsmain__mobilebtns'
)
let filterForm = document.getElementById('filterform')
let productsmain__filters__X = document.querySelector(
	'.productsmain__filters__X'
)
let productsmain__mobilebtns__filterbtn = document.querySelector(
	'.productsmain__mobilebtns__filterbtn'
)
let productsmainUl = document.querySelector('.productsmain__items')
let comparesvg = `
<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M18 10C18 9.73479 17.8946 9.48043 17.7071 9.2929C17.5196 9.10536 17.2652 9 17 9H5.40999L7.70999 6.71C7.89829 6.5217 8.00408 6.2663 8.00408 6C8.00408 5.7337 7.89829 5.47831 7.70999 5.29C7.52168 5.1017 7.26629 4.99591 6.99999 4.99591C6.73369 4.99591 6.47829 5.1017 6.28999 5.29L2.28999 9.29C2.15123 9.43063 2.05723 9.6092 2.01986 9.80319C1.98248 9.99718 2.00341 10.1979 2.07999 10.38C2.15501 10.5626 2.2824 10.7189 2.44613 10.8293C2.60985 10.9396 2.80256 10.999 2.99999 11H17C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10ZM21.92 13.62C21.845 13.4374 21.7176 13.2811 21.5538 13.1707C21.3901 13.0604 21.1974 13.001 21 13H6.99999C6.73477 13 6.48042 13.1054 6.29288 13.2929C6.10534 13.4804 5.99999 13.7348 5.99999 14C5.99999 14.2652 6.10534 14.5196 6.29288 14.7071C6.48042 14.8946 6.73477 15 6.99999 15H18.59L16.29 17.29C16.1963 17.383 16.1219 17.4936 16.0711 17.6154C16.0203 17.7373 15.9942 17.868 15.9942 18C15.9942 18.132 16.0203 18.2627 16.0711 18.3846C16.1219 18.5064 16.1963 18.617 16.29 18.71C16.383 18.8037 16.4936 18.8781 16.6154 18.9289C16.7373 18.9797 16.868 19.0058 17 19.0058C17.132 19.0058 17.2627 18.9797 17.3846 18.9289C17.5064 18.8781 17.617 18.8037 17.71 18.71L21.71 14.71C21.8487 14.5694 21.9427 14.3908 21.9801 14.1968C22.0175 14.0028 21.9966 13.8021 21.92 13.62V13.62Z"
        fill="white"
    ></path>
</svg>
`
let favouritesvg = `
<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
    d="M20.16 5.00001C19.1 3.93722 17.6948 3.28855 16.1983 3.17118C14.7019 3.05381 13.2128 3.47548 12 4.36001C10.7277 3.41365 9.14399 2.98452 7.56792 3.15905C5.99185 3.33358 4.54044 4.09879 3.50597 5.3006C2.47151 6.5024 1.93082 8.05153 1.9928 9.63603C2.05478 11.2205 2.71482 12.7227 3.84 13.84L10.05 20.06C10.57 20.5718 11.2704 20.8586 12 20.8586C12.7296 20.8586 13.43 20.5718 13.95 20.06L20.16 13.84C21.3276 12.6653 21.9829 11.0763 21.9829 9.42001C21.9829 7.76374 21.3276 6.17475 20.16 5.00001ZM18.75 12.46L12.54 18.67C12.4693 18.7414 12.3852 18.798 12.2925 18.8367C12.1999 18.8753 12.1004 18.8952 12 18.8952C11.8996 18.8952 11.8001 18.8753 11.7075 18.8367C11.6148 18.798 11.5307 18.7414 11.46 18.67L5.25 12.43C4.46576 11.6284 4.02661 10.5515 4.02661 9.43001C4.02661 8.30855 4.46576 7.23167 5.25 6.43001C6.04916 5.641 7.12697 5.19858 8.25 5.19858C9.37303 5.19858 10.4508 5.641 11.25 6.43001C11.343 6.52374 11.4536 6.59814 11.5754 6.6489C11.6973 6.69967 11.828 6.72581 11.96 6.72581C12.092 6.72581 12.2227 6.69967 12.3446 6.6489C12.4664 6.59814 12.577 6.52374 12.67 6.43001C13.4692 5.641 14.547 5.19858 15.67 5.19858C16.793 5.19858 17.8708 5.641 18.67 6.43001C19.465 7.22116 19.9186 8.2922 19.9335 9.4137C19.9485 10.5352 19.5236 11.6179 18.75 12.43V12.46Z"
    fill="white"
></path>
</svg>
`
let addtobagsvg = `
<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
					fill="#131313"
				></path></svg
			>
`
let filterformbtn = document.getElementById('filterformbtn')
productsmain__mobilebtns__filterbtn.addEventListener('click', () => {
	// mobile toggler minimize
	filterForm.classList.add('toggled')
	header__bg.classList.add('toggled')
	body.classList.add('noscroll')
})
productsmain__filters__X.addEventListener('click', () => {
	// mobile toggler minimize
	filterForm.classList.remove('toggled')
	header__bg.classList.remove('toggled')
	body.classList.remove('noscroll')
})
filterForm.addEventListener('submit', async (e) => {
	e.preventDefault()
	filterForm = document.querySelector('.productsmain__filters__content')
	let data = new FormData(e.target)
	let dataToSend = {}
	for (let i of data.entries()) {
		if (dataToSend[i[0]] !== undefined) {
			let old = dataToSend[i[0]]
			console.log(typeof old)
			if (old[1]) {
				dataToSend[i[0]].push(i[1])
			} else {
				dataToSend[i[0]] = [old]
				dataToSend[i[0]].push(i[1])
			}
		} else {
			dataToSend[i[0]] = i[1]
		}
	}
	// console.log(dataToSend)
	let response
	changeLoaderState()
	try {
		response = await axios.post(SEND_FILTER_FORM, dataToSend)
	} catch (error) {
		console.log(error)
	}
	const products = response.data.products
	productsmainUl.innerHTML = ``
	products.forEach((prod) => {
		let newLi = document.createElement('li')
		newLi.classList.add('homemain__sales__item')
		newLi.dataset.id = prod.id
		newLi.innerHTML = `
        <div class="homemain__sales__item__saving">
	<span>save </span><span>${
		Math.floor(Math.random() * 30 * 100) / 100
	}</span><span> USD</span>
</div>
<a class="homemain__sales__item__imgbox" href="productin.html">
	<img
		src="${prod.image_link}"
		alt=""
	/>
</a>
<div class="homemain__sales__item__textcontent">
	<p class="homemain__sales__item__category">${prod.brand}</p>
	<h5 class="homemain__sales__item__title">${prod.name}</h5>
	<div class="homemain__sales__item__bagNprice addinbasketbtn" data-id="${
		prod.id
	}">
		<div class="addtobag">
            ${addtobagsvg}
			<div class="flip">
				<span class="add">add to bag</span>
				<span class="remove">remove</span>
			</div>
		</div>
		<div class="homemain__sales__item__prices">
			<div class="homemain__sales__item__price discount">
				<span>${prod.price}</span> USD
			</div>
			<div class="homemain__sales__item__price current">
				<span>${prod.price}</span> USD
			</div>
		</div>
	</div>
	<div class="homemain__sales__item__hoverbtns">
		<div class="homemain__sales__item__addtofav addtofav">
            ${favouritesvg}
		</div>
		<div class="homemain__sales__item__addtocompare addtocompare">
            ${comparesvg}
		</div>
	</div>
</div>

        `
		let pages = Math.floor(products.length / 9)
		console.log(pages)
		productsmainUl.appendChild(newLi)
		let btn = newLi.querySelector('.addinbasketbtn')
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
			addInBasket(btn.dataset.id, btn)
		})
	})
	console.log(products)
	const brand = `brand=${response.data.brand}`
	const page = `page=${response.data.page}`
	history.pushState(response.data.brand, page, `?${brand}&${page}`)
	setTimeout(() => {
		changeLoaderState(false)
	}, 700)
})
const filters = document.querySelectorAll('.productsmain__filter')
// const filters = document.querySelectorAll('.productsmain__filter:not(.brand):not(.color)')

// makeli active
const niceLiClickHandler = (li, multiple = false, notoggle = false) => {
	let select = li.closest('.productsmain__filter').querySelector('select')
	let niceSelect = li
		.closest('.productsmain__filter')
		.querySelector('.productsmain__filter__niceselect')
	let niceText = li
		.closest('.productsmain__filter')
		.querySelector('.productsmain__filter__niceselect__activetext')

	if (multiple) {
		if (li.dataset.value === '0') {
			// unselect all other options
			select
				.querySelectorAll('option')
				.forEach((each) => (each.selected = false))
			// remove active from niceLis
			niceSelect
				.querySelector('ul')
				.querySelectorAll('li')
				.forEach((niceli) => {
					niceli.classList.remove('active')
				})
		} else {
			let firstOption = select.querySelector(`option[value="0"]`)
			firstOption.selected = false
			niceSelect
				.querySelector('ul')
				.querySelector('li[data-value="0"]')
				.classList.remove('active')
		}
		let itsOption = select.querySelector(
			`option[value="${li.dataset.value}"]`
		)
		li.classList.toggle('active')
		if (!niceSelect.querySelector('li.active')) {
			li.classList.toggle('active')
		} else {
			itsOption.selected = !itsOption.selected
			if ([...niceSelect.querySelectorAll('li.active')].length > 1) {
				// fill niceText with label's value
				let filterLabel = li
					.closest('.productsmain__filter')
					.querySelector('.productsmain__filter__label')
				niceText.dataset.value = filterLabel.innerText
			} else {
				// fill niceText with the only selected option
				niceText.dataset.value = li.innerText
			}
		}
	} else {
		// change real select value
		select.value = li.dataset.value
		// removeOldActive
		if (!!niceSelect.querySelector('li.active'))
			niceSelect.querySelector('li.active').classList.remove('active')
		// add New Active
		niceText.dataset.value = li.innerText
		li.classList.add('active')
		if (!notoggle) niceText.click()
	}
}

// autogrow

// make niceselects
const createNiceSelect = (filterDiv) => {
	let select = filterDiv.querySelector('select')
	let isMultiple = select.multiple
	let options = [...select.querySelectorAll('option')]
	const niceSelect = filterDiv.querySelector(
		'.productsmain__filter__niceselect'
	)
	const niceText = filterDiv.querySelector(
		'.productsmain__filter__niceselect__activetext'
	)
	const niceUl = filterDiv.querySelector('.productsmain__filter__niceul')

	if (isMultiple) niceSelect.classList.add('multiple')
	// niceText click does toggle
	niceText.addEventListener('click', () => {
		if (isMultiple && niceSelect.classList.contains('toggled')) {
			filterformbtn.click()
		}
		let allniceselect = [
			...document.querySelectorAll('.productsmain__filter__niceselect'),
		]
		// console.log(allniceselect)
		// let isAnotherToggled = false
		niceSelect.classList.toggle('toggled')
		allniceselect.forEach((each, ind) => {
			if (each !== niceSelect) {
				if (each.classList.contains('toggled')) {
					if (isMultiple)
						each.querySelector(
							'.productsmain__filter__niceselect__activetext'
						).click()
					else each.classList.remove('toggled')
				}
			}
		})
	})

	options.forEach((option, index) => {
		let niceLi = document.createElement('li')
		niceLi.dataset.value = option.value
		niceLi.innerText = option.innerText
		niceUl.appendChild(niceLi)
		if (option.selected) niceLiClickHandler(niceLi, isMultiple, true)
		niceLi.addEventListener('click', async () => {
			niceLiClickHandler(niceLi, isMultiple)
			// submit form
			if (!isMultiple) {
				filterformbtn.click()
			}
		})
	})
	autoGrowSelect(niceSelect)
}

filters.forEach((filter) => {
	createNiceSelect(filter)
})

window.addEventListener('scroll', () => {
	if (productsmain__mobilebtns.offsetTop > 206) {
		productsmain__mobilebtns.classList.add('scrolled')
	} else {
		productsmain__mobilebtns.classList.remove('scrolled')
	}

	if (productsmain__filters__content.offsetTop <= window.pageYOffset) {
		productsmain__filters__content.classList.add('scrolled')
	} else {
		productsmain__filters__content.classList.remove('scrolled')
	}
})
window.addEventListener('load', () => {
	// filterformbtn.click()
})