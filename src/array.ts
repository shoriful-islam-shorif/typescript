let Name:string[]=["rafi","kazi","jami"];
let age:number[]=[20,30,40]

let twoDrr:number[][]=[
    [1,3],
    [44.50],
    [33,66]
]

//union

let details:(string | number | boolean)[]=[22, 30,"kazi",true];
let detailsInfo1:(number | boolean)[]=[22, 30,true];
let detailsInfo=[22, 30,"kazi"];

let day: "saturday" | "sunday" | "monday" ="saturday";

day="sunday"
day="monday"



function sayDetails(name:string, age:string | number):void{
    let  currentAge
    if(typeof age === "string"){
        currentAge = Number(age)-2;
    }else{
        currentAge= age - 2;
    }

    console.log('your name is: ${name}, Your age is:${currentAge}');
}
