'use strict';

let money = +prompt('Ваш бюджет на месяц', '10000'),
		time = prompt('Введите дату в формате YYYY-MM-DD', '2018-01-31'),
		appData = {
			yourBudget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: true,
			chooseExpenses: function() {
				for (let i = 1; i < 3; i++) {
					let a = prompt('Введите обязательную статью расходов', 'Статья № ' + i),
							b = +prompt('Во сколько она вам обойдется', i*1000);
							console.log(typeof(a));
							console.log(typeof(b));

					if (a != null && b != null && a != '' && b !='' && a.length < 50) {
						console.log('DONE');
						appData.expenses[a] = b;
					} else {
						alert('Вы ввели неверные данные или ввели пустую строку. Повторите ввод');
						i--;
						// alert(i);
					}
				}
			},
			detectDayBudget: function() {
				appData.budgetPerDay = +(appData.yourBudget/30).toFixed(2);
				document.writeln('Ваш бюджет на один день составляет ' + appData.budgetPerDay);
			},
			detectLevel: function (level) {
				if (level < 100) {
					return console.log('Минимальный уровень');
				} else if (level > 100 && level < 2000) {
					return console.log('Средний уровень');
				} else if (level > 2000) {
					return console.log('Высокий уровень');
				} else {
					return console.log('Уровень невозможно определить');
				}
			},
			chooseOptExpenses: function (count) {
				for (let i = 1; i <= count; i++) {
					let answer = prompt("Введите статью необязательных расходов", "Статья # " + i);
					appData.optionalExpenses[i] = answer;
				}
			},
			checkSavings: function () {
				if (appData.savings == true) {
					let save = +prompt("Какова сумма ваших накоплений?", 5000),
							percent = +prompt("Под какой процент?", 11);
					appData.monthIncome = (save/100/12*percent).toFixed(2);
					alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
				}
			},
			chooseIncome: function() {
				let a = false;
				while (a != true) {
					let items = prompt("Что вам принесет дополнительный доход (перечислите через запятую)", "проценты, фриланс, казино");
					if (items == null) {
						alert("Вы не можете отменить ввод!");
						// break;
					} else if (items == '') {
						alert("Вы не можете ввести пустую строку!");
						// break;
					} else {
						appData.income = items.split(', ');
						appData.income.push(prompt("Может есть еще какой источник?", "наследство"));
						appData.income.sort();
						document.writeln("Способы дополнительного заработка: <br> ");
						appData.income.forEach(function(item, index) {
							document.writeln((index+1) + ": " + item + "<br>");
						});
						a = true;
					}
				}
			}
		};



// appData.chooseExpenses();

// appData.detectDayBudget();

// appData.detectLevel(+appData.budgetPerDay);

// appData.chooseOptExpenses(3);

// appData.checkSavings();

appData.chooseIncome();

console.log("Наша программа включает следующие данные:")
for (let key in appData) {
	console.log("Ключ: " + key + " значение: " + appData[key]);
}



// for (let key in appData) {
// 	console.log("Свойство " + key + " имеет значение: " + appData[key]);
// }

// console.log(Object.keys(appData).length);

// let soldier = {
// 	health: 100,
// 	armor: 400,
// 	color: "red"
// };

// let john = {};
// john.__proto__ = soldier;