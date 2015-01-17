function showCameraText(text){
            var output = document.querySelector("#camera");
            output.textContent = text;
        }
        
function getCameraText(){
            var search = window.location.search;
            var text = String(search.substr(1, search.length));
            return text;
        }
function initializePage(){
            var text = getCameraText();
            showCameraText(text);
        }
        
window.addEventListener("load", initializePage);
        
function end() {
     window.location.href = "two.html";
}