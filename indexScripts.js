function onSubmitPressed() {
   var textValue = document.getElementById("textInsert").value;
   document.getElementById("results").innerHTML = textValue;
   displayResultsBox();
}

function displayResultsBox(){
   document.getElementById("resultsBox").style.display = "block";
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
