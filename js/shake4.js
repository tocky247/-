function showShakeText(text){
    var output = document.querySelector("#shake");
    output.textContent = text;
        }
function getShakeText(){
    var search = window.location.search;
    var text = String(search.substr(1, search.length));
    return text;
        }
function initializePage(){
    var text = getShakeText();
    showShakeText(text);
        }

window.addEventListener("load", initializePage);

function end() {
     window.location.href = "two.html";
}