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

const a = ["A", "B", "C", "D"]
a.push("E")
console.log(a)

const items = [
    {name: 'Bike',      price: 100  },
    {name: 'TV',        price: 200  },
    {name: 'Album',     price: 10   },
    {name: 'Book',      price: 5    },
    {name: 'Phone',     price: 500  },
    {name: 'Computer',  price: 1000 },
    {name: 'Keybord',   price: 25   }
]

items.forEach((item) => {
    console.log(item.name)
})

const total = items.reduce((currentTotal, item) => {
return item.price + currentTotal
}, 0)
console.log(total)


