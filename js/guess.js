alert ('This is a game website');

// Number guessing

let y = Math.floor(Math.random() * 100 + 1);

let guess = 1;

document.getElementById("submit_guess").onclick = function()
{

   let x = document.getElementById("guess_field").value;

   // Point system
   // starting score 
   let score = 10;

   if(x == y)
      {
         document.getElementById('score').innerHTML = score;
         alert("Great! You guessed the number right in " + guess + " guess! Your score is " + score + "points" );
      }
   else if(x > y)
      {
         guess++;
         alert("Not a winner! Choose a smaller number!");
         document.getElementById("score").innerHTML = score - 1;
      }
   else if (x < y)
      {
         guess++;
         alert("Not a winner! Choose a greater number!");
         document.getElementById("score").innerHTML = score - 1;
      }
}

if (score == 0)
{
   alert("You lost! Try again")
}
