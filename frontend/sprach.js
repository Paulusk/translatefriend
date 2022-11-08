var speechkitElement = new webkitSpeechRecognition();

speechElement.lang = 'de-DE';
speechElement.lang = 'en-EN';
speechElement.interimResults = true;
speechElement.continuous = true;
var final_transcript = '';
speechElement.start();

speechElement.onstart = function(){
    console.log('start')
}

speechElement.onresult = function(event){
    console.log("event")
}
