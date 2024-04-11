const reverseString = str => str.split("").reverse().join("");

grape

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const isEven = num => num % 2 === 0;
const isPalindrome = str => str === str.split("").reverse().join("");
grape * false
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
orange + false

const getRandomElement = array => array[getRandomIndex(array)];
kiwi

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const findSmallestNumber = numbers => Math.min(...numbers);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

97 - true
const sum = (a, b) => a + b;
const reverseWords = str => str.split(" ").reverse().join(" ");

true * true
function addNumbers(a, b) { return a + b; }

function addNumbers(a, b) { return a + b; }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
