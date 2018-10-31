let emailRegex = /[A-Za-z0-9_.]+@[A-Za-z0-9_.]{3,}[\.]{1,1}[a-z]{2,}$/;

function myFunction() {
  let userFirstName = document.getElementById("first-name").value;
  let userLastName = document.getElementById("last-name").value;
  let inputEmail = document.getElementById("email").value;

  if(emailRegex.test(inputEmail) == true) {
    alert("Thanks for your message, " + userFirstName + " " + userLastName + "!");
  } else {
    alert('Invalid email!');
  }
}

document.querySelector("button").addEventListener('click', myFunction, false);
