class Customer {
	constructor(name) {
		this.name = name;
	}
	bought() {
		return 'Куплено!';
	}
}

class childCustomer extends Customer {
	getPresent() {
		return 'Шарик в подарок!';
	}
}

const Parent = new Customer('Иван')
console.log(Parent.name)
console.log(Parent.bought())

const Baby = new childCustomer('Маша')
console.log(Baby.name)
console.log(Baby.getPresent())