'use strict';

// console.log("Начинаем делать урок 5 задание 2");

let startBtn = document.getElementByID('start'),
		budgetValue = document.getElementsByClassName('budget-value')[0],
		dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
		levelValue = document.getElementsByClassName('level-value')[0],
		expensesValue = document.getElementsByClassName('expenses-value')[0],
		optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
		incomeValue = document.getElementsByClassName('income-value')[0],
		incomeValue = document.getElementsByClassName('income-value')[0],
		monthSavingsValue = document.getElementsByClassName('monthSavings-value')[0],
		monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
		yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

		

		values = document.querySelectorAll('div[Class$="value"]'),
		inputs = document.querySelectorAll('input[Class="expenses-item"]'),
		inputsOpt = document.querySelectorAll('input[Class="optionalexpenses-item"]'),
		approveBtn = document.querySelector('button[Class="expenses-item-btn"]'),
		approveOptBtn = document.querySelector('button[Class="optionalexpenses-btn"]'),
		calculateBtn = document.querySelector('button[Class="count-budget-btn"]');



