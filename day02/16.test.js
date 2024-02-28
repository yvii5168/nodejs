const TIME = require('./15.dateFormat');

const dt = new Date();

console.log(dt);

const newDT = TIME.dateFormat(dt);
console.log(newDT);