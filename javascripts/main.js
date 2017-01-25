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
		// dutchTranslate(input);
		input = document.getElementById("text-to-translate").value;
		output.innerHTML = Translate.translateToDutch(input);
		console.log("Dutch: ",  dutchTranslate);
	} else if (languageSelect.value === "spanish") {
		Translate.translateToSpanish;
		input = document.getElementById("text-to-translate").value;
		output.innerHTML = Translate.translateToSpanish(input);
		console.log(output)
	} else if (languageSelect.value === "german") {
		input = document.getElementById("text-to-translate").value;
		output.innerHTML = Translate.translateToGerman(input);
		console.log(output)
		//console.log("German: ",  input);
	}
})
//output our translation on the page
//output.innerHTML = `<h1>Translation: </h1>`; //${} 
//});

// this is our condition statement for each language

//output our translation on the page
//output.innerHTML = `<h1>Translation: </h1>`; //${} 


console.log("This works");
