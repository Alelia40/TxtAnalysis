function displayText() {
   var textValue = document.getElementById("textInsert").value;
	document.getElementById("results").innerHTML = textValue;
}

function swapMethods(buttonName){
   if(buttonName == 'file'){
      document.getElementById('manualInput').style.display = "none";
      document.getElementById('docUpload').style.display = "block";
   }
   else{
      document.getElementById('manualInput').style.display = "block";
      document.getElementById('docUpload').style.display = "none";
   }
}

function displayPolarity(polarityValue){
   document.getElementById("polarityVal").innerHTML = polarityValue;
}
