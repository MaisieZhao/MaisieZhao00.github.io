var score = 0;

function answer() {
  var response = prompt("Please guess:");
  if (response === "马思唯") {
    alert("Congratulations, you are right!");
    score += 25;
  } else {
    alert("Sorry, you're wrong!");
  }
}

function answer1() {
  var response = prompt("Please guess:");
  if (response === "谢宇杰" || response === "melo") {
    alert("Congratulations, you are right!");
    score += 25;
  } else {
    alert("Sorry, you're wrong!");
  }
}

function answer2() {
  var response = prompt("Please guess:");
  if (response === "Psy.p" || response === "杨俊逸") {
    alert("Congratulations, you are right!");
    score += 25;
  } else {
    alert("Sorry, you're wrong!");
  }
}

function answer3() {
  var response = prompt("Write down your answer:");
  if (response === "Knowknow" || response === "丁震") {
    alert("Congratulations, you are right!");
    score += 25;
  } else {
    alert("Sorry, you're wrong!");
  }
}

function sayhello() {
  var response = prompt("What is your name?");
  alert("Hello " + response + ", have a good day!");  
  if (score === 100) {
    alert("Your score is " + score + ", omg you gonna be the next rapstar!");
  } else if (score > 25 && score < 100) {
    alert("Your score is " + score + ", not so bad!");
  } else if (score === 25) {
    alert("Your score is " + score + ", don't be so sad, maybe next time you'll do better!");
  } else {
    alert("You haven't scored any points yet, keep trying!");
  }
}
