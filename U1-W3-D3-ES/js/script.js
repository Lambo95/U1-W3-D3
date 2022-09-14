function changeBackGround() {
  let change = prompt("Vuoi cambiare sfondo? \n Rispondi con S o N !");
  if (change === "S" || change === "s") {
    document.getElementById("box").style.backgroundImage = "url(./img/sfondo.jpg)";
    document.getElementById("box").style.backgroundRepeat = "no-repeat";
    document.getElementById("box").style.backgroundSize = "cover";
    document.getElementById("box").style.backgroundPosition = "center";
    document.getElementById("main-title").style.color = "rgb(89, 66, 239)";
  }
}

function differenceAge() {
  let messaggio;
  // const genoaAge = String(new Date(1893, 9, 7));
  const genoaAge = 1893;
  let anno = prompt("In quale anno sei nato?");
  if (anno !== null) {
    let difference = genoaAge - anno;
    if (difference < 0) {
      difference = difference * -1;
    }
    messaggio = "La differenza di età è di " + difference + " anni";
  }
  document.getElementById("visualizza-differenza").innerHTML = messaggio;
}
