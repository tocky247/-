var counter = 0;

var update = function(event){
    var x = event.acceleration.x; //document.querySelector("#x");
    var y = event.acceleration.y; //document.querySelector("#y");
    var z = event.acceleration.z; //document.querySelector("#z");
    
    //x.textContent = event.acceleration.x;
    //y.textContent = event.acceleration.y;
    //z.textContent = event.acceleration.z;
    
    if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15) {
        alert("降ってるよ");
        counter++;
    }
}  

window.addEventListener("devicemotion", update);
