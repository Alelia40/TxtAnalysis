
function onUploadText(){
	//generate serverside save file name
	generateServerSave();

	var serversave = sessionStorage.getItem("ServerFile");
	var textValue = document.getElementById("textInputContents").value;
	//make an http call to the api to upload text in the textbox to the serversave file
	var url = `http://25.7.255.193/cgi-bin/Repo/TxtAnalysis/api/ImportText.py?filename=${serversave}&text=${textValue}`;
	console.log(url);
	makeAPICall('POST', url, (result) => {
		console.log(result);
		//enable the generate report btn
		document.getElementById('makeReportBtn').style.display='block';
	})


}

//saves a filename to sessionstorage, this is the file that you upload text to, and all the api calls will work with
function generateServerSave(){
	var rn = new Date().getTime();
	var fileName = "file-"+rn+".txt";
	sessionStorage.setItem("ServerFile", fileName);
}

//helper to get the save file name
function getServerSave(){
	return sessionStorage.getItem("ServerFile");
}

function onSubmitPressed() {
	displayDials();
	displayResultsBox();

	//creates an api call to makereport
	var filename = getServerSave();

	makeAPICall('GET', `http://25.7.255.193/cgi-bin/Repo/TxtAnalysis/api/GenerateReport.py?filename=${filename}`, (result) => {
		alert(result);
		var myJSON = JSON.parse(result);
		alert(JSON.stringify(myJSON));
		alert(myJSON);

	});

	alert(result.spellErrors);
	alert(result.spellErrorsPercent);

	//based on results, sets values
	document.getElementById('spellingErrors').value = result.spellErrors;
	document.getElementById('spellingPercent').value = result.spellErrorsPercent;
	setSubjectivityValue(result.AverageSubjectivity);
	setObjectivityValue(result.AveragePolarity);


}


//helper method that creates the string for calling the makereport api request, adds params based on customization options
function makeRequestString(){
	var result = "put the request string here"
	return result;
}

function displayDials(){

	//Show Input Text Toggle
	var inputtedTextToggle = document.getElementById("inputtedTextToggle");
	var inputtedTextDisplay = document.getElementById("inputtedTextDisplay");
	if (inputtedTextToggle.checked == true){
		inputtedTextDisplay.style.display = "block";
		var textValue = document.getElementById("textInputContents").value;
		if(textValue == '' || textValue == null){
			document.getElementById("inputtedText").innerHTML = 'Text was empty';
		}
		else{
			document.getElementById("inputtedText").innerHTML = textValue;
		}
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

	//word count toggle
	var wcToggle = document.getElementById("wordCountToggle");
	var wcDisplay = document.getElementById("wordCountDisplay");
	if (wcToggle.checked == true){
		wcDisplay.style.display = "block";
	} else {
		wcDisplay.style.display = "none";
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

function onPolarityClick(){
	console.log("checking polarity");

	var subject = document.getElementById("polarityCheck").value;

	document.getElementById("polaritySubject").innerHTML = subject;
	var filename = getServerSave();

	makeAPICall('GET', `http://25.7.255.193/cgi-bin/Repo/TxtAnalysis/api/AvgSentimentTargeted.py?filename=${filename}&subject=${subject}`, (result) => {
		console.log(result);
	})
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
	  gauge.maxValue = 100; // set max gauge value
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
	  gauge2.maxValue = 100; // set max gauge value
	  gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
	  gauge2.animationSpeed = 32; // set animation speed (32 is default value)
	  gauge2.set(objectivityValue); // set actual value
}

function setPolarityValue(polarityValue, nounName){
	document.getElementById('polaritySubject').innerHTML = nounName;

	var opts = {
		angle: -0.2, // The span of the gauge arc
		lineWidth: 0.2, // The line thickness
		radiusScale: 1, // Relative radius
		pointer: {
		  length: 0.6, // // Relative to gauge radius
		  strokeWidth: 0.035, // The thickness
		  color: '#000000' // Fill color
		},
		limitMax: true,     // If false, max value increases automatically if value > maxValue
		limitMin: true,     // If true, the min value of the gauge will be fixed
		strokeColor: '#E0E0E0',  // to see which ones work best for you
		highDpiSupport: true,     // High resolution support

		staticZones: [
			{strokeStyle: "#F03E3E", min: -100, max: -75}, // red - highly negative
			{strokeStyle: "#FFDD00", min: -25, max: 25}, // Yellow - moderate
			{strokeStyle: "#FAAC58", min: -74, max: -26}, // orange - negative
			{strokeStyle: "#66ff66", min: 26, max: 74}, // green - positive
			{strokeStyle: "#32b3dd", min: 75, max: 100}  // blue - highly positive
		 ],

	};
	  var target = document.getElementById('polDial'); // your canvas element
	  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
	  gauge.setTextField(document.getElementById('polarityVal'));
	  gauge.maxValue = 100; // set max gauge value
	  gauge.setMinValue(-100);  // Prefer setter over gauge.minValue = 0
	  gauge.animationSpeed = 32; // set animation speed (32 is default value)
	  gauge.set(polarityValue); // set actual value

	  //set the punchline to match the dial value
	  setPunchline(polarityValue);
}

//function for polarity dial that sets a punchline to summarize the value of the dial
function setPunchline(polarityValue){
	var punchline = document.getElementById('polPunch');

	  if(polarityValue >= -99 && polarityValue <= -75){
		  punchline.innerHTML = " - Very Negative"
	  }
	  else if(polarityValue >= -74 && polarityValue <= -26){
		  punchline.innerHTML = " - Negative"
	  }
	  else if(polarityValue >= -25 && polarityValue < 0){
		  punchline.innerHTML = " - Leaning Negative"
	  }
	  else if(polarityValue == 0){
		  punchline.innerHTML = " - Neutral"
	  }
	  else if(polarityValue > 0 && polarityValue <= 25){
		  punchline.innerHTML = " - Leaning Positive"
	  }
	  else if(polarityValue >= 26 && polarityValue <= 74){
		  punchline.innerHTML = " - Positive"
	  }
	  else {
		  punchline.innerHTML = " - Very Positive"
	  }
}

function setSpellingErrors(val, percentval){
	document.getElementById('spellingErrors').innerHTML = val;
	document.getElementById('percentval').innerHTML = percentval;
}

function setWordCount(val){
	document.getElementById('wordCountVal').innerHTML = val;
}

//call like so: makeAPICall( get or post, url with params, (result)=> { do stuff with result })
function makeAPICall(method, URL, callback){
	$.ajax({
		url: URL,
		type: method,
		async: true,
		success: callback,
		error:function(error){
			console.log(`There was an error with call-${URL}`);
		}
	})
}
