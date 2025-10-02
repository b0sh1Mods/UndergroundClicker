document.addEventListener('click', function() {
  var bgMusic = document.getElementById('bgMusic');
  if (bgMusic && bgMusic.paused) {
    bgMusic.play();
  }
});

const malikImage = document.getElementById("malikthing");
function switchImage() {
  document.getElementById("mainImage").src = ["img/lxstk1.png", "img/nett.png", "img/uzi.png", "img/2024Carti.png"];
}

function switchSFX() {
  document.getElementById("mainSound").src = ["sfx/lxstk1-on_gang.mp3", "sfx/drank.mp3", "sfx/Uzi-Yah.mp3", "sfx/carti-what.mp3"];
}

var clicks = 0

function onClick() {
  clicks += 1;
  document.getElementById("clickcount").innerHTML = clicks;
};
var currentImage = "MALIK";
var currentSound = "CartiSound";

function onClick() {
  clicks += 1;
  document.getElementById("clickcount").innerHTML = clicks;
  var audio = document.getElementById("CartiSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
  var img = document.getElementById("mainImage");
  if (clicks >= 100 && currentImage === "MALIK") {
    img.src = "img/lxstk1.png";
    currentImage = "lxstk1";
    audio.src = "sfx/lxstk1-on_gang.mp3";
    currentSound = "LxstSound";
  } else if (clicks >= 200 && currentImage === "lxstk1") {
    img.src = "img/nett.png";
    currentImage = "Nett";
    audio.src = "sfx/drank.mp3";
    currentSound = "NettSound";
} else if (clicks >= 300 && currentImage === "Nett") {
    img.src = "img/uzi.png";
    currentImage = "UziVert";
    audio.src = "sfx/Uzi-Yah.mp3";
    currentSound = "UziSound";
} else if (clicks >= 400 && currentImage === "UziVert") {
    img.src = "img/2024Carti.png";
    currentImage = "Carti";
    audio.src = "sfx/carti-what.mp3";
    currentSound = "CartiSound";
} else if (clicks >= 1000 && currentImage === "Carti") {
    window.close();
}
}
clickCountSpan.textContent = clicks;
