"use strict";
// {const   country = "Bangladesh";
// console.log(country);
//     }
// {
//     const myFunction= (a:number,b:number,c:string="true"):number=>{
//         return a+b;
//     }
//     myFunction(4,6, 'false');
//     console.log(myFunction);
// }
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log('${this.name} form ${this.age} is palyaing!');
    }
}
const shorif = new Player('shorif', 40, 'bangladesh');
const azad = new Player('azad', 90, 'bangladesh');
const players = [];
//console.log(shorif.name);
players.push(shorif);
players.push(azad);
console.log(players);
function drowRectengole(options) {
    let width = options.width;
    let length = options.length;
}
drowRectengole({
    width: 40,
    length: 7
});
