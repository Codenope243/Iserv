function navbarEinAusKlappen() {
    const navbar = document.getElementById("nav-bar-container");
    const navbarButton = document.getElementById("nav-bar-button");
    const startseitenIcon = document.getElementById("startseiten-icon");
    const startSeitenHaubtContainer = document.getElementById("start-seiten-haupt-container");
    const dateinicon = document.getElementById("datein-icon");

    const computedStyleNavbar = window.getComputedStyle(navbar);
    


    if (computedStyleNavbar.left === "0px") {
        navbar.style.left = "-260px";
        navbarButton.style.left = "-258px";
        startseitenIcon.style.left = "40px";
        startSeitenHaubtContainer.style.width = "calc(98svw - 20px)";
        startSeitenHaubtContainer.style.marginLeft = "20px";
        startSeitenHaubtContainer.style.transition = "0.4s ease-in-out";  
        dateinicon.style.left="165px"

        setTimeout(() => {
            startSeitenHaubtContainer.style.transition = "0s";
        }, 400);

    } else {
        navbar.style.left = "0px";
        navbarButton.style.left = "0px";
        startseitenIcon.style.left = "300px";
        startSeitenHaubtContainer.style.width = "calc(98svw - 265px)";
        startSeitenHaubtContainer.style.marginLeft = "263px";
        startSeitenHaubtContainer.style.transition = "0.4s ease-in-out";
        dateinicon.style.left="430px"

        setTimeout(() => {
            startSeitenHaubtContainer.style.transition = "0s";
            
        }, 400);
    }


}

function profilZurücksetzenBesätigung(){
    
    const bestätigungsContainer =document.getElementById("zurücksetzen-bestätigungs-container")
    
    if(bestätigungsContainer.style.visibility === "hidden"){

        bestätigungsContainer.style.visibility = "visible";
    }else{
        bestätigungsContainer.style.visibility = "hidden"
    }
}