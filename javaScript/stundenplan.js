function navbarEinAusKlappen() {
    const navbar = document.getElementById("nav-bar-container");
    const navbarButton = document.getElementById("nav-bar-button");
    const startseitenIcon = document.getElementById("startseiten-icon");
    const startSeitenHaubtContainer = document.getElementById("start-seiten-haupt-container");
    const stundenplanIcon = document.getElementById("stundenplan-icon");

    const computedStyleNavbar = window.getComputedStyle(navbar);
    


    if (computedStyleNavbar.left === "0px") {
        navbar.style.left = "-260px";
        navbarButton.style.left = "-258px";
        startseitenIcon.style.left = "40px";
        startSeitenHaubtContainer.style.width = "calc(98svw - 20px)";
        startSeitenHaubtContainer.style.marginLeft = "20px";
        startSeitenHaubtContainer.style.transition = "0.4s ease-in-out";  
        stundenplanIcon.style.left="165px";

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
        stundenplanIcon.style.left="425px";

        setTimeout(() => {
            startSeitenHaubtContainer.style.transition = "0s";
            
        }, 400);
    }


}





import { stundenPlanBibliothek } from './stundenplanEingabe.js';

let dayText = 0;

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
                klasse.innerHTML = "10d";
                abkürzung.innerHTML = kurs;
                lehrer.innerHTML = fachwerte["lehrerKurs" + i];
                raum.innerHTML = fachwerte["raumKurs" + i];
                console.log(fachwerte)
            } else {
                console.log("Keine Kursdaten für Kurs " + i);
            }
        }
    } else {
        console.log("Fach nicht gefunden für den Wochentag: " + dayText);
    }
}

function holeFächerFürTag(dayText) {
    let fächer = {
        fach1: "",
        fach2: "",
        fach3: "",
        fach4: "",
        fach6: "",
        fach7: ""
    };

    if (dayText === 0) {  // Vergleich mit numerischem Wert
        fächer.fach1 = "kunst";
        fächer.fach2 = "lernzeit1";  
        fächer.fach3 = "sport";
        fächer.fach4 = "sport";
        fächer.fach6 = "religion";
        fächer.fach7 = "deutsch";
        console.log("dayText 0");
    } else if (dayText === 1) {
        fächer.fach1 = "mathe";
        fächer.fach2 = "deutsch";  
        fächer.fach3 = "english";
        fächer.fach4 = "bio";
        fächer.fach6 = "AGlernzeit";
    } else if (dayText === 2) {
        fächer.fach1 = "lernzeit2";
        fächer.fach2 = "GL";  
        fächer.fach3 = "mathe";
        fächer.fach4 = "EGS";
        fächer.fach6 = "hauswirtschaft";
        fächer.fach7 = "hauswirtschaft";
    } else if (dayText === 3) {
        fächer.fach1 = "deutsch";
        fächer.fach2 = "mathe";  
        fächer.fach3 = "WP";
        fächer.fach4 = "WP";
        fächer.fach6 = "chemie";
        fächer.fach7 = "english";
    } else if (dayText === 4) {
        fächer.fach1 = "mathe";
        fächer.fach2 = "chemie";  
        fächer.fach3 = "mathe";
        fächer.fach4 = "GL";
        fächer.fach6 = "fEGS";
    }

    return fächer;
}

function erstelleStundenplanFürTag(dayText) {
    const fächer = holeFächerFürTag(dayText);

    const stunde1Block = document.getElementById("stunde 1 block");
    const stunde2Block = document.getElementById("stunde 2 block");
    const stunde3Block = document.getElementById("stunde 3 block");
    const stunde4Block = document.getElementById("stunde 4 block");
    const stunde6Block = document.getElementById("stunde 6 block");
    const stunde7Block = document.getElementById("stunde 7 block");

    setzeStundenplan(fächer.fach1, stunde1Block);
    setzeStundenplan(fächer.fach2, stunde2Block);
    setzeStundenplan(fächer.fach3, stunde3Block);
    setzeStundenplan(fächer.fach4, stunde4Block);
    setzeStundenplan(fächer.fach6, stunde6Block);
    setzeStundenplan(fächer.fach7, stunde7Block);
}

for (let i = 0; i < 5; i++) {  // Iteration über 5 Wochentage (0 bis 4)
    console.log("Erstelle Stundenplan für Wochentag", dayText);
    erstelleStundenplanFürTag(dayText);
    dayText += 1;
}

console.log("script ende");
