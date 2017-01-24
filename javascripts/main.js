"use strict";

// each language option in the DOM declared as a variable 
var selectDutch = document.getElementById("selectDutch");
var selectSpanish = document.getElementById("selectSpanish");
var selectGerman = document.getElementById("selectGerman");
var languageSelect = document.getElementById("languageSelect");

var button;
// this is our input
var input = document.getElementById("text-to-translate").value;
input.addEventListener("click", Translate(input));

// this is our variables for each language 
var dutchTranslate = Translate.translateToDutch("input");
var spanishTranslate = Translate.translateToSpanish("input");
var germanTranslate = Translate.translateToGerman("input");


// this is our output
var output = document.getElementById("translated-text");


// this is our condition statement for each language 

function langPicker(){
if (languageSelect.selectedIndex === "0")  {
	selectDutch;
} else if (languageSelect.selectedIndex === "1") {
	selectSpanish;
} else if (languageSelect.selectedIndex === "2") {
	selectGerman;
}
//output our translation on the page
output.innerHTML = `<h1>Translation: ${} </h1>`;
};
