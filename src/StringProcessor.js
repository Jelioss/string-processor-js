// Класс для обработки строк
export class StringProcessor {
	constructor() {
		this.strings = [];
	}

	// Добавление строки
	addString(str) {
		this.strings.push(str);
	}

	// Вывод строк
	getStrings() {
		return this.strings.join("<br>");
	}
}