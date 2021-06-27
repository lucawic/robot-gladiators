var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemeyHealth = 50;
var enemyAttack = 50;


console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function (now with parameters for enemy name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to skip, confirm then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  //confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true), leave fight
  if (confirmSkip) {
    window.alert (playerName + 'has decided to skip this fight. Goodbye!');
    //subtract money from the playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log ("playerMoney", playerMoney);
  break;
  }
}

// remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    playerMoney = playerMoney + 20;
    // leave while() loop if player is dead
  break;
  } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
// remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
// check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");  
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

  for(var i=0; i <enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i+1));

      //pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      // use debugger to pause script from running and check what's going on at that moment in the code
      //debugger;
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      }
      //if player isn't alive, stop the game
      else {
        window.alert ('You have lost your robot in battle! Game over!');
        break;
    }
  }

  // fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i+1));

      var pickedEnemyName = enemyNames [i]

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
    }
  }
  endGame();
};
  startGame();
  var endGame = function(){ 
  //if player still alive, player wins
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + ".");
  }
  else {
    window.alert ("You've lost your robot in battle.");
  }
}

var playAgainConfirm = window.confirm("would you like to play again?");

if (playAgainConfirm) {
  //restart the game
  startGame();
}
else {
  window.alert('Thank you for playing Robot Gladiators! Come back soon!');
}


    
  // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
