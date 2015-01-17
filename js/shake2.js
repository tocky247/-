function transiteToShake3(text){   
    window.location.href="shake3.html?" + text;
}

function shake(){
    var input = document.querySelector("#shake");
    var text = String(input.value);
//    localforage.setItem("shakeNubmer", number, transiteToShake3);
    transiteToShake3(text);
}
