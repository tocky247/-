function getShakeText(){
            var search = window.location.search;
            var text = String(search.substring(1, search.length));
            return text;
        }
        
function shake(){
            var text = getShakeText();
            window.location.href="shake4.html?" + text;
        }

var counter = 0;
var moji = 40;
var message = document.querySelector("#moji");

var update = function(event){
    var x = event.acceleration.x; //document.querySelector("#x");
    var y = event.acceleration.y; //document.querySelector("#y");
    var z = event.acceleration.z; //document.querySelector("#z");
    
    //x.textContent = event.acceleration.x;
    //y.textContent = event.acceleration.y;
    //z.textContent = event.acceleration.z;
    
    if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15) {
        counter++;      
        moji--;
        
        if(counter == 40){
        var text = getShakeText();
            window.location.href="shake4.html?" + text;
        }       
    }
    message.innerHTML = moji + "回";
}  

window.addEventListener("devicemotion", update);
