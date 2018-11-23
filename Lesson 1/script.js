'use strict';

let money = prompt('Ваш бюджет на месяц', '10000'),
		time = prompt('Введите дату в формате YYYY-MM-DD', '2018-01-31'),
		appData = {
			yourBudget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: false
		};

let answer1 = prompt('Введите первую обязательную статью расходов', 'зарплата');
appData.expenses[answer1] = prompt('Во сколько она вам обойдется', 1000);

let answer2 = prompt('Введите вторую обязательную статью расходов', 'материалы');
appData.expenses[answer2] = prompt('Во сколько она вам обойдется', 2000);

document.writeln('Ваш бюджет на один день составляет ' + (appData.yourBudget/30).toFixed(2));

// let a1 = prompt('Введите первую обязательную статью расходов', 'зарплата'),
// 		a2 = prompt('Во сколько она вам обойдется', 1000);
// appData.expenses.a1 = a2;

// let answer2 = prompt('Введите вторую обязательную статью расходов', 'материалы');
// appData.expenses[answer2] = prompt('Во сколько она вам обойдется', 2000);