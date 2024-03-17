function navbarEinAusKlappen() {
    const navbar = document.getElementById("nav-bar-container");
    const navbarButton = document.getElementById("nav-bar-button");
    const startseitenIcon = document.getElementById("startseiten-icon");
    const startSeitenHaubtContainer = document.getElementById("start-seiten-haupt-container");
    const dateinIcon = document.getElementById("datein-icon");

    const computedStyleNavbar = window.getComputedStyle(navbar);
    


    if (computedStyleNavbar.left === "0px") {
        navbar.style.left = "-260px";
        navbarButton.style.left = "-258px";
        startseitenIcon.style.left = "40px";
        startSeitenHaubtContainer.style.width = "calc(98svw - 20px)";
        startSeitenHaubtContainer.style.marginLeft = "20px";
        startSeitenHaubtContainer.style.transition = "0.4s ease-in-out";  
        dateinIcon.style.left="165px";

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
        dateinIcon.style.left="425px";

        setTimeout(() => {
            startSeitenHaubtContainer.style.transition = "0s";
            
        }, 400);
    }


}





const bestätigungsContainer =document.getElementById("zurücksetzen-bestätigungs-container")
const passwordText = document.getElementById("password-falsch-text");
const dateiGröße = document.getElementsByClassName("datei-größe");
const bestaätigungsButton = document.getElementById("bestätigen-button")


function bestätigen() {

    const storedPassword = "iservAdmin";
    const inputPassword = document.getElementById("password-input").value;
    const LetzteÄnderung = document.getElementsByClassName("datum")


    const jetzt = new Date();
    const tag = jetzt.getDate();
    const monat = jetzt.getMonth() + 1; // Monate sind 0-basiert, daher +1
    const jahr = jetzt.getFullYear();
    const stunde = jetzt.getHours();
    const minute = jetzt.getMinutes();

    const ganzesDatum = tag + '.' + monat + '.' + jahr + ' ' +stunde+ ':'+minute;
    
    console.log(ganzesDatum);


    console.log("Eingabedaten:",inputPassword);
    console.log("Gespeicherte Daten:",storedPassword);

    if (inputPassword === storedPassword) {        
        console.log("Daten stimmen überein");
        passwordText.innerHTML="password richtig";
        passwordText.style.color="green";

        bestätigungsContainer.style.visibility = "hidden";
        bestaätigungsButton.style.transition="0s";
        passwordText.style.visibility="hidden";
    
             for (let i =0; i < dateiGröße.length; i++){
            dateiGröße[i].innerHTML="0.0MB"
         }

         for (let d=0; d <LetzteÄnderung.length; d++){
            LetzteÄnderung[d].innerHTML=ganzesDatum;
         }

       
    } else {
        console.log("Daten stimmen nicht überein");
        passwordText.innerHTML="password falsch";
        passwordText.style.color="red";
        passwordText.style.visibility="visible";
    }
}






bestätigungsContainer.style.visibility = "hidden";

function profilZurücksetzenBesätigung(){
    
    
    if(bestätigungsContainer.style.visibility === "hidden"){
        bestaätigungsButton.style.transition="0.4s";
        bestätigungsContainer.style.visibility = "visible";
    }else{
        bestaätigungsButton.style.transition="0s";
        bestätigungsContainer.style.visibility = "hidden";
        passwordText.style.visibility="hidden";
    }
}