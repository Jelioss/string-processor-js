import { StringProcessor } from './StringProcessor.js';

// Инициализация и тестирование
const processor = new StringProcessor();
processor.addString("Hello");
processor.addString("World");
document.getElementById("output").innerHTML = processor.getStrings();