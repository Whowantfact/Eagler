  // Function to change the subtitle
  function changeSub(num) {
    document.getElementById("subtitle").innerText = tell[num];
}

// Change this or add subtitles
//seperate the subtitles with commas
var tell = [
"bishop is a bit dumb"
];

var howmany = tell.length;
var randomIndex = Math.floor(Math.random() * howmany);

document.getElementById("subtitle").innerText = tell[randomIndex];

// Function to change the subtitle
function changeSplash(num) {
    var sub = "Set current splash to splash " + num + ", " + tell[num];
    document.getElementById("subtitle").innerText = tell[num];
    return sub;
}