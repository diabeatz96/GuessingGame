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


//This is a new comment;


var y = Math.floor(Math.random() * 10 + 1);

var guess = 1;

document.getElementById("submit_guess").onclick = function(){

var x = document.getElementById("guess_field").value;

if(x == y)
{
   alert("Great! You guessed the number right in "
           + guess + " guess! ");
}
else if(x > y)
{
   guess++;
   alert("Not a winner! Choose a smaller number!");
}
else
{
   guess++;
   alert("Not a winner! Choose a greater number!")
}
