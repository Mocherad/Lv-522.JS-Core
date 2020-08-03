let elements = [7, "Lviv", false, null];
console.log(elements.length);
let userString = prompt("Type something?");
elements.push(userString);
console.log( elements[4] ); // П'ятий елемент массиву
elements.shift();
alert(elements);
