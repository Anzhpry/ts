"use strict"

const colors = require("colors");

const [min, max] = process.argv.slice(2);

const green = colors.green;
const yellow = colors.yellow;
const red = colors.red;
const blue = colors.blue;

let currentColor = green;

const a: number = Number(min);
const b: number = Number(max);

const changeColor = (): void => {
    switch (currentColor) {
        case green:
            currentColor = yellow;
            break;
        case yellow:
            currentColor = red;
            break;
        case red:
            currentColor = green;
            break
    }
};

if ((a % a == 0) && (a > 0)) {
    for (let i: number = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(currentColor(i));
            changeColor();
        }
    };
} else {
    console.log(blue("Вы ввели неверное число"));
}

function isPrime(num: number): boolean {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
};

console.log(typeof (currentColor));