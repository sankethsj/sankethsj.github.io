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
