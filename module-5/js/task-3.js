class Storage{
	constructor(items) {
		this.items = items;

		this.getItems = function () {
			return this.items;
		}
		this.addItem = function (item) {
			this.items.push(item);
		}
		this.removeItem = function (item) {
			this.items.splice(this.items.indexOf(item), 1);
		}
	}
}

const storage = new Storage([
	'Нанитоиды',
	'Пролонгер',
	'Железные жупи',
	'Железные жупи',
	'Антигравитатор',
]);
  
const items = storage.getItems();
console.table(items);
  
storage.addItem('Дроид');
console.table(storage.items);
  
storage.removeItem('Пролонгер');
console.table(storage.items);