const RATING_BTN = document.querySelector('.submit__btn')

RATING_BTN.addEventListener('click', function() {
	let selectedRating = document.querySelector('input[name="rating"]:checked').value

	localStorage.setItem('selectedRating', selectedRating)

	window.location.href = 'thankYou-state.html'
})
