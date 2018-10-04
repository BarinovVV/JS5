// var yourBudget = +prompt("Ваш бюджет?", "10000");
// var nameShop = prompt("Название вашего магазина", "Мой магазин");
// console.log(budget);
// console.log(nameShop);

var mainList = {
	budget: +prompt("Ваш бюджет?", "10000"),
	shopName: prompt("Название вашего магазина", "Мой магазин"),
	shopGoods: [],
	employers: {},
	open: true
};


for(let i = 0; i < 3; i++){
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "тип товара");
}

console.log("Ваш бюджет на 1 день: " + mainList.budget / 30);

