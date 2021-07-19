"use strict";
/* function soma(num1:number, num2:number) {
    return num1+num2;
}

let numeroa = 10;
let numerob = 15;

let resultado = soma(numeroa,numerob);

console.log(resultado); */
function print() {
    let Estado;
    (function (Estado) {
        Estado[Estado["SP"] = 0] = "SP";
        Estado[Estado["SC"] = 1] = "SC";
        Estado[Estado["SE"] = 2] = "SE";
    })(Estado || (Estado = {}));
    let uf = Estado[3];
    console.log(uf);
}
print();
