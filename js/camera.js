var stream;
var video;

var aquireStream = function(){
  if(!navigator.getUserMedia){
    console.log("navigator.getUserMedia is unavailable.");
  }
  navigator.getUserMedia({
    video: true,
    audio: false
  }, streamAquired, streamNotAquired);
};

var initGetUserMedia = function(){
  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
};  

var closeStream = function(){
  if(stream != null){
    stream.stop();
    video.pause();
  }
};

var streamAquired = function(aquired){
  stream = aquired;
  if(video != null){
    video.src = window.URL.createObjectURL(stream);
    window.addEventListener("unload", closeStream);
    video.play();
  }
};

var streamNotAquired = function(){
  console.log("Stream aquisition is failed");
};

var boot = function(event){
  video = document.querySelector("video");
  initGetUserMedia();

  var startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", aquireStream);

};

function getCameraText(){
            var search = window.location.search;
            var text = String(search.substring(1, search.length));
            return text;
        }
        
function page(){
            var text = getCameraText();
            window.location.href="camera2.html?" + text;
        }

window.addEventListener("load", boot);
//window.addEventListener("load", page());
window.addEventListener("unload", closeStream);
