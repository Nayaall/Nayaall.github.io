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
  }
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
function cost() {
    var balancestr = document.getElementById('balance').innerHTML;
    var balance = Number(balancestr);
    balance -= 30;
    document.getElementById('balance').innerHTML = balance.toString();
}
function spin(){
    cost();
    var balancestr = document.getElementById('balance').innerHTML;
    var balance = Number(balancestr);
    var random = Math.floor(Math.random() * 361);
    var spindeg = random + 1080;
    document.getElementById("lucky_wheel_backplate").animate([
        { transform: 'rotate(-0deg)'},
        { transform: 'rotate(-360deg)'},
        { transform: 'rotate(-720deg)'},
        { transform: 'rotate(-1080deg)'},
        { transform: 'rotate(-'+ spindeg +'deg)'}
    ], {
        duration: 1400,
        /*iterations: Infinity*/
    });
    document.getElementById("lucky_wheel_backplate").style.transform = "rotate(-" + random + "deg)";
    document.getElementById('spindeg').innerHTML = random;
    /*document.getElementById("lucky_wheel_backplate").style.animation = "6s spin";*/
    if (random > 345 || random <= 15) {
        balance += 10;
        document.getElementById('balance').innerHTML = balance.toString();
    } else if (random > 15 && random <= 45) {
        balance += 0;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 45 && random <= 75) {
        balance += 2;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 75 && random <= 105) {
        balance += 50;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 105 && random <= 135) {
        balance += 1;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 135 && random <= 165) {
        balance += 5;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 165 && random <= 195) {
        balance += 20;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 195 && random <= 225) {
        balance += 150;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 225 && random <= 255) {
        balance += 15;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 255 && random <= 285) {
        balance += 100;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 285 && random <= 315) {
        balance += 1;
        document.getElementById('balance').innerHTML = balance.toString()
    } else if (random > 315 && random <= 345) {
        balance += 5;
        document.getElementById('balance').innerHTML = balance.toString()
    }
}