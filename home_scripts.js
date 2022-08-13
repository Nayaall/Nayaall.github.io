function blackbg(x) {
    x.style.backgroundColor='rgba(34,34,34,255)';
}
function greybg(x) {
    x.style.backgroundColor='#333';
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.backgroundColor='rgba(34,34,34,0.9)';
  } else {
    document.getElementById("navbar").style.backgroundColor='rgba(34,34,34,1)';
    document.getElementById("navbar").style.backgroundColor='#333';
  }
}
/* || SLIDESHOW  */
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/* || GRID */
function gridzoom(x) {
    x.style.height='75%';
    x.style.width="100%";
    x.style.margin="0";
}
function gridzoomout(x) {
    x.style.height='70%';
    x.style.width="100%";
}

function mute(){
    var audio = document.getElementById('audio').src;
    var home_theme = document.getElementById('home_theme')
    if (audio.indexOf('resources/mute.png')!=-1) {
            home_theme.play()
            document.getElementById('audio').src  = 'resources/volume.png';
        }
    else {
           home_theme.pause()
           document.getElementById('audio').src = 'resources/mute.png';
       }
}
