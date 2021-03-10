var prediction1 = "";
var prediction2 = "";
Webcam.set({
 width : 350,
 height : 300,
 image_format : 'png',
 png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = "<img id = 'captured_image' src = " + data_uri + ">";
 });
}
console.log("ml5 version : ", ml5.version); 
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KpuXNvavI/model.json", model_loaded);
function model_loaded(){
 console.log("Model Loaded");
}
function speak(){
 synth = window.speechSynthesis;
 speakData = "The first prediction is " + prediction1 + " and the second prediction is " + prediction2;
 utterThis = new SpeechSynthesisUtterance(speakData);
 synth.speak(utterThis);
}
function check(){
 img = document.getElementById("captured_image");
 classifier.classify(img, gotResult);
}
function gotResult(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
  prediction1 = results[0].label;
  prediction2 = results[1].label;
  document.getElementById("result_emotion_name").innerHTML = prediction1;
  document.getElementById("result_emotion_name2").innerHTML = prediction2;
  speak();
  if(prediction1 == "Joyful"){
   document.getElementById("update_emoji").innerHTML = "&#128522;";
  }
  if(prediction1 == "Sad"){
   document.getElementById("update_emoji").innerHTML = "&#128532;";
  }
  if(prediction1 == "Fearful"){
   document.getElementById("update_emoji").innerHTML = "&#x1F628;";
  }
  if(prediction1 == "Disgusted"){
   document.getElementById("update_emoji").innerHTML = "&#x1F616;";
  }
  if(prediction1 == "Angry"){
   document.getElementById("update_emoji").innerHTML = "&#x1F620;";
  }
  if(prediction2 == "Joyful"){
   document.getElementById("update_emoji2").innerHTML = "&#128522;";
  }
  if(prediction2 == "Sad"){
   document.getElementById("update_emoji2").innerHTML = "&#128532;";
  }
  if(prediction2 == "Fearful"){
   document.getElementById("update_emoji2").innerHTML = "&#x1F628;";
  }
  if(prediction2 == "Disgusted"){
   document.getElementById("update_emoji2").innerHTML = "&#x1F616;";
  }
  if(prediction2 == "Angry"){
   document.getElementById("update_emoji2").innerHTML = "&#x1F620;";
  }
 }
}