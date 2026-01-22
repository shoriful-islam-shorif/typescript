"use strict";
let Name = ["rafi", "kazi", "jami"];
let age = [20, 30, 40];
let twoDrr = [
    [1, 3],
    [44.50],
    [33, 66]
];
//union
let details = [22, 30, "kazi", true];
let detailsInfo1 = [22, 30, true];
let detailsInfo = [22, 30, "kazi"];
let day = "saturday";
day = "sunday";
day = "monday";
function sayDetails(name, age) {
    let currentAge;
    if (typeof age === "string") {
        currentAge = Number(age) - 2;
    }
    else {
        currentAge = age - 2;
    }
    console.log('your name is: ${name}, Your age is:${currentAge}');
}
