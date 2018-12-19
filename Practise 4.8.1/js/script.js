let Money = prompt('Сколько у вас с собой денег?');
let Apples  = prompt('Сколько вы купили яблок?');
let Loafs = prompt('Сколько вы купили батонов хлеба?');
let Apple = prompt('Сколько стоит одно яблоко?');
let Loaf = prompt('Сколько стоит один батон хлеба?');

let Summ = (Money, Apples, Loafs, Apple, Loaf) => {
	(Money >= ((Apple * Apples) + (Loaf * Loafs))) ? console.log('enough money') : console.log('not enough money');
	//if (Money >= (Apples * Apple) + (Loaf * Loafs)) {
		//console.log('У вас достаточно денег');
	//}
	//else {
		//console.log('У вас недостаточно денег');
	//}
}
console.log(Summ());

