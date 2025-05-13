// Класс для обработки строк
class StringProcessor {
	constructor() {
		this.strings = [];
	}

	addString(str) {
		this.strings.push(str);
	}

	getStrings() {
		return this.strings
			.map(str => `Original: ${str}, Reversed: ${StringUtils.reverseString(str)}`)
			.join("<br>");
	}
}

// Класс для утилит
class StringUtils {
	static reverseString(str) {
		return str.split("").reverse().join("");
	}
}

// Инициализация и тестирование
const processor = new StringProcessor();
processor.addString("Hello");
processor.addString("World");
const output = document.getElementById("output");
if (output) {
	output.innerHTML = processor.getStrings();
} else {
	console.error("Output element not found");
}