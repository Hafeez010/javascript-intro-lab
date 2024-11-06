//console.info("Hafeez Ahmed");
document.getElementById('myHeading').innerHTML = "Hafeez Ahmed";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length,i++;)
{
    colourButtons[i].addEventListener("click", chgColour );
}
function chgColour(ev){
    console.info(ev.target.classList[0]);
    let chosenColour = ev.target.classList[0] + "Back"
}