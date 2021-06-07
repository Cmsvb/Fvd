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


    // Nummer.classList.toggle("liked");
  
// -- FILTER EN SORTEER ---
var filterknop = document.getElementById("filteroptie");
var filteropties = document.querySelector(".filteren");

// var sorteerknop = document.getElementById("sorteeroptie");
// var sorteeropties = document.getElementById("sorteren");

function laatFilterZien(){
    console.log("filteren");
    // filteropties.classList.toggle("onzichtbaar");
    
};
// function laatSorterenZien(){
//     console.log("sorteren");
//     filteropties.classList.toggle("onzichtbaar");
    
// };

filterknop.addEventListener("click", laatFilterZien);

// sorteerknop.addEventListener("click", laatSorterenZien);


// --- FAVORIETEN LIJST ---

// var favorietenLijst = document.querySelectorAll('main > header > button');

// function laatFavoZien(){
//     let deLijst = document.querySelector("main > ul");
//     if (condition) {
        
//     }
// }

// favorietenLijst.addEventListener('click', laatFavoZien)
    
// .forEach(element => {
//     if (favorietKnop.classList.contains("like")) {
//           console.log("i did it");
//     }
// });

// console.log("i did it");
// if (event.target.classList.contains("like")){
//     parentElement.classList.add("liked");
// } 
// else {
//     // var Nummer = document.querySelector('main > ul > li');
//     parentElement.classList.remove("liked");
// }

// --- FAVORIETEN LIJST ---
// var options = {
//     valueNames: [ 'titel', 'artiest']
// };

// var musicList = new List('muzieklijst', options);

// musicList.sort('titel', { order: "asc" });

