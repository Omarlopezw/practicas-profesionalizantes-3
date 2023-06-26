import { HTMLCalculator } from './js/calculator.js'
import { CalculatorBackendModel } from './js/model/CalculatorBackendModel.js'

function main()
{
	alert('Starting application...');

	let calculator = new HTMLCalculator(CalculatorBackendModel);

	document.body.appendChild(calculator)
}

window.onload = main;