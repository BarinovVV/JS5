'use strict';

let money = +prompt('Ваш бюджет на месяц', '10000'),
		time = prompt('Введите дату в формате YYYY-MM-DD', '2018-01-31'),
		appData = {
			yourBudget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: false
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

let i = 0;
do {
	let a = prompt('Введите первую обязательную статью расходов', ''),
			b = prompt('Во сколько она вам обойдется', '');
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
} while (i < 2);

appData.budgetPerDay = (appData.yourBudget/30).toFixed(2);

document.writeln('Ваш бюджет на один день составляет ' + appData.budgetPerDay);


let level = +appData.budgetPerDay;

if (level < 100) {
	console.log('Минимальный уровень');
} else if (level > 100 && level < 2000) {
	console.log('Средний уровень');
} else if (level > 2000) {
	console.log('Высокий уровень');
} else {
	console.log('Уровень невозможно определить');
}
 

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
