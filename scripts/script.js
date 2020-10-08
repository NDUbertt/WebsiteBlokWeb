// JavaScript Document
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
