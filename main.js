var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content ;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie --- ")
        speak();
    }
    else 
    {
      trying();
    }
  
  
     
    

}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:250,
    height:300,
    image_format : 'png' ,
    png_quality:90
   
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src = "' + data_uri+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
    window.alert("Selfie Saved ")
}

function trying()
{
    var synth = window.speechSynthesis;

    speak_data = "I CAN'T UNDERSTAND PLEASE say TAKE MY SELFIE";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

   window.alert("Please Tell 'Take My Selfie' ")
   

}
