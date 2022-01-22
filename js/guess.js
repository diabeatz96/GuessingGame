// This is a game
alert ('Hello');


// const some_array = [1, 'John', 2, 'Peter', true, false];

// for (let i = 0; i < some_array[lenght]; i++){
//     if (typeof some_array [i] =='string') continue;
//         console.log(some_array [i], typeof some_array [i])
// }

// for(let i = some_array.length-1; i >= 0; i--){
//     if (typeof some_array[i] == 'string') continue;
//     console.log('Looping Backwards: ', some_array[i], typeof some_array[i])
// }

// Project 3


//THis is a new comment


// random value generated
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submitguess").onclick = function(){

// number guessed by user
var x = document.getElementById("guessField").value;

if(x == y)
{
   alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
           + guess + " GUESS ");
}
else if(x > y) /* if guessed number is greater
               than actual number*/
{
   guess++;
   alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
   guess++;
   alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
