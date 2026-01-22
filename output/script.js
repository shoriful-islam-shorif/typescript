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
import { Player } from "./classes/Player.js";
const shorif = new Player('shorif', 40, 'bangladesh');
// const azad=new Player('azad',90, 'bangladesh');
let azad;
azad = new Player('azad', 90, 'bangladesh');
const players = [];
//console.log(shorif.name);
players.push(shorif);
players.push(azad);
console.log(players);
function drowRectengole(options) {
    let width = options.width;
    let length = options.length;
}
let threeDrimantion = {
    width: 40,
    length: 7,
    height: 50
};
drowRectengole(threeDrimantion);
function syHi() {
    console.log("hi");
}
