const prompt = require('prompt-sync')()

/*let x = 4
let y = 5

if(y > x) {
    console.log("y is greater than x!")

}

if(x > y) {
    console.log("y is greater than x!")
} else{
    console.log("Nope, x is not greater than y.")
}
*/

//A program to determine whether it's time to get up

let hour = prompt("What time is it? ")

if(hour < 4) {
    console.log("It's the middle of the night- keep sleeping!")
} else if(hour > 4 && hour < 7) {
    console.log("You can sleep a little longer.")
   }   else {
        console.group("Why are you still sleeping? Get up!!")
    }

