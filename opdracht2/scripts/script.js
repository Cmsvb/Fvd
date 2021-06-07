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
    filteroptie1.classList.toggle("onzichtbaar");
    filteroptie2.classList.toggle("onzichtbaar");

    console.log("filteren");
};

function laatSorterenZien(event){
    let sorteeroptie1 = document.querySelector("#sorteren");
    sorteeroptie1.classList.toggle("onzichtbaar");

    console.log("sorteren");
};

filterknop.addEventListener("click", laatFilterZien);
sorteerknop.addEventListener("click", laatSorterenZien);

// --- SORTEREN ---

var options = {
    valueNames: [ 'titel', 'muzikant' ]
};

var musicList = new List('muzieklijst', options);

musicList.sort('titel', { order: "asc" });

// --- FAVORIETEN ---

var favorietKnop = document.querySelectorAll('main > ul > li > button:first-of-type');
var Nummer = document.querySelector('main > ul > li');

function favoToevoegen(event) {
    let Geliked = event.target;
    
    Geliked.classList.toggle("like");
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
  


