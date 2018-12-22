const button = document.querySelector('button');
const par = document.querySelector('p');

let state = 'none';

button.addEventListener('click', function(){
	if(state == 'none') {
		par.style.display = 'block';
		state = 'block';
		button.innerHTML = 'Скрыть';
	} else {
		par.style.display = 'none';
		state = 'none';
		button.innerHTML = 'Показать';
	}
})