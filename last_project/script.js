class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		++this.happiness;
	}
	hasRest() {
		++this.happiness;
	}
	hasMoney() {
		++this.happiness;
	}
	isSunny() {
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=654bf270ba7edb6d1d2a0975fe094b69'
		const method = 'GET'
		
		var request = new XMLHttpRequest()

		request.open(method, url)
		request.send();

		request.addEventListener('readystatechange', function() {
			
			if (request.status === 200 && request.readyState === 4) {
				
				var responseText = request.responseText
                var responseObject = JSON.parse(responseText)
                var Temp = responseObject.main.temp
                console.log(Temp)

                if(Temp < 15) {
                	++this.happiness
                } else {
                	return this.happiness
                }

			}
		})
	}
}


const form = document.querySelector('form');

form.onsubmit = function(e) {
	e.preventDefault();

const nameVars = document.getElementsByName('name');
const catVars = document.getElementsByName('cat');
const restVars = document.getElementsByName('rest');
const moneyVars = document.getElementsByName('money');


const CurrentUser = new Person(nameVars[0].value)
if(catVars[0].type == 'radio' && catVars[0].checked) {
	CurrentUser.hasCat()
}
if(restVars[0].type == 'radio' && restVars[0].checked) {
	CurrentUser.hasRest()
}
if(moneyVars[0].type == 'radio' && moneyVars[0].checked) {
	CurrentUser.hasMoney()
}

CurrentUser.isSunny()

console.log(catVars)
console.log(restVars)
console.log(moneyVars)
console.log(CurrentUser)

var userName = document.querySelector('.personName')
var userEmoji = document.querySelector('.icon')

userName.innerHTML = CurrentUser.name + ':';

if(CurrentUser.happiness == 4)	{
	userEmoji.innerHTML = "😁"
} else if(CurrentUser.happiness == 3) {
	userEmoji.innerHTML = "😐"
} else if(CurrentUser.happiness == 2) {
	userEmoji.innerHTML = "😐"
} else {
	userEmoji.innerHTML = "☹️"
}

}

