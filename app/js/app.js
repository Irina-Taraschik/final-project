// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)



document.addEventListener('DOMContentLoaded', () => {
	
	const items = [...document.querySelectorAll('.shop__items')]
	const left = document.querySelector('#left')
	const right = document.querySelector('#right')
	const count = document.querySelector('.shop__arrow-number')
	
	let el = 0;
	function firstRender(params) {
		items.forEach((el, i) => {
			if (i === 0) {
				el.classList.add('active')
			}
		})
		count.textContent = el + 1
	}
	firstRender();

	function changeSlide() {
		
		items.forEach((el) => {
			el.classList.remove('active')
		})
		items[el].classList.add('active')
		count.textContent = el + 1
	}

	left.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('left', el);
		if (el === 0) {
			el = items.length - 1
		} else {
			el = el - 1
		}
		changeSlide()
	})

	right.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('right', el);
		if (el === items.length - 1) el = 0
		else el = el + 1
		changeSlide()
	})

	})

document.addEventListener('DOMContentLoaded', () => {
	
	const itemsNew = [...document.querySelectorAll('.new__items')]
	const leftNew = document.querySelector('#leftNew')
	const rightNew = document.querySelector('#rightNew')
	const countNew = document.querySelector('.new__arrow-number')
		
	let el = 0;
	function firstRender(params) {
		itemsNew.forEach((el, i) => {
			if (i === 0) {
				el.classList.add('active')
			}
		})
		countNew.textContent = el + 1
	}
	firstRender();
	
	function changeSlide() {
			
		itemsNew.forEach((el) => {
			el.classList.remove('active')
		})
		itemsNew[el].classList.add('active')
		countNew.textContent = el + 1
	}
	
	leftNew.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('left', el);
		if (el === 0) {
			el = itemsNew.length - 1
		} else {
			el = el - 1
		}
		changeSlide()
	})
	
	rightNew.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('right', el);
		if (el === itemsNew.length - 1) el = 0
		else el = el + 1
		changeSlide()
	})
	
})

document.addEventListener('DOMContentLoaded', () => {
	
	const itemsStories = [...document.querySelectorAll('.stories__items')]
	const leftStories = document.querySelector('#leftStories')
	const rightStories = document.querySelector('#rightStories')
	const countStories = document.querySelector('.stories__arrow-number')
		
	let el = 0;
	function firstRender(params) {
		itemsStories.forEach((el, i) => {
			if (i === 0) {
				el.classList.add('active')
			}
		})
		countStories.textContent = el + 1
	}
	firstRender();
	
	function changeSlide() {
			
		itemsStories.forEach((el) => {
			el.classList.remove('active')
		})
		itemsStories[el].classList.add('active')
		countStories.textContent = el + 1
	}
	
	leftStories.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('left', el);
		if (el === 0) {
			el = itemsStories.length - 1
		} else {
			el = el - 1
		}
		changeSlide()
	})
	
	rightStories.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('right', el);
		if (el === itemsStories.length - 1) el = 0
		else el = el + 1
		changeSlide()
	})
	
})
