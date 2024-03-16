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
        bestaätigungsButton.style.visibility="hidden;"
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