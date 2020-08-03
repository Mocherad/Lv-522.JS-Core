let elements = [1, 2, 3, 4] ;
let totalElements = 0
for (let i in elements) { // run 4 times
  totalElements = elements[i] + totalElements
  console.log(elements[i]);
}
alert(totalElements);

