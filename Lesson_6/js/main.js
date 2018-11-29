'use strict';

console.log("Начинаем делать урок 6");

let startBtn = document.getElementById('start'),
		budgetValue = document.getElementsByClassName('budget-value')[0],
		dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
		levelValue = document.getElementsByClassName('level-value')[0],
		expensesValue = document.getElementsByClassName('expenses-value')[0],
		optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
		incomeValue = document.getElementsByClassName('income-value')[0],
		monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
		yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

		expensesItem = document.getElementsByClassName('expenses-item'),
		optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

		expensesBtn = document.getElementsByTagName('button')[0],
		optionalExpensesBtn = document.getElementsByTagName('button')[1],
		countBtn = document.getElementsByTagName('button')[2],

		incomeItem = document.querySelector('.choose-income'),
		checkSavings = document.querySelector('#savings'),
		sumValue = document.querySelector('.choose-sum'),
		percentValue = document.querySelector('.choose-percent'),
		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value'),

		myBody = document.querySelector('body');

let money, time;

countBtn.disabled = true;

startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '2018-01-31');
	money = +prompt('Ваш бюджет на месяц', '10000');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	appData.yourBudget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed(2);
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	countBtn.disabled = false;
});

expensesBtn.disabled = true;

myBody.addEventListener('input', function(e) {
	if (expensesItem[0].value != '' && expensesItem[1].value != '' && expensesItem[2].value != '' && expensesItem[3].value != '') {
		expensesBtn.disabled = false;
	}

});

expensesBtn.addEventListener('click', function() {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
				b = +expensesItem[++i].value;

		if (a != null && b != null && a != '' && b !='') {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			alert('Вы ввели неверные данные или ввели пустую строку. Повторите ввод');
			i--;
		}
	}
	expensesValue.textContent = sum.toFixed(2);
});

// optionalExpensesBtn.disabled = true;
optionalExpensesBtn.addEventListener('click', function() {
	let sum = 0;
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = +optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = +opt;
		sum += +opt;
		optionalExpensesValue.textContent = sum.toFixed(2);
		// optionalExpensesValue.textContent += +appData.optionalExpenses[i];
	}
});

function sumObj(obj) {
	let rez = 0;
	for(let key in obj) {
	 rez += obj[key];
	 }
	return rez;
	};
countBtn.addEventListener('click', function() {

	if (appData.yourBudget != undefined) {
		appData.budgetPerDay = +((appData.yourBudget - sumObj(appData.expenses))/30).toFixed(2);
		dayBudgetValue.textContent = appData.budgetPerDay;
		let level = appData.budgetPerDay;

		if ( level < 100) {
			levelValue.textContent = 'Низкий уровень';
		} else if (level > 100 && level < 2000) {
			levelValue.textContent = 'Средний уровень';
		} else if (level > 2000) {
			levelValue.textContent = 'Высокий уровень';
		} else {
			levelValue.textContent = 'Уровень невозможно определить';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});


sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
				percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
				percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});

let appData = {
			yourBudget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: false,
		};

