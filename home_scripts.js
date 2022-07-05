function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
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

function navextend() {
    var counter = 10;
    /*for (let counter = 1; counter < 11; counter++){
        var percent = 10 * Number(counter);
        var percentstring = percent.toString() + "%";
        sleep(2000);
        document.getElementById('navbar').style.width=percent;
        console.log('hi')*/
    document.getElementById('navbar').style.width="10%";
    sleep(2000);
    document.getElementById('navbar').style.width="20%";
    sleep(2000);
    document.getElementById('navbar').style.width="30%";
    sleep(2000);
    document.getElementById('navbar').style.width="40%";
    sleep(2000);
    //}
    
}