var username = sessionStorage.getItem("name");
var score = sessionStorage.getItem("score");
var usertime = sessionStorage.getItem("time")

document.querySelector(".name").innerHTML = username;
document.querySelector(".score").innerHTML = "You Score: " + "'" + score + "'" + " out of 50";
document.querySelector(".time").innerHTML = "Time taken: " + usertime + " seconds ";