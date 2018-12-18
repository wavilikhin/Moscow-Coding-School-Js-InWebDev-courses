let BackColor = prompt('Какого цвета будет фон страницы?');
document.body.style['background-color'] = BackColor;

let FontColor = prompt('Какого цвета будет текст на странице?');
document.body.style['color'] = FontColor;

let Person = prompt('Введите имя человека, который вас вдохновляет');
let J = document.querySelector('.name');
J.innerHTML = Person;

let Portrait = prompt('Введите адрес картинки');
let DefaultPicture = document.querySelector('img');
DefaultPicture.setAttribute('src', 'Portrait');

let Text = prompt('Введите текст страницы');
let Bio = document.querySelector('.shortBio');
Bio.innerHTML = Text;

let Border = document.querySelector('.shortBio');
Border.className += ' animated';


