function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function spin() {
  let randnum = Math.floor(Math.random() * 360);
  for (let a = 0; a < 361 + randnum; a++) {
    document.getElementById("").transform = "rotate(1deg)"
    if (a<150) {
      sleep(0.1);
    }else if (a>150 && a<365) {
      sleep(0.3);
    }else if (a>365) {
      sleep((a--361)/10);
    } 
  }
}
