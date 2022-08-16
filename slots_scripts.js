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
var myVar;
function slotsmusic() {
    var audio = document.getElementById('audio').src;
    var home_theme = document.getElementById('home_theme');
    var randnum = Math.floor((Math.random() * 4) + 1);
    if (randnum === 1){
        document.getElementById('slots_theme').src = "slots_theme.mp3";
    } else if (randnum === 2) {
        document.getElementById('slots_theme').src = "slots_theme2.mp3";
    } else if (randnum === 3) {
        document.getElementById('slots_theme').src = "slots_theme3.mp3"
    }
    var slots_theme = document.getElementById('slots_theme');
    if (audio.indexOf('resources/mute.png')!=-1) {
            slots_theme.pause()
            home_theme.pause()
    } else{
            home_theme.pause()
            slots_theme.volume = 1;
            slots_theme.play()
    }
}
function cost() {
    var balancestr = document.getElementById('balance').innerHTML;
    var betamount = document.getElementById("betamount").value;
    var balance = Number(balancestr);
    balance -= 1*betamount;
    document.getElementById('balance').innerHTML = balance.toString();
}
function spin() {
    var run = true;
    var randnum = Math.floor((Math.random() * 9) + 1);
        if (randnum === 1) {
            document.getElementById('slot1').src = "resources/seven.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 2) {
            document.getElementById('slot1').src = "resources/apple.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 3) {
            document.getElementById('slot1').src = "resources/cherry.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 4) {
            document.getElementById('slot1').src = "resources/grapes.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 5) {
            document.getElementById('slot1').src = "resources/lemon.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 6) {
            document.getElementById('slot1').src = "resources/orange.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 7) {
            document.getElementById('slot1').src = "resources/strawberry.png";
            document.getElementById('slot1').style.height = "250px";
        } else if (randnum === 8) {
            document.getElementById('slot1').src = "resources/watermelon.png";
            document.getElementById('slot1').style.height = "250px";
        }
        var randnum2 = Math.floor((Math.random() * 9) + 1);
        if (randnum2 === 1) {
            document.getElementById('slot2').src = "resources/seven.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 2) {
            document.getElementById('slot2').src = "resources/apple.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 3) {
            document.getElementById('slot2').src = "resources/cherry.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 4) {
            document.getElementById('slot2').src = "resources/grapes.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 5) {
            document.getElementById('slot2').src = "resources/lemon.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 6) {
            document.getElementById('slot2').src = "resources/orange.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 7) {
            document.getElementById('slot2').src = "resources/strawberry.png";
            document.getElementById('slot2').style.height = "250px";
        } else if (randnum2 === 8) {
            document.getElementById('slot2').src = "resources/watermelon.png";
            document.getElementById('slot2').style.height = "250px";
        }
        var randnum3 = Math.floor((Math.random() * 9) + 1);
        if (randnum3 === 1) {
            document.getElementById('slot3').src = "resources/seven.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 2) {
            document.getElementById('slot3').src = "resources/apple.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 3) {
            document.getElementById('slot3').src = "resources/cherry.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 4) {
            document.getElementById('slot3').src = "resources/grapes.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 5) {
            document.getElementById('slot3').src = "resources/lemon.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 6) {
            document.getElementById('slot3').src = "resources/orange.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 7) {
            document.getElementById('slot3').src = "resources/strawberry.png";
            document.getElementById('slot3').style.height = "250px";
        } else if (randnum3 === 8) {
            document.getElementById('slot3').src = "resources/watermelon.png";
            document.getElementById('slot3').style.height = "250px";
        }
        myVar = setTimeout(spin, 100);
        return;
}
function stop() {
    clearTimeout(myVar);
    var slots_theme = document.getElementById('slots_theme');
    var reward_theme = document.getElementById('reward_theme');
    for (let i = 0; i < 9; i++) {
        console.log(slots_theme.volume);
        slots_theme.volume -=0.1;
        sleep(150);
    }
    slots_theme.pause()
    var balancestr = document.getElementById('balance').innerHTML;
    var betamount = document.getElementById("betamount").value;
    var balance = Number(balancestr);
    var slot1 = document.getElementById('slot1').src;
    var slot2 = document.getElementById('slot2').src;
    var slot3 = document.getElementById('slot3').src;
    var jackpot = "resources/seven.png"
    if (slot1===jackpot && slot1 === slot2 && slot1 === slot3) {
        balance += 100 * betamount; 
        document.getElementById('balance').innerHTML = balance.toString();
    } else{
        if (slot1===slot2 && slot1===slot3) {
            balance += 6 * betamount;
            reward_theme.play()
            document.getElementById('balance').innerHTML = balance.toString();
        } else{
            if (slot1===slot2 || slot2===slot3 || slot1===slot3) {
                balance += 3 * betamount;
                document.getElementById('balance').innerHTML = balance.toString();
            }
        }
    }
}