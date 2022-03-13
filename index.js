document.querySelector(".btn").addEventListener("click", mouseClick);

function mouseClick() {
    checker();
    buttonAnimation();
}

function checker() {
    var x = document.getElementById("num").value; 
    if (x%4===0) {
        if (x%100===0) {
            if (x%400===0) {
                document.querySelector("h1").innerHTML = x + " is a leap year.";
            } else {
                document.querySelector("h1").innerHTML = x + " is not a leap year.";
            }
        } else {
            document.querySelector("h1").innerHTML = x + " is a leap year.";
        }
    } else {
        document.querySelector("h1").innerHTML = x + " is not a leap year.";
    }
}

function buttonAnimation() {
    document.querySelector(".btn").classList.add("pressed");
    setTimeout(function name() {document.querySelector(".btn").classList.remove("pressed");}, 150);
  }



