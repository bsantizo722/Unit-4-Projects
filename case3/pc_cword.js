"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: 
   Date:   
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

//steps 4a - 4f
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

//step 5
window.onload = init;

//step 6
function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0]; 
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
}

// step 7
function formatPuzzle(puzzleLetter) {
 
   //step 7a
   currentLetter = puzzleLetter; 
   
   //step 7b
   for (var i = 0; i < allLetters.length; i++) {
      allLetters[i].style.backgroundColor = "";
   }
   
   //step 7c
   acrossClue.style.color = "";
   downClue.style.color = "";
   
   //step 7d
   if (currentLetter.dataset.clueA !== undefined) {
 
      //step 7d i
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
 
      //step 7d ii
      acrossClue.style.color = "blue";
 
      //step 7d iii
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
 
      //step 7d iv
      for (var i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
   }
 
   //step 7e
   if (currentLetter.dataset.clueD !== undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      for (var i = 0; i < wordLetters.length; i++) {
         wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   //step 7f
   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}
function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0]; 
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
   
   //step 8a
   formatPuzzle(currentLetter);
   
   //step 8b
   for (var i = 0; i < allLetters.length; i++) {
      //step 8b i
      allLetters[i].style.cursor = "pointer";  
      //step 8b ii    
      allLetters[i].onmousedown = function(e) {
         formatPuzzle(e.target);
      };
   }
} 
   //step 10
   document.onkeydown = selectLetter;
   
   //step 12a
   var typeImage = document.getElementById("directionImg");
   //step 12b
   typeImage.style.cursor = "pointer";
   //step 12c
   typeImage.onclick = switchTypeDirection;
 
 
//step 11
function switchTypeDirection() {
   //step 11a
   var typeImage = document.getElementById("directionImg");
   //step 11b-c
   if (typeDirection === "right") {
      typeDirection = "down";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   } else {
      typeDirection = "right";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }   
}

/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
