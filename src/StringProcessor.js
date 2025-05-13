import { StringUtils } from './StringUtils.js';

export class StringProcessor {
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