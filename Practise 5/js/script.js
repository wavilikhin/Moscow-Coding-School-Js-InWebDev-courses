let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const hOne = document.querySelector('.firstHeader');
const hTwo = document.querySelector('.secondHeader');
const hThree = document.querySelector('.thirdHeader');

const pOne = document.querySelector('.firstPrice');
const pTwo = document.querySelector('.secondPrice');
const pThree = document.querySelector('.thirdPrice');

const dOne = document.querySelector('.firstDiagramm');
const dTwo = document.querySelector('.secondDiagramm');
const dThree = document.querySelector('.thirdDiagramm');

const wOne = Number(crypto[0]['price']);
const wTwo = Number(crypto[1]['price']);
const wThree = Number(crypto[2]['price'])

hOne.innerHTML = crypto[0]['name'];
hTwo.innerHTML = crypto[1]['name'];
hThree.innerHTML = crypto[2]['name'];

pOne.innerHTML = crypto[0]['price'];
pTwo.innerHTML = crypto[1]['price'];
pThree.innerHTML = crypto[2]['price'];  

dOne.style.width = wOne + 'px';
dTwo.style.width = wTwo + 'px';
dThree.style.width = wThree + 'px';



