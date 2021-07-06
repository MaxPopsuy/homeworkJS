class User {
	constructor(userData) {
		this.name = userData.name;
		this.age = userData.age;
		this.followers = userData.followers;

		this.getInfo = function () {
			console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers.`);
		}
	}
}

const mango = new User({
	name: "Mango",
  age: 2,
  followers: 20,
});
const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo();
mango.getInfo();
