
//HeartButton
var heartButton = document.querySelector('.heartbutton')
 
function toonHeart() {
  document.getElementsByClassName("heartplaatje")[0].src = "images/heartfull.svg"
}
 
if (heartButton) {
  heartButton.addEventListener('click', toonHeart);
}
  
//footer
var footer = document.querySelectorAll("footer section > button");
console.log(footer)

// function footerTonen() {
//   document.body.classList.toggle("toonFooter");
// }
footer.forEach(footerButton => {
  footerButton.addEventListener("click", (event) => {
    event.target.classList.toggle('toonFooter')
  })
})

//hamburgermenu
var hamburger = document.querySelector('nav ul:nth-of-type(2) li button');
console.log(hamburger)
var hamburgerClose = document.querySelector('nav ul:first-of-type li:last-of-type button');

console.log(hamburgerClose)

function toonHamburger() {
    document.body.classList.toggle('toonHamburger')
}

hamburger.addEventListener('click', toonHamburger);
hamburgerClose.addEventListener('click', toonHamburger)
