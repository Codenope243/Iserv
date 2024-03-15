function login(event) {
    event.preventDefault();

    const loginErfolgreich =document.getElementById("login-erfolgreich");
    const loginFehlgeschlagen = document.getElementById("login-fehlgeschlagen");

    const inputUsername = document.getElementById("inputUsername").value;
    const inputPassword = document.getElementById("inputPassword").value;

    const storedUsername = "mr_crash";
    const storedPassword = "iservAdmin";

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
