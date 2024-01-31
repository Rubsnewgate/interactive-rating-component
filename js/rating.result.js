let selectedRating = localStorage.getItem('selectedRating')

if (selectedRating) {
	document.querySelector('.rate-result__value').textContent = selectedRating
}
else {
	document.querySelector('.rate-result__value').textContent = 'N/A'
}
