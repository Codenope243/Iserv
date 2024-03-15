function bestätigen() {

    const inputPassword = document.getElementById("password-input").value;

    const storedPassword = "iservAdmin";

    console.log("Eingabedaten:",password-input);
    console.log("Gespeicherte Daten:",storedPassword);

    if (inputPassword === storedPassword) {
        
        console.log("Daten stimmen überein");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1200);
       
    } else {
        console.log("Daten stimmen nicht überein");
        console.log("Daten stimmen überein");
    }
}




const bestätigungsContainer =document.getElementById("zurücksetzen-bestätigungs-container")
bestätigungsContainer.style.visibility = "hidden";

function profilZurücksetzenBesätigung(){
    
    if(bestätigungsContainer.style.visibility === "hidden"){

        bestätigungsContainer.style.visibility = "visible";
    }else{
        bestätigungsContainer.style.visibility = "hidden";
    }
}