const faq__tabs__select = document.getElementById('faq__tabs__select')

window.addEventListener('load', () => {
	setTimeout(() => {
		document
			.querySelector('.faq__contents')
			.classList.remove('no-transition')
		;[...document.querySelectorAll('.faq__contents__li')].forEach(
			(each, index) => {
				each.style.setProperty(
					'--height',
					each.scrollHeight + 20 + 'px'
				)
			}
		)
	}, 1000)
})

const changeTab = (tabli) => {
  if (tabli.classList.contains('active')) return
	const id = tabli.dataset.id
	const content = document.querySelector(
		`.faq__contents__li[data-id="${id}"]`
	)
	;[...document.querySelectorAll('.faq__tabs__li')].forEach((each) =>
		each.classList.remove('active')
	)
	;[...document.querySelectorAll('.faq__contents__li')].forEach((each) =>
		each.classList.remove('active')
	)
	tabli.classList.add('active')
	setTimeout(() => {
		content.classList.add('active')
		document
			.querySelector('.faq')
			.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, 1500)
}

faq__tabs__select.addEventListener('click', () => {
	faq__tabs__select.classList.add('open')
})
faq__tabs__select.addEventListener('blur', () => {
	faq__tabs__select.classList.remove('open')
})
faq__tabs__select.addEventListener('change', () => {
	const id = faq__tabs__select.value
	const tabli = document.querySelector(`.faq__tabs__li[data-id="${id}"]`)
	changeTab(tabli)
})
;[...document.querySelectorAll('.faq__tabs__li')].forEach((tabli) => {
  tabli.addEventListener('click', () => {
    if (window.innerWidth < 1025) return
		changeTab(tabli)
	})
})
