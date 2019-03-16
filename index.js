let x = document.getElementById("myMenu");
x.className = "navMenu"
iconMenu.onclick = function () {
    if (x.className === "navMenu") {
        x.className += " responsive"
    } else {
        x.className = "navMenu"
    }
}