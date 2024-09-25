
function login(event) {
    event.preventDefault();

    const loginErfolgreich =document.getElementById("login-erfolgreich");
    const loginFehlgeschlagen = document.getElementById("login-fehlgeschlagen");

    const inputUsername = document.getElementById("inputUsername").value;
    const inputPassword = document.getElementById("inputPassword").value;

    const storedUsername = "mr_crash"
    const storedPassword = "iservAdmin"

    console.log("Eingabedaten:", inputUsername, inputPassword);
    console.log("Gespeicherte Daten:", storedUsername, storedPassword);

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        
        console.log("Daten stimmen überein");
        loginFehlgeschlagen.style.top="-8%";
        loginErfolgreich.style.top="5%";
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1200);


       
    } else {
        console.log("Daten stimmen nicht überein");
        console.log("Daten stimmen überein");
        loginFehlgeschlagen.style.top="5%";
    }
}


    





function navbarEinAusKlappen() {
    const navbar = document.getElementById("nav-bar-container");
    const navbarButton = document.getElementById("nav-bar-button");
    const startseitenIcon = document.getElementById("startseiten-icon");
    const startSeitenHaubtContainer = document.getElementById("start-seiten-haupt-container");

    const computedStyleNavbar = window.getComputedStyle(navbar);
    


    if (computedStyleNavbar.left === "0px") {
        navbar.style.left = "-260px";
        navbarButton.style.left = "-258px";
        startseitenIcon.style.left = "40px";
        startSeitenHaubtContainer.style.width = "calc(98svw - 20px)";
        startSeitenHaubtContainer.style.marginLeft = "20px";
        startSeitenHaubtContainer.style.transition = "0.4s ease-in-out";  
    
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

        setTimeout(() => {
            startSeitenHaubtContainer.style.transition = "0s";
            
        }, 400);
    }


}

import { stundenPlanBibliothek } from './stundenplanEingabe.js';

const stunde1 = document.getElementById("stunde1")

    const datum =document.getElementById("stundenplan-datum")

    const jetzt = new Date();
    let tag = jetzt.getDate();
    const monat = jetzt.getMonth() + 1; // Monate sind 0-basiert, daher +1
    const jahr = jetzt.getFullYear();


    const anzeigeTag = document.getElementById("stundenplan-tag")

    const today = new Date();
    const options = { weekday: 'long' };
    let dayText = today.toLocaleDateString('de-DE', options);


    if(dayText === "Sonntag"){
        dayText = "Montag"
        tag = tag + 1
        console.log(dayText)
    }else if(dayText ==="Samstag"){
        dayText = "Montag"
        tag = tag + 2
        console.log(dayText)
    anzeigeTag.innerHTML = dayText
    datum.innerHTML = tag + '.' + monat + '.' + jahr;
    }




 //dayText = "Donnerstag"; // Annahme: Der aktuelle Wochentag

 function setzeStundenplan(fach, stundeBlock) {
    const fachwerte = stundenPlanBibliothek[fach];

    if (fachwerte) {
        for (let i = 0; i < 9; i++ ) {
            const klasse = stundeBlock.getElementsByClassName("class")[i];
            const abkürzung = stundeBlock.getElementsByClassName("abkürzung")[i];
            const lehrer = stundeBlock.getElementsByClassName("lehrer")[i];
            const raum = stundeBlock.getElementsByClassName("raum")[i];

            const kurs = fachwerte["abkürzungKurs" + i];
            if (kurs) {
                klasse.innerHTML= "10d";
                abkürzung.innerHTML = kurs;
                lehrer.innerHTML = fachwerte["lehrerKurs" + i];
                raum.innerHTML = fachwerte["raumKurs" + i];
            } else {
                console.log("Keine Kursdaten für Kurs " + i);
            }
        }
    } else {
        console.log("Fach nicht gefunden für den Wochentag: " + dayText);
    }

    console.log(fachwerte);
    console.log(fach);
 
};

let fach1 = "";
let fach2 = "";
let fach3 = "";
let fach4 = "";
let fach6 = "";
let fach7 = "";
if (dayText === "Montag") {
    fach1 = "kunst";
    fach2 = "lernzeit1";  
    fach3 = "sport"
    fach4 = "sport"
    fach6 = "religion"
    fach7 = "deutsch"
} else if (dayText === "Dienstag") {
    fach1 = "mathe";
    fach2 = "deutsch";  
    fach3 = "english"
    fach4 = "bio"
    fach6 = "AGlernzeit"
}else if (dayText === "Mittwoch") {
    fach1 = "lernzeit2";
    fach2 = "GL";  
    fach3 = "mathe"
    fach4 = "EGS"
    fach6 = "hauswirtschaft"
    fach7 = "hauswirtschaft"
}else if (dayText === "Donnerstag") {
    fach1 = "deutsch";
    fach2 = "mathe";  
    fach3 = "WP"
    fach4 = "WP"
    fach6 = "Chemie"
    fach7 = "english"
}else if (dayText === "Freitag") {
    fach1 = "english";
    fach2 = "chemie";  
    fach3 = "mathe"
    fach4 = "GL"
    fach6 = "fEGS"
};

const stunde1Block = document.getElementById("stunde 1 block");
const stunde2Block = document.getElementById("stunde 2 block");
const stunde3Block = document.getElementById("stunde 3 block");
const stunde4Block = document.getElementById("stunde 4 block");
const stunde6Block = document.getElementById("stunde 6 block");
const stunde7Block = document.getElementById("stunde 7 block");

setzeStundenplan(fach1, stunde1Block);
setzeStundenplan(fach2, stunde2Block);
setzeStundenplan(fach3, stunde3Block);
setzeStundenplan(fach4, stunde4Block);
setzeStundenplan(fach6, stunde6Block);
setzeStundenplan(fach7, stunde7Block);

console.log("test");
