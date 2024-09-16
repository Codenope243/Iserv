
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
    anzeigeTag.innerHTML = dayText
    datum.innerHTML = tag + '.' + monat + '.' + jahr;
    }


const stundenPlanBibliothek = {
    religion: {
        klasse:"10d",
        abkürzungKurs0: "ER",
        lehrerKurs0: "(HAC)",
        raumKurs0: "1.160 10b", 

        abkürzungKurs1: "KR",
        lehrerKurs1: "(BEC)",
        raumKurs1: "1.153 10a",

        abkürzungKurs2: "KR",
        lehrerKurs2: "(RID)",
        raumKurs2: "1.155 10c", 

        abkürzungKurs3: "KR",
        lehrerKurs3: "(WES)",
        raumKurs3: "1.159 10d", 

        abkürzungKurs4: "PP",
        lehrerKurs4: "(BRN)",
        raumKurs4: "1.152 10e", 

        abkürzungKurs5: "PP",
        lehrerKurs5: "(SUM)",
        raumKurs5: "1.157 10e", 
    },
    mathe: {
        klasse:"10d",
        abkürzungKurs0: "M-E",
        lehrerKurs0: "(DTZ)",
        raumKurs0: "1.160 10b", 

        abkürzungKurs1: "M-E",
        lehrerKurs1: "(MUE)",
        raumKurs1: "1.152",

        abkürzungKurs2: "M-E",
        lehrerKurs2: "(LIN)",
        raumKurs2: "1.153 10a", 

        abkürzungKurs3: "M-E",
        lehrerKurs3: "(VEE)",
        raumKurs3: "1.157 10e", 

        abkürzungKurs4: "M-G",
        lehrerKurs4: "(BRE)",
        raumKurs4: "1.159 10d", 

        abkürzungKurs5: "M-G",
        lehrerKurs5: "(GOR)",
        raumKurs5: "1.155 9c", 
 
    },

    WP: {
        klasse:"10d",
        abkürzungKurs0: "WP AL",
        lehrerKurs0: "(GLO)",
        raumKurs0: "0.56 TC", 

        abkürzungKurs1: "WP AL",
        lehrerKurs1: "(STT)",
        raumKurs1: "1.152",

        abkürzungKurs2: "WP DG",
        lehrerKurs2: "(ANT)",
        raumKurs2: "2.100 DUG", 

        abkürzungKurs3: "WP DG",
        lehrerKurs3: "(ANT)",
        raumKurs3: "0.63 KU",

        abkürzungKurs4: "WP NL",
        lehrerKurs4: "(GAT)",
        raumKurs4: "1.153 10a", 

        abkürzungKurs5: "WP NW",
        lehrerKurs5: "(FIS)",
        raumKurs5: "1.62 PH", 

        abkürzungKurs6: "WP NW",
        lehrerKurs6: "(SCO)",
        raumKurs6: "2.60 CH",
    },

    deutsch: {
        klasse:"10d",
        abkürzungKurs0: "D-E",
        lehrerKurs0: "(BRC)",
        raumKurs0: "1.152", 

        abkürzungKurs1: "D-E",
        lehrerKurs1: "(DOE)",
        raumKurs1: "1.155 10c",

        abkürzungKurs2: "D-E",
        lehrerKurs2: "(HAC)",
        raumKurs2: "1.60 10b", 

        abkürzungKurs3: "D-E",
        lehrerKurs3: "(STG)",
        raumKurs3: "1.157 10e", 

        abkürzungKurs4: "D-G",
        lehrerKurs4: "(GRE)",
        raumKurs4: "1.153 10a", 

        abkürzungKurs5: "D-G",
        lehrerKurs5: "(WST)",
        raumKurs5: "1.159 10d",
    },

    EGS:{
        klasse:"10d",
        abkürzungKurs0: "EGS FfJ",
        lehrerKurs0: "(STT)",
        raumKurs0: "1.148", 

        abkürzungKurs1: "EGS GGS",
        lehrerKurs1: "(COR)",
        raumKurs1: "1.153 10a",

        abkürzungKurs2: "EGS IF 1",
        lehrerKurs2: "(ANG)",
        raumKurs2: "1.64 IF", 

        abkürzungKurs3: "EGS L",
        lehrerKurs3: "(GUT)",
        raumKurs3: "1.147", 

        abkürzungKurs4: "EGS LZP",
        lehrerKurs4: "(GOR)",
        raumKurs4: "1.157 10e",

        abkürzungKurs5: "EGS NW",
        lehrerKurs5: "(WDG)",
        raumKurs5: "0.63 KU", 

        abkürzungKurs6: "EGS PÄ",
        lehrerKurs6: "(SOO)",
        raumKurs6: "1.155 10c",

        abkürzungKurs7: "EGS SP",
        lehrerKurs7: "(KEM)",
        raumKurs7: "1.160 10b",
        
        abkürzungKurs8: "EGS SP",
        lehrerKurs8: "(KEM)",
        raumKurs8: "ASA",
    },

    fEGS:{
        klasse:"10d",
        abkürzungKurs0: "EGS FÖFO",
        lehrerKurs0: "(BIS)",
        raumKurs0: "0.61 KU",
        
        abkürzungKurs1: "EGS FÖFO",
        lehrerKurs1: "(BRN)",
        raumKurs1: "1.100",

        abkürzungKurs2: "EGS FÖFO",
        lehrerKurs2: "(DEC)",
        raumKurs2: "1.157 10e",

        abkürzungKurs3: "EGS FÖFO",
        lehrerKurs3: "(FIS)",
        raumKurs3: "1.152",

        abkürzungKurs4: "EGS FÖFO",
        lehrerKurs4: "(GOE)",
        raumKurs4: "2.63 BI",

        abkürzungKurs5: "EGS FÖFO",
        lehrerKurs5: "(GSL)",
        raumKurs5: "0.62 KU",

        abkürzungKurs6: "EGS FÖFO",
        lehrerKurs6: "(MUE)",
        raumKurs6: "1.155 10c",

        abkürzungKurs7: "EGS FÖFO",
        lehrerKurs7: "(SCL)",
        raumKurs7: "1.159 10d",

        abkürzungKurs8: "EGS FÖFO",
        lehrerKurs8: "(THO)",
        raumKurs8: "2.75 informatik 2",

        abkürzungKurs9: "EGS FÖFO",
        lehrerKurs9: "(WSL)",
        raumKurs9: "2.152 Q1",

        abkürzungKurs10: "EGS L",
        lehrerKurs10: "(GUT)",
        raumKurs10: "1.147",

        abkürzungKurs11: "LC Dep",
        lehrerKurs11: "(SOO)",
        raumKurs11: "1.13 LEZ",
    },

    chemie:{
        klasse:"10d",
        abkürzungKurs0: "Ch-E",
        lehrerKurs0: "(AER)",
        raumKurs0: "1.55 PH", 

        abkürzungKurs1: "CH-E",
        lehrerKurs1: "(NOW)",
        raumKurs1: "2.55 CH",

        abkürzungKurs2: "CH-E",
        lehrerKurs2: "(SCO)",
        raumKurs2: "1.54 CH", 

        abkürzungKurs3: "CH-G",
        lehrerKurs3: "(PLU)",
        raumKurs3: "1.54 PH", 

        abkürzungKurs4: "CH-G",
        lehrerKurs4: "(UHL)",
        raumKurs4: "2.60 CH", 

        abkürzungKurs5: "CH-G",
        lehrerKurs5: "(WSL)",
        raumKurs5: "2.58 NW", 
    },

    GL:{
        klasse:"10d",
        abkürzungKurs0: "GL",
        lehrerKurs0: "(REI)",
        raumKurs0: "1.159 10d", 
    },

    lernzeit1:{
        klasse:"10d",
        abkürzungKurs0: "LZ",
        lehrerKurs0: "(REI)",
        raumKurs0: "1.159 10d", 
    },

    lernzeit2:{
        klasse:"10d",
        abkürzungKurs0: "LZ",
        lehrerKurs0: "(HEL)",
        raumKurs0: "1.159 10d", 
    },

    sport:{
        klasse:"10d",
        abkürzungKurs0: "SP",
        lehrerKurs0: "(DOE)",
        raumKurs0: "ASA", 
    },

    english:{
        klasse:"10d",
        abkürzungKurs0: "E-E",
        lehrerKurs0: "(DOG)",
        raumKurs0: "1.159 10d", 

        abkürzungKurs1: "E-E",
        lehrerKurs1: "(MUC)",
        raumKurs1: "1.155 10c",

        abkürzungKurs2: "E-E",
        lehrerKurs2: "(SCL)",
        raumKurs2: "1.157 10e", 

        abkürzungKurs3: "E-G",
        lehrerKurs3: "(COR)",
        raumKurs3: "1.152", 

        abkürzungKurs4: "E-G",
        lehrerKurs4: "(GOT)",
        raumKurs4: "1.153 10a", 

        abkürzungKurs5: "E-G",
        lehrerKurs5: "(HAC)",
        raumKurs5: "1.160 10b",
    },

    AGlernzeit:{
        klasse:"10d",
        abkürzungKurs0: "AG",
        lehrerKurs0: "(ANT)",
        raumKurs0: "0.61 KU", 

        abkürzungKurs1: "AG",
        lehrerKurs1: "(BEY)",
        raumKurs1: " 1.106 MU",

        abkürzungKurs2: "AG",
        lehrerKurs2: "(RUN)",
        raumKurs2: "1.15 Medio", 

        abkürzungKurs3: "AG",
        lehrerKurs3: "(GUT)",
        raumKurs3: "1.147", 

        abkürzungKurs4: "AG",
        lehrerKurs4: "(DIE)",
        raumKurs4: "1.64 IF", 

        abkürzungKurs7: "LZ 7-10",
        lehrerKurs5: "(BRE)",
        raumKurs5: "0.82 9d", 
    },

    kunst:{
        klasse:"10d",
        abkürzungKurs0:"KU",
        lehrerKurs0:"BIS",
        raumKurs0:"0.62 KU",
    },

    bio:{
        klasse:"10d",
        abkürzungKurs0:"BI",
        lehrerKurs0:"BRE",
        raumKurs0:"2.58",
    },

    hauswirtschaft:{
        klasse:"10d",
        raumKurs0:"HW",
        lehrerKurs0:"DIR",
        raumKurs0:"1.34 KÜ",

        raumKurs1:"HW",
        lehrerKurs1:"STT",
        raumKurs1:"1.60 KÜ",

        raumKurs2:"TC",
        lehrerKurs2:"SHG",
        raumKurs2:"0.56 TC",
    },
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
                klasse.innerHTML= "10d"
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