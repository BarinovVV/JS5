'use strict';

let money = +prompt('Ваш бюджет на месяц', '10000'),
		time = prompt('Введите дату в формате YYYY-MM-DD', '2018-01-31'),
		appData = {
			yourBudget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: true
		};

// let answer1 = prompt('Введите первую обязательную статью расходов', 'зарплата');
// appData.expenses[answer1] = prompt('Во сколько она вам обойдется', 1000);

// let answer2 = prompt('Введите вторую обязательную статью расходов', 'материалы');
// appData.expenses[answer2] = prompt('Во сколько она вам обойдется', 2000);

// for (let i = 0; i < 2; i++) {
// 	let a = prompt('Введите первую обязательную статью расходов', ''),
// 			b = prompt('Во сколько она вам обойдется', '');
// 			console.log(typeof(a));
// 			console.log(typeof(b));

// 	if (a != null && b != null && a != '' && b !='' && a.length < 50) {
// 		console.log('DONE');
// 		appData.expenses[a] = b;
// 	} else {
// 		alert('Вы ввели неверные данные или ввели пустую строку. Повторите ввод');
// 		i--;
// 		// alert(i);
// 	}
// }

// let i = 0;
// while (i < 2) {
// 	let a = prompt('Введите первую обязательную статью расходов', ''),
// 			b = prompt('Во сколько она вам обойдется', '');
// 			console.log(typeof(a));
// 			console.log(typeof(b));

// 	if (a != null && b != null && a != '' && b !='' && a.length < 50) {
// 		console.log('DONE');
// 		appData.expenses[a] = b;
// 	} else {
// 		alert('Вы ввели неверные данные или ввели пустую строку. Повторите ввод');
// 		i--;
// 		// alert(i);
// 	}
// 	i++;
// }

let i = 1;
do {
	let a = prompt('Введите первую обязательную статью расходов', 'Статья № ' + i),
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
			i++;
} while (i < 3);

//Определение функции по выводу бюджета
function detectDayBudget() {
	appData.budgetPerDay = +(appData.yourBudget/30).toFixed(2);
	document.writeln('Ваш бюджет на один день составляет ' + appData.budgetPerDay);
}

//вызов функции и вывод бюджета на день на экран
detectDayBudget();

//Определение функции по определению уровня дохода
function detectLevel(level) {
	if (level < 100) {
		return console.log('Минимальный уровень');
	} else if (level > 100 && level < 2000) {
		return console.log('Средний уровень');
	} else if (level > 2000) {
		return console.log('Высокий уровень');
	} else {
		return console.log('Уровень невозможно определить');
	}
}

// let level = +appData.budgetPerDay;

//вызов функции и вывод уровня дохода в консоль
detectLevel(+appData.budgetPerDay);


//Определение функции по введению необязательных расходов
function chooseOptExpenses(count) {
	for (i = 1; i <= count; i++) {
		let answer = prompt("Введите статью необязательных расходов", "Статья # " + i);
		appData.optionalExpenses[i] = answer;
	}
}

//Вызов функции по введению необязательных расходов
chooseOptExpenses(3);

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма ваших накоплений?", 5000),
				percent = +prompt("Под какой процент?", 11);
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(2));
	}
}

checkSavings();

// switch (level) {
// 	case level < 100:
// 		console.log('Минимальный уровень');
// 		break;
// 	case level > 100 && level < 2000:
// 		console.log('Средний уровень');
// 		break;
// 	case level > 2000:
// 		console.log('Высокий уровень');
// 		break;
// 	default :
// 		console.log('Уровень невозможно определить');
// }

// let a = prompt('Нажмите кнопку отмена');

// console.log(typeof(a));
