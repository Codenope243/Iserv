function navbarEinAusKlappen() {
    let navbar = document.getElementById("nav-bar-container");
    let navbarButton = document.getElementById("nav-bar-button");
    let startseitenIcon = document.getElementById("startseiten-icon");
    let startSeitenHaubtContainer = document.getElementById("start-seiten-haupt-container");
    let dateinIcon = document.getElementById("datein-icon");

    let computedStyleNavbar = window.getComputedStyle(navbar);
    


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





let bestätigungsContainer =document.getElementById("zurücksetzen-bestätigungs-container")
let passwordText = document.getElementById("password-falsch-text");
let dateiGröße = document.getElementsByClassName("datei-größe");
let bestätigungsButton = document.getElementById("bestätigen-button")


function bestätigen() {

    let storedPassword = "aim";
    let inputPassword = document.getElementById("password-input").value;
    let LetzteÄnderung = document.getElementsByClassName("datum")


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
        bestätigungsButton.style.transition="0s";
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
        bestätigungsContainer.style.visibility = "visible";
    }else{
        bestätigungsContainer.style.visibility = "hidden";
        passwordText.style.visibility="hidden";
    }
}


//hier sind alle funktionen die für die gruppen ansicht zuständig sind\\

let eigeneDateinButton =document.getElementById("eigene-datein-button")
let gruppenDateinButton = document.getElementById("gruppen-datein-button")
let coudDateinButton = document.getElementById("cloud-datein-button")

let filesDateinSpalte  = document.getElementById("files-datein-spalte")    
let groupsDateinSpale = document.getElementById("groups-datein-spalte")
let tempDateinSpalte = document.getElementById("temp-datein-spalte")
let windowsDateinSpalte = document.getElementById("windows-datein-spalte")

let filesName = document.getElementById("files-name")
let groupsName = document.getElementById("groups-name")
let tempName = document.getElementById("temp-name")
let windowsName =document.getElementById("windows-name")

let dateiType = document.getElementsByClassName("datei-type")

let dateinManager = document.getElementById("datein-manager")
let dateinHeader2 = document.getElementById("datein-header2")
let cloudContainer =document.getElementById("cloud-container")
cloudContainer.replaceWith(dateinManager)

function eigeneDateinEinblenden(){

    dateinHeader2.style.position=""
    dateinHeader2.style.visibility="visible"
    cloudContainer.replaceWith(dateinManager)

    windowsDateinSpalte.style.visibility="visible"

    filesName.innerHTML="Files"
    groupsName.innerHTML="Groups"
    tempName.innerHTML="Temp"
    
    for (let i=0; i<dateiType.length; i++){
        dateiType[i].innerHTML="Ordner"
    }


}


function gruppenEinblenden(){
    dateinHeader2.style.position=""
    dateinHeader2.style.visibility="visible"
cloudContainer.replaceWith(dateinManager)

windowsDateinSpalte.style.transition="0s"
windowsDateinSpalte.style.visibility="hidden"

filesName.innerHTML="D-E 9D"
groupsName.innerHTML="M-E 9D"
tempName.innerHTML="E-E 9D"

for (let i=0; i< dateiType.length; i++){
    
    dateiType[i].innerHTML="Gruppen Ordner"
}

}

function cloudEinblenden() {
    dateinHeader2.style.visibility = "hidden";

    setTimeout(function(){
        dateinHeader2.style.position="absolute"
    },210)

   
        setTimeout(function() {
            dateinManager.replaceWith(cloudContainer);
        }, 200); 
    
   
}
