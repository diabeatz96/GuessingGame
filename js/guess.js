alert ('This is a game website');

// Number guessing

let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;
let score = 10;

document.getElementById("submit_guess").onclick = function()
{

   let x = document.getElementById("guess_field").value;

   // Point system
   // starting score 

   if (score == 0)
   {
      alert("You are at 0 health points!")
   }

   if(x == y)
      {
         document.getElementById('score').innerHTML = score;
         alert("Great! You guessed the number right in " + guess + " guess! Your score is " + score + "points" );
      }
   else if(x > y)
      {
         guess++;
         alert("Not a winner! Choose a smaller number!");
         score -= 1;
         document.getElementById("score").innerHTML = score;
      }
   else if (x < y)
      {
         guess++;
         alert("Not a winner! Choose a greater number!");
         score -= 1;
         document.getElementById("score").innerHTML = score;
      }
}

