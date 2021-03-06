// JavaScript Document
console.log("howdy");

// --- ZOEKEN MET ZOEKBALK ---

var options = {
    valueNames: [ 'titel', 'muzikant' ]
};

var musicList = new List('muzieklijst', options);

// --- FILTEREN ---

var filterAll = document.querySelector("#all");
var filterRock = document.querySelector("#rockMusic");
var filterPop = document.querySelector("#popMusic");
var filterRb = document.querySelector("#rbMusic");
var filterEdm = document.querySelector("#edmMusic");

function filterMuziek(event) {
    let deLijst = document.querySelector("main > ul");
    let nieuwFilter = event.target.value;
    
    deLijst.className = "";
    
    deLijst.classList.add(nieuwFilter);
  }

filterAll.addEventListener("change", filterMuziek);
filterRock.addEventListener("change", filterMuziek);
filterPop.addEventListener("change", filterMuziek);
filterRb.addEventListener("change", filterMuziek);
filterEdm.addEventListener("change", filterMuziek);

// -- FILTER EN SORTEER ---
var filterknop = document.querySelector("#filteroptie");
var sorteerknop = document.querySelector("#sorteeroptie");

function laatFilterZien(event){
    let filteroptie1 = document.querySelector(".filteren1");
    let filteroptie2 = document.querySelector(".filteren2");

    filterknop.classList.toggle("actief");

    filteroptie1.classList.toggle("onzichtbaar");
    filteroptie2.classList.toggle("onzichtbaar");

    console.log("filteren");
};

function laatSorterenZien(event){
    let sorteeroptie1 = document.querySelector("#sorteren");

    sorteerknop.classList.toggle("actief");

    sorteeroptie1.classList.toggle("onzichtbaar");

    console.log("sorteren");
};

filterknop.addEventListener("click", laatFilterZien);
sorteerknop.addEventListener("click", laatSorterenZien);

// --- SORTEREN ---

musicList.sort('titel', { order: "asc" });

// --- FAVORIETEN ---

var favorietKnop = document.querySelectorAll('main > ul > li > button:first-of-type');
var Nummer = document.querySelector('main > ul > li');

function favoToevoegen(event) {
    let Geliked = event.target;
    var hetNummer = Geliked.closest("li");
    
    hetNummer.classList.toggle("like");
    console.log(event.target);

};

favorietKnop[0].addEventListener("click", favoToevoegen);
favorietKnop[1].addEventListener("click", favoToevoegen);
favorietKnop[2].addEventListener("click", favoToevoegen);
favorietKnop[3].addEventListener("click", favoToevoegen);
favorietKnop[4].addEventListener("click", favoToevoegen);
favorietKnop[5].addEventListener("click", favoToevoegen);
favorietKnop[6].addEventListener("click", favoToevoegen);
favorietKnop[7].addEventListener("click", favoToevoegen);
favorietKnop[8].addEventListener("click", favoToevoegen);
favorietKnop[9].addEventListener("click", favoToevoegen);
favorietKnop[10].addEventListener("click", favoToevoegen);
favorietKnop[11].addEventListener("click", favoToevoegen);
favorietKnop[12].addEventListener("click", favoToevoegen);
  
// --- MUZIEK AFSPELEN ---

var playKnoppen = document.querySelectorAll('main > ul > li > button.play');

function playMusic(event){
    
    var playButton = event.target;

    var hetNummer = playButton.closest("li");
    var audioElement = hetNummer.querySelector('audio');
    console.log(audioElement);
    audioElement.play();

    hetNummer.classList.add("playing");
}

playKnoppen[0].addEventListener("click", playMusic);
playKnoppen[1].addEventListener("click", playMusic);
playKnoppen[2].addEventListener("click", playMusic);
playKnoppen[3].addEventListener("click", playMusic);
playKnoppen[4].addEventListener("click", playMusic);
playKnoppen[5].addEventListener("click", playMusic);
playKnoppen[6].addEventListener("click", playMusic);
playKnoppen[7].addEventListener("click", playMusic);
playKnoppen[8].addEventListener("click", playMusic);
playKnoppen[9].addEventListener("click", playMusic);
playKnoppen[10].addEventListener("click", playMusic);
playKnoppen[11].addEventListener("click", playMusic);
playKnoppen[12].addEventListener("click", playMusic);

// --- MUZIEK STOPPEN ---

var stopKnoppen = document.querySelectorAll('main > ul > li > button.stop');

function stopMusic(event){
    
    var stopButton = event.target;

    var hetNummer = stopButton.closest("li");
    var audioElement = hetNummer.querySelector('audio');
    console.log(audioElement);
    audioElement.pause();
    audioElement.currentTime = 0;

    hetNummer.classList.remove("playing");
}

stopKnoppen[0].addEventListener("click", stopMusic);
stopKnoppen[1].addEventListener("click", stopMusic);
stopKnoppen[2].addEventListener("click", stopMusic);
stopKnoppen[3].addEventListener("click", stopMusic);
stopKnoppen[4].addEventListener("click", stopMusic);
stopKnoppen[5].addEventListener("click", stopMusic);
stopKnoppen[6].addEventListener("click", stopMusic);
stopKnoppen[7].addEventListener("click", stopMusic);
stopKnoppen[8].addEventListener("click", stopMusic);
stopKnoppen[9].addEventListener("click", stopMusic);
stopKnoppen[10].addEventListener("click", stopMusic);
stopKnoppen[11].addEventListener("click", stopMusic);
stopKnoppen[12].addEventListener("click", stopMusic);

// --- FILTER FAVORIETEN ---

var favoButton = document.querySelector("header > button");

function filterFavorieten(event) {
    let deLijst = document.querySelector("main > ul");
    
    deLijst.classList.toggle("alleenFavorieten");
    favoButton.classList.toggle("alleenhartjes");
  }

favoButton.addEventListener("click", filterFavorieten);