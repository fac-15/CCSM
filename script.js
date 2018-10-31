document.getElementById('hamburger').addEventListener('click', myHamburger, false)

function myHamburger() {
// alert("you clicked the hamburger");
document.getElementById('navMenu').style.display = "block";
document.getElementById('hamburger').style.display = "none";

    
}

document.body.addEventListener("click", reverseFunction, false);

// function reverseFunction(event){
//     if
// }