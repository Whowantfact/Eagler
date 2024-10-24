let username = "Blankyiscool"; // edit txt in "" to change username
let password = "Pixeliscool"; // edit txt in "" to change password
let username1 = "black"; // edit txt in "" to change username
let password1 = "slaves"; // edit txt in "" to change password
let username2 = "Snxcy"
let password2 = "hola danny"
let username3 = "fruit"
let password3 = "loops"
let username4 = "blackie"
let password4 = "twintower"



document.getElementById("submitbtn").onclick = function(event){
    event.preventDefault(); // Prevent the default form submission action
    let usernameInput = document.getElementById("usernameinpt").value; 
    let passwordInput = document.getElementById("passwordinpt").value; 
    
    if (usernameInput === username && passwordInput === password){
        window.location.replace("/G@me.html"); // link to wtv page u want the successful login to go to
    }
    else if (usernameInput === username1 && passwordInput === password1){
        window.location.replace("/joke.html");

    }
    else if (usernameInput === username2 && passwordInput === password2){
        window.location.replace("/joke2.html");

    }
    else if (usernameInput === username3 && passwordInput === password3){
        window.location.replace("/joke3.html");
    }

    else if (usernameInput === username4 && passwordInput === password4){
        window.location.replace("/joke4.html");


    }
    
    else {
        // Handle incorrect username or password here
        alert("Incorrect username or password"); 
    }
};
 