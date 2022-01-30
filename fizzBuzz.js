// Created in: JavaScript version ES2015
// (I don't know the sheband for JavaScript)

// Created by: Alexander Matheson
// Created on: Jan 30, 2022
// This program runs the FizzBuzz game


// repeat loop 15 times
for (var counter = 1; counter < 16; counter++) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        // for divisible by 3 and 5
        console.log("FizzBuzz");
    } else if (counter % 3 == 0) {
        // for divisible by just 3
        console.log("Fizz");
    } else if (counter % 5 == 0) {
        // for divisible by just 5
        console.log("Buzz");
    } else {
        // for everything else
        console.log(counter);
    }
}
