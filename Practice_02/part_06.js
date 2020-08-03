let side01 = prompt("Set side 01");
let side02 = prompt("Set side 02");
let side03 = prompt("Set side 03");


let p = (side01 + side02 + side03)/2;
let s = p*(p - side01)*(p - side02)*(p - side03);
s = Math.sqrt(s);
let t = "Площа трикутника S = " + s;
alert(t);
if (side01 + side02 > side01 + side03 && side01 + side02  > side02 + side03) {
  alert("Прямокутний")
}
