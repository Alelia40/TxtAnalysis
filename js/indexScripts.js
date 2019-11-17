function onSubmitPressed() {


	//Show Input Text Toggle
	var inputtedTextToggle = document.getElementById("inputtedTextToggle");
	var inputtedTextDisplay = document.getElementById("inputtedTextDisplay");
	if (inputtedTextToggle.checked == true){
		inputtedTextDisplay.style.display = "block";
		var textValue = document.getElementById("textInputContents").value;
		document.getElementById("inputtedText").innerHTML = textValue;
	} else {
		inputtedTextDisplay.style.display = "none";
	}

	//Spelling Errors Toggle
	var spellingErrorsToggle = document.getElementById("spellingErrorsToggle");
	var spellingErrorsDisplay = document.getElementById("spellingErrorsDisplay");
	if (spellingErrorsToggle.checked == true){
		spellingErrorsDisplay.style.display = "block";
	} else {
		spellingErrorsDisplay.style.display = "none";
	}

	//Subjectivity Toggle
	var subjectivityToggle = document.getElementById("subjectivityToggle");
	var subjectivityDisplay = document.getElementById("subjectivityDisplay");
	if (subjectivityToggle.checked == true){
		subjectivityDisplay.style.display = "block";
	} else {
		subjectivityDisplay.style.display = "none";
	}

	//Subjectivity Toggle
	var objectivityToggle = document.getElementById("objectivityToggle");
	var objectivityDisplay = document.getElementById("objectivityDisplay");
	if (objectivityToggle.checked == true){
		objectivityDisplay.style.display = "block";
	} else {
		objectivityDisplay.style.display = "none";
	}

	//Polarity Toggle
	var polarityToggle = document.getElementById("polarityToggle");
	var polarityDisplay = document.getElementById("polarityDisplay");
	if (polarityToggle.checked == true){
		polarityDisplay.style.display = "block";
	} else {
		polarityDisplay.style.display = "none";
	}

	displayResultsBox();
}

function displayResultsBox(){
	document.getElementById("resultsBox").style.display = "block";
}

function swapMethods(evt, method) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(method).style.display = "block";
	evt.currentTarget.className += " active";
}

function toggleAnalysisFilter(){
	var x = document.getElementById("analysisFilter");

	if(x.style.display == "none"){
		x.style.display = "block"
	}
	else{
		x.style.display = "none";
	}
}

function displayPolarity(polarityValue){
	document.getElementById("polarityVal").innerHTML = polarityValue;
}
