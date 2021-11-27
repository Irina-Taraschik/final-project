// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {
	
	const items = [...document.querySelectorAll('.shop__item')]
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
