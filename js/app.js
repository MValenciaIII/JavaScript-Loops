
//! For Loop

let coders = ["Natasha","Dana", "Kolbie", "Gabi", "Kolbie"];

for(let i=0; i < coders.length; i++) {
    //DO STUFF
    //console.log(coders[i] + " loves coding!")
    let currentIndex = coders[i]; 
    
    if(coders[i] === 3) {
        console.log(currentIndex, "Found you!")
    }
}

//! FOR OF

let poptarts = ["Chocolate", "Strawberry", "Fudge S u n d a e", "Oreos"]

let poptart = "Cookies"

for (let x of poptarts) {
    console.log(x);
}


//! Day 9 Combining Conditionals and Loops

//? Console.log only EVEN Numbers between 1 and 50


for(let i = 1; i <= 50; i++) {

    if(i % 2 === 0) {
        console.log(i + "is even.");
    }
}

//? Counting Vowels in a String

let sentence = "JAVASCRIPT IS AWESOME!";
let vowels = "aeiouAEIOU"
let vowelCount = 0;


// let greetingMike = "Hello Mike"

// for(let i = 0; i < greetingMike.length; i++) {
//     console.log(greetingMike[i])
// }

//! V1
// for(let i = 0; i < sentence.length; i++) {

//     if(vowels.includes(sentence[i])) {
//         vowelCount++
//     }
// }

for (let i = 0; i < sentence.length; i++) {
    
    for (let j = 0; j < vowels.length; j++) {
        
        
    }
}

console.log(vowelCount + " is the number of vowels in this sentence.")

