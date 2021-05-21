$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    document.getElementById('mobileNav').style.display = 'none';
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        window.location.hash = hash;
      });
      
    } // End if
  });
  
});

function openNav(e){
    e.preventDefault();
    document.getElementById('mobileNav').style.display = 'block';
}
function closeNav(e){
  e.preventDefault();
  document.getElementById('mobileNav').style.display = 'none';
}

//display current time
setInterval(() => {
  var today = new Date();
  var time = today.toString();
  time = time.slice(0,25);
document.getElementById('time').innerHTML=time;
}, 1000);

setTimeout(() => {
  anime.timeline({loop: false})
        .add({
            targets: '.ml15 .word',
            scale: [14,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i
        });
}, 1000);

setTimeout(() => {
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  });
}, 2000);

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });