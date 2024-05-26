
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
    }

    anzeigeTag.innerHTML = dayText
    datum.innerHTML = tag + '.' + monat + '.' + jahr;



const stundenPlanBibliothek = {
    religion: {
        klasse:"09d",
        abkürzungKurs0: "ER",
        lehrerKurs0: "(BLO)",
        raumKurs0: "0.80 9b", 

        abkürzungKurs1: "KR",
        lehrerKurs1: "(BEC)",
        raumKurs1: "1.160 10f",

        abkürzungKurs2: "KR",
        lehrerKurs2: "(BRE)",
        raumKurs2: "0.82 9d", 

        abkürzungKurs3: "KR",
        lehrerKurs3: "(HSE)",
        raumKurs3: "0.79 9a", 

        abkürzungKurs4: "PP",
        lehrerKurs4: "(GUT)",
        raumKurs4: "0.81 9e", 

        abkürzungKurs5: "PP",
        lehrerKurs5: "(SUM)",
        raumKurs5: "0.83 9e", 
    },
    mathe: {
        klasse:"09d",
        abkürzungKurs0: "M-E",
        lehrerKurs0: "(DTZ)",
        raumKurs0: "0.80 9b", 

        abkürzungKurs1: "M-E",
        lehrerKurs1: "(KRE)",
        raumKurs1: "1.148",

        abkürzungKurs2: "M-E",
        lehrerKurs2: "(LIN)",
        raumKurs2: "2.125 Q2", 

        abkürzungKurs3: "M-E",
        lehrerKurs3: "(VEE)",
        raumKurs3: "0.83 9e", 

        abkürzungKurs4: "M-G",
        lehrerKurs4: "(BRE)",
        raumKurs4: "0.82 9d", 

        abkürzungKurs5: "M-G",
        lehrerKurs5: "(GOR)",
        raumKurs5: "0.81 9c", 

        abkürzungKurs6: "M-G",
        lehrerKurs6: "(LMB)",
        raumKurs6: "0.79 9a", 
    },

    WP: {
        klasse:"09d",
        abkürzungKurs0: "WP AL",
        lehrerKurs0: "(GLO)",
        raumKurs0: "0.56 TC", 

        abkürzungKurs1: "WP AL",
        lehrerKurs1: "(STT)",
        raumKurs1: "0.79 9a",

        abkürzungKurs2: "WP DG",
        lehrerKurs2: "(BUB)",
        raumKurs2: "2.100 DUG", 

        abkürzungKurs3: "WP NL",
        lehrerKurs3: "(KAM)",
        raumKurs3: "0.80 9b", 

        abkürzungKurs4: "WP NW",
        lehrerKurs4: "(SCO)",
        raumKurs4: "2.54  CH", 

        abkürzungKurs5: "WP NW",
        lehrerKurs5: "(TCS)",
        raumKurs5: "2.58 NW",
    },

    deutsch: {
        klasse:"09d",
        abkürzungKurs0: "D-E",
        lehrerKurs0: "(BRN)",
        raumKurs0: "0.81 9e", 

        abkürzungKurs1: "D-E",
        lehrerKurs1: "(DOE)",
        raumKurs1: "0.82 9d",

        abkürzungKurs2: "D-E",
        lehrerKurs2: "(HAC)",
        raumKurs2: "0.80 9b", 

        abkürzungKurs3: "D-E",
        lehrerKurs3: "(STG)",
        raumKurs3: "1.148", 

        abkürzungKurs4: "D-G",
        lehrerKurs4: "(APK)",
        raumKurs4: "0.79 9a", 

        abkürzungKurs5: "D-G",
        lehrerKurs5: "(BRC)",
        raumKurs5: "1.160 10f",

        abkürzungKurs6: "D-E",
        lehrerKurs6: "(GRE)",
        raumKurs6: "0.83 9e", 
    },

    EGS:{
        klasse:"09d",
        abkürzungKurs0: "EGS FfJ",
        lehrerKurs0: "(STT)",
        raumKurs0: "0.83 9e", 

        abkürzungKurs1: "EGS GGS",
        lehrerKurs1: "(COR)",
        raumKurs1: "0.80 9b",

        abkürzungKurs2: "EGS IF 1",
        lehrerKurs2: "(ANG)",
        raumKurs2: "1.64 IF", 

        abkürzungKurs3: "EGS L",
        lehrerKurs3: "(GUT)",
        raumKurs3: "1.157", 

        abkürzungKurs4: "EGS NW",
        lehrerKurs4: "(HOL)",
        raumKurs4: "0.81 9c", 

        abkürzungKurs5: "EGS PÄ",
        lehrerKurs5: "(STG)",
        raumKurs5: "0.82 9d",

        abkürzungKurs6: "EGS SP",
        lehrerKurs6: "(KEM)",
        raumKurs6: "HSH 2", 
    },

    physik:{
        klasse:"09d",
        abkürzungKurs0: "PH",
        lehrerKurs0: "(ANG)",
        raumKurs0: "1.54", 
    },

    chemie:{
        klasse:"09d",
        abkürzungKurs0: "Ch-E",
        lehrerKurs0: "(AER)",
        raumKurs0: "1.54 PH", 

        abkürzungKurs1: "CH-E",
        lehrerKurs1: "(NOW)",
        raumKurs1: "2.55 CH",

        abkürzungKurs2: "CH-E",
        lehrerKurs2: "(SCO)",
        raumKurs2: "1.54 CH", 

        abkürzungKurs3: "CH-G",
        lehrerKurs3: "(PLU)",
        raumKurs3: "1.62 PH", 

        abkürzungKurs4: "CH-G",
        lehrerKurs4: "(TSC)",
        raumKurs4: "2.58 CH", 

        abkürzungKurs5: "CH-G",
        lehrerKurs5: "(UHL)",
        raumKurs5: "2.60 CH",

        abkürzungKurs6: "CH-G",
        lehrerKurs6: "(WSL)",
        raumKurs6: "1.55 PH", 
    },

    GL:{
        klasse:"09d",
        abkürzungKurs0: "GL",
        lehrerKurs0: "(REI)",
        raumKurs0: "0.82 9d", 
    },

    EWTOlernzeit:{
        klasse:"09d",
        abkürzungKurs0: "LZ/EWTO",
        lehrerKurs0: "(BRE)",
        raumKurs0: "0.79 9a", 
    },

    sport:{
        klasse:"09d",
        abkürzungKurs0: "SP",
        lehrerKurs0: "(DOE)",
        raumKurs0: "GSH 1", 
    },

    english:{
        klasse:"09d",
        abkürzungKurs0: "E-E",
        lehrerKurs0: "(BIC)",
        raumKurs0: "0.79 9a", 

        abkürzungKurs1: "E-E",
        lehrerKurs1: "(BLO)",
        raumKurs1: "0.79 9a",

        abkürzungKurs2: "E-E",
        lehrerKurs2: "(DOG)",
        raumKurs2: "2.159 EF", 

        abkürzungKurs3: "E-E",
        lehrerKurs3: "(MUC)",
        raumKurs3: "1.81 9c", 

        abkürzungKurs4: "E-E",
        lehrerKurs4: "(TIM)",
        raumKurs4: "0.82 9d", 

        abkürzungKurs5: "E-G",
        lehrerKurs5: "(ALM)",
        raumKurs5: "1.148",

        abkürzungKurs6: "E-G",
        lehrerKurs6: "(COR)",
        raumKurs6: "0.83 9e", 

        abkürzungKurs7: "E-G",
        lehrerKurs7: "(HAC)",
        raumKurs7: "0.80 9b", 
    
        abkürzungKurs8: "E-G",
        lehrerKurs8: "(SCL)",
        raumKurs8: "2.152 Q1",
    },

    lernzeit:{
        klasse:"09d",
        abkürzungKurs0: "LZ",
        lehrerKurs0: "(REI)",
        raumKurs0: "0.82 9d", 
    },

    musik:{
        klasse:"09d",
        abkürzungKurs0: "MU",
        lehrerKurs0: "(MUC)",
        raumKurs0: "2.105 MU", 
    },

    AGlernzeit:{
        klasse:"09d",
        abkürzungKurs0: "AG",
        lehrerKurs0: "(BEY)",
        raumKurs0: "1.106 MU", 

        abkürzungKurs1: "AG",
        lehrerKurs1: "(BRN)",
        raumKurs1: "",

        abkürzungKurs2: "AG",
        lehrerKurs2: "(HEL)",
        raumKurs2: "2.147 Q2", 

        abkürzungKurs3: "AG",
        lehrerKurs3: "(SOO)",
        raumKurs3: "1.15 Medio", 

        abkürzungKurs4: "AG",
        lehrerKurs4: "(UEB)",
        raumKurs4: "0.61 KU", 

        abkürzungKurs5: "EGS L",
        lehrerKurs5: "(GUT)",
        raumKurs5: "1.157",

        abkürzungKurs6: "IT",
        lehrerKurs6: "(DIE)",
        raumKurs6: "2.157 EF", 

        abkürzungKurs7: "LZ 7-10",
        lehrerKurs7: "(COR)",
        raumKurs7: "0.82 9d", 
    }
};

 //dayText = "Donnerstag"; // Annahme: Der aktuelle Wochentag

 function setzeStundenplan(fach, stundeBlock) {
    const fachwerte = stundenPlanBibliothek[fach];

    if (fachwerte) {
        for (let i = 0; i < 9; i++ ) {
            const klasse = stundeBlock.getElementsByClassName("class")[i]
            const abkürzung = stundeBlock.getElementsByClassName("abkürzung")[i];
            const lehrer = stundeBlock.getElementsByClassName("lehrer")[i];
            const raum = stundeBlock.getElementsByClassName("raum")[i];
            
            const kurs = fachwerte["abkürzungKurs" + i];
            if (kurs) {
                klasse.innerHTML= "09d"
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

    console.log(fachwerte)
    console.log(fach)
 
}

let fach1 = "";
let fach2 = "";
let fach3 = "";
let fach4 = "";
let fach6 = "";
let fach7 = "";
if (dayText === "Montag") {
    fach1 = "WP";
    fach2 = "chemie";  
    fach3 = "deutsch"
    fach4 = "english"
    fach6 = "musik"
    fach7 = "GL"
} else if (dayText === "Dienstag") {
    fach1 = "deutsch";
    fach2 = "mathe";  
    fach3 = "religion"
    fach4 = "english"
    fach6 = "AGlernzeit"
}else if (dayText === "Mittwoch") {
    fach1 = "EGS";
    fach2 = "GL";  
    fach3 = "mathe"
    fach4 = "lernzeit"
    fach6 = "english"
    fach7 = "lernzeit"
}else if (dayText === "Donnerstag") {
    fach1 = "deutsch";
    fach2 = "religion";  
    fach3 = "mathe"
    fach4 = "chemie"
    fach6 = "WP"
    fach7 = "EGS"
}else if (dayText === "Freitag") {
    fach1 = "physik";
    fach2 = "EWTOlernzeit";  
    fach3 = "sport"
    fach4 = "sport"
    fach6 = "GL"
}

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


