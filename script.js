const but = document.getElementById("but");
const menu = document.querySelector("#menu > ul");
but.addEventListener("click", tf);
var aktif = false;

function tf() {
    aktif = !aktif;
    if (aktif == true) {
        menu.style.left = "0";

    }
    if (aktif == false) {
        menu.style.left = "-100%";

    }
}