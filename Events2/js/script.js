const button = document.querySelector('.but');
const planeOne = document.querySelector('.planeOne');
const planeTwo = document.querySelector('.planeTwo');
const planeThree = document.querySelector('.planeThree');
const tiger = document.querySelector('.tiger')
button.addEventListener('click', ()=>{
	planeOne.style.animationPlayState = 'running';
	planeTwo.style.animationPlayState = 'running';
	planeThree.style.animationPlayState = 'running';
})


window.onscroll = () => {
	if(scrollY >= 2600) {
		tiger.style.opacity = 1;
	} else {
		tiger.style.opacity = 0;
	}
}