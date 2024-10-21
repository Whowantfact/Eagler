let username = "Blankyiscool"; // edit txt in "" to change username
let password = "Pixeliscool"; // edit txt in "" to change password

document.getElementById("submitbtn").onclick = function(event){
    event.preventDefault(); // Prevent the default form submission action
    let usernameInput = document.getElementById("usernameinpt").value; 
    let passwordInput = document.getElementById("passwordinpt").value; 
    
    if (usernameInput === username && passwordInput === password){
        window.location.replace("/G@me.html"); // link to wtv page u want the successful login to go to
    } else {
        // Handle incorrect username or password here
        alert("Incorrect username or password"); 
    }
};
 