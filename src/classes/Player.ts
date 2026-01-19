 import{IsPlayer} from '../interfaces/IsPlayer.js'
 export class Player implements IsPlayer {
    name : string;
    age : number;
    readonly country : string;

    constructor(n: string, a: number, c:string){
        this.name= n;
        this.age = a;
        this.country = c;
    }
    play(){
        console.log('${this.name} form ${this.age} is palyaing!' );
    }

};