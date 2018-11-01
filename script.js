document.body.addEventListener("click", clickFunction, false);

function clickFunction(event){
    if(event.target.id == "hamburger"){
      document.getElementById('navMenu').style.display = "block";
      document.getElementById('hamburger').style.display = "none";
    } else if(event.target.id == "navMenu"){
    } else if (event.target.id == 'close') {
      document.getElementById('navMenu').style.display = 'none';
      document.getElementById('hamburger').style.display = 'block';
    } else {
      document.getElementById('navMenu').style.display = 'none';
      document.getElementById('hamburger').style.display = 'block';
    }
}

let emailRegex = /[A-Za-z0-9_.]+@[A-Za-z0-9_.]{3,}\.{1,1}[a-z]{2,}$/;
let textRegex = /[\w]{1,}/;

function formSubmit() {
  let userFirstName = document.getElementById("first-name").value;
  let userLastName = document.getElementById("last-name").value;
  let inputEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  if(emailRegex.test(inputEmail) == true && textRegex.test(userFirstName) == true && textRegex.test(userLastName) == true && textRegex.test(userMessage) == true) {
    alert("Thanks for your message, " + userFirstName + " " + userLastName + "!");
    document.getElementById("first-name").value="";
    document.getElementById("last-name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
  } else if(!emailRegex.test(inputEmail) == true) {
    alert('Invalid email!');
  } else if (!textRegex.test(userFirstName) == true || !textRegex.test(userLastName) == true){
    alert("Incomplete name!");
  } else {
    alert("You haven't typed a message!");
  }
}

document.querySelector("button").addEventListener('click', formSubmit, false);
