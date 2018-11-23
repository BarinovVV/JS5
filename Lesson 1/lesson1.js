'use strict';

let money = prompt('Ваш бюджте на месяц', '10000'),
		time = prompt('Ddtlbnt дату в формате YYYY-MM-DD', '2018-01-31'),
		appData = {
			yourBudget: money,
			timeData: time,
			expenses: {

			},
			optionalExpenses: {

			},
			income: [],
			savings: false
		};

