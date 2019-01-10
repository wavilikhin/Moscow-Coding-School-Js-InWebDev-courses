const form = document.forms[0];
const result = document.querySelector('.total')
form.onsubmit = function(e) {
	e.preventDefault();
	result.innerHTML = Math.sin(form.elements.sinus.value);
}