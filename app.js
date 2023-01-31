let pi = 3.14;
console.log(2*10*pi);

let c = 299792458;
console.log(c);

let m = 10;
console.log(m*c*2);

let car1={
    mark:'Opel',
    model:'Astra',
    productionYear:'2020'
}
console.log(car1.mark + ' ' + car1.model + ' ' + car1.productionYear);

let car2={
    mark:'Fiat',
    model:'Punto',
    productionYear:'2022'
}
console.log(car2.mark + ' ' + car2.model + ' ' + car2.productionYear);

let myFirstFunction = (a) => {
    console.log(a*2);
}
myFirstFunction(3);

let mySecondFunction = (x, y) => {
    console.log(x*y);
}
mySecondFunction(4, 2);

let myThirdFunction = (z) => {
    console.log(z**2);
}
myThirdFunction(5);

let divide = (e, f) => {
    if(f > 0) {
      console.log(e/f);
    }
    else {
    console.log('Operacja niedozwolona');
}
}
divide(10, 0);

let nOddNumbers = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(2*i-1);
    } 
}
nOddNumbers(5);

let circleLenght = (radius) => {
    console.log(2*radius*3.14);
    }
for(let i=1; i <=20; i++) {
    circleLenght(3);
}