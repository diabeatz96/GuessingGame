alert ('This is a game website');

// Number guessing

let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;
let score = 10;
document.getElementById("score").innerHTML = `Type a number to get started`;



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
         score -= 1;
         document.getElementById("score").innerHTML = `Not a winner! Choose a smaller number! Score:${score}`;
      }
   else if (x < y)
      {
         guess++;
         score -= 1;
         document.getElementById("score").innerHTML = `Not a winner! Choose a greater number! Score:${score}`;
      }
}

