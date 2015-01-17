var THREASHOLD = 20;
var CLASSNAME = "night";

var elm = document.querySelector("body");

var audio = new Audio();
audio.src = "GO FOR IT.wav";

var update = function(event){
  console.log(event.value);
  if(event != null && event.value != null && event.value < THREASHOLD){
    elm.classList.add(CLASSNAME);
    audio.play();
    
  }else{
    elm.classList.remove(CLASSNAME);
  }
};

window.addEventListener("devicelight", update);

function showDarkText(text){
    var output = document.querySelector("#dark");
    output.textContent = text;
        }
function getDarkText(){
    var search = window.location.search;
    var text = String(search.substr(1, search.length));
    return text;
        }
function initializePage(){
    var text = getDarkText();
    showDarkText(text);
        }

window.addEventListener("load", initializePage);

function end() {
     window.location.href = "two.html";
}
