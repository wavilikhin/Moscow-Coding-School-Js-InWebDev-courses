const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
const openmenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closemenu = document.querySelector('.closeMenu');

let state = 'none';
request.addEventListener('click', function(){
	if(state == 'none') {
		popup.style.display = 'flex';
		state = 'flex';
	} else {
		popup.style.display = 'none';
		state = 'none';
	}
})

openmenu.addEventListener('click', function(){
	menu.style.left = '0'
})

closemenu.addEventListener('click', function(){
	menu.style.left = '-50vw'
})