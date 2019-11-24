function onSubmitPressed() {
	displayDials();
	displayResultsBox();

	setSubjectivityValue(10);
	setObjectivityValue(10);
}

function displayDials(){
	
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

function setPolarityValue(polarityValue){
	document.getElementById("polarityVal").innerHTML = polarityValue;
}

function setSubjectivityValue(subjectivityValue){
	var opts = {
		angle: -0.20, // The span of the gauge arc
		lineWidth: 0.44, // The line thickness
		radiusScale: 1, // Relative radius
		pointer: {
		  length: 0.6, // // Relative to gauge radius
		  strokeWidth: 0.035, // The thickness
		  color: '#000000' // Fill color
		},
		limitMax: true,     // If false, max value increases automatically if value > maxValue
		limitMin: true,     // If true, the min value of the gauge will be fixed
		colorStart: '#bde7f4',   // Colors
		colorStop: '#32b3dd',    // just experiment with them
		strokeColor: '#E0E0E0',  // to see which ones work best for you
		generateGradient: true,
		highDpiSupport: true,     // High resolution support
		renderTicks: {
			divisions: 5,
			divWidth: 1.1,
			divLength: 0.7,
			divColor: '#333333',
			subDivisions: 3,
			subLength: 0.5,
			subWidth: 0.6,
			subColor: '#666666'
		  }  
	  };
	  var target = document.getElementById('subDial'); // your canvas element
	  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
	  gauge.setTextField(document.getElementById('subVal'));
	  gauge.maxValue = 99; // set max gauge value
	  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
	  gauge.animationSpeed = 32; // set animation speed (32 is default value)
	  gauge.set(subjectivityValue); // set actual value
}

function setObjectivityValue(objectivityValue){
	var opts = {
		angle: -0.20, // The span of the gauge arc
		lineWidth: 0.44, // The line thickness
		radiusScale: 1, // Relative radius
		pointer: {
		  length: 0.6, // // Relative to gauge radius
		  strokeWidth: 0.035, // The thickness
		  color: '#000000' // Fill color
		},
		limitMax: true,     // If false, max value increases automatically if value > maxValue
		limitMin: true,     // If true, the min value of the gauge will be fixed
		colorStart: '#bde7f4',   // Colors
		colorStop: '#32b3dd',    // just experiment with them
		strokeColor: '#E0E0E0',  // to see which ones work best for you
		generateGradient: true,
		highDpiSupport: true,     // High resolution support
		renderTicks: {
			divisions: 5,
			divWidth: 1.1,
			divLength: 0.7,
			divColor: '#333333',
			subDivisions: 3,
			subLength: 0.5,
			subWidth: 0.6,
			subColor: '#666666'
		  }  
	  };
	  var target = document.getElementById('objDial'); // your canvas element
	  var gauge2 = new Gauge(target).setOptions(opts); // create sexy gauge!
	  gauge2.setTextField(document.getElementById('objVal'));
	  gauge2.maxValue = 99; // set max gauge value
	  gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
	  gauge2.animationSpeed = 32; // set animation speed (32 is default value)
	  gauge2.set(objectivityValue); // set actual value
}
