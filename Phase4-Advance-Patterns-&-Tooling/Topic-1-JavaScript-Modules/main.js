import sayBye, { sayHello } from './greetings.js';
import { add, multiply } from '../Topic-1-JavaScript-Modules/utils/math.js';
import { toUpper, reverse } from './utils/string.js';
import { getTime, getToday } from './utils/date.js';

console.log(sayHello("Akbar")); // Output: Hello, Akbar!
console.log(sayBye("Akbar"));

console.log(add(10, 20));
console.log(multiply(10, 50));

console.log(toUpper("akbar"));
console.log(reverse("JavaScript"));

console.log(getTime());
console.log(getToday());







