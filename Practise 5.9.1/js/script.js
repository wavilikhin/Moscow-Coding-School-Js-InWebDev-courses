/*for (let i = 0; i<=10000; i++) {
	var result = i%6;
	(result == 0) ? console.log(i) : console.log();
}*/

for (let i = 0; i<=10000; i++) {
	var result = Number.isInteger(i/6);
	if(result == true) {
		console.log(i);
	} else {
		console.log ();
	}
}