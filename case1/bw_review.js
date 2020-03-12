"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: 
   Date:   
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/



  
window.onload = init;

// step 5 dfines the event listeners used in the page
function init(){
   // 5a, declares all stars classes
   var stars = document.getElementsByClassName("span#stars img");
   // 5b, loops the star collection for each star image
   for(var i = 0; i < stars.length; i++){
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars);
      
   }
   // 5c, event listener that runs the updateCount()
   document.getElementById("commentField").addEventListener("keyup", updateCount);
}

function lightStars(){
   var startNumber  = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < startNumber; i++){
      stars[i].src = 
   }
}



  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   