"use strict";


console.log("Translate",  Translate);
// each language option in the DOM declared as a variable 
var languageSelect = document.getElementById("languageSelect");

var button = document.getElementById('button');
// this is our input
var input = document.getElementById("text-to-translate").value;

console.log("This works");

// these are our variables for each language 
var dutchTranslate = Translate.translateToDutch;
var spanishTranslate = Translate.translateToSpanish;
var germanTranslate = Translate.translateToGerman;

console.log("This works");
// this is our output
var output = document.getElementById("translated-text");

console.log("This works");


button.addEventListener("click", function(){
	if (languageSelect.value === "dutch")  {
		var translatePhrase = Translate.translateToDutch(input);
	} else if (languageSelect.value === "spanish") {
		var translatePhrase = Translate.translateToSpanish(input);
	} else if (languageSelect.value === "german") {
		var translatePhrase = Translate.translateToGerman(input);
	}
//output our translation on the page
output.innerHTML = `<h1>Translation: </h1>`; //${} 
});

// this is our condition statement for each language

//output our translation on the page
output.innerHTML = `<h1>Translation: </h1>`; //${} 


console.log("This works");
