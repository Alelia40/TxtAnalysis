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
