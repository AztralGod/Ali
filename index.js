function enableIslandButtons() {
    const islandButtons = document.querySelectorAll('.island-button');
    islandButtons.forEach(function(button) {
        button.disabled = false; // Habilita cada botón de la isla
    });
}

function changeText(button) {
    const originalBackground = button.style.backgroundImage;
    button.innerHTML = "Don't Click";
    button.style.backgroundImage = "url(media/nube2.gif)";
    setTimeout(function() {
        button.innerHTML = "¿Click Me?";
        button.style.backgroundImage = originalBackground;
    }, 400);
  }

function activateGifAnimation() {
    const treasureMap = document.querySelector('.treasure-map');
    const path = document.querySelector('.path-image');
    const islands = document.querySelectorAll('.island-button');
    treasureMap.style.backgroundImage = "url('media/mapa.gif')";
    treasureMap.style.backgroundSize = "cover";
    treasureMap.style.animation = "none";
    setTimeout(function() {
        treasureMap.style.animation = "none"; // Restablece la animación después de un breve intervalo
        islands.forEach(function(button) {
            button.style.opacity = "1";
        });
        path.style.opacity="1";
        enableIslandButtons();
    }, 250); // Ajusta el tiempo de espera según la duración de la animación del GIF
    
}

function changeText2(button){
    const bruj = document.getElementById('brujula');
    bruj.innerHTML = "Regresar";
    setTimeout(function() {
        button.innerHTML = "";
    }, 600);
}


function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
    }
}

// Función para cerrar la ventana emergente
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

document.getElementById('island1').onclick = function () {
    openPopup('popup-island1');
};

document.getElementById('island2').onclick = function () {
    openPopup('popup-island2');
};

document.getElementById('island3').onclick = function () {
    openPopup('popup-island3');
};

document.getElementById('island4').onclick = function () {
    openPopup('popup-island4');
};

document.getElementById('island5').onclick = function () {
    openPopup('popup-island5');
};

document.getElementById('island6').onclick = function () {
    openPopup('popup-island6');
};

document.getElementById('island7').onclick = function () {
    openPopup('popup-island7');
};

document.getElementById('island8').onclick = function () {
    openPopup('popup-island8');
};

function submitAnswer(popupId) {
    console.log('Función submitAnswer llamada');
    const answer = document.getElementById(`answer-${popupId}`);
    const linkElement = document.getElementById(`link-${popupId}`);
    console.log('Respuesta del usuario:', answer.value);
    if(popupId == "popup-island1"){
        if (answer && linkElement) {
            const userAnswer = answer.value.toLowerCase();
            
            if (userAnswer === "microondas") {
                linkElement.style.display = "block";
            }
    
        }
    }
    if(popupId == "popup-island2"){
        if (answer && linkElement) {
            const userAnswer = answer.value.toLowerCase();
            if (userAnswer === "wanderer" || userAnswer === "trotamundos" || userAnswer === "trotis") {
                linkElement.style.display = "block";
            }
    
        }
    }
    if(popupId == "popup-island3"){
        if (answer && linkElement) {
            const userAnswer = answer.value.toLowerCase();
            if (userAnswer === "itto" || userAnswer === "arataki itto") {
                linkElement.style.display = "block";
            }
    
        }
    }
    if(popupId == "popup-island4"){
        if (answer && linkElement) {
            const userAnswer = answer.value.toLowerCase();
            if (userAnswer === "facebook" || userAnswer === "fb") {
                linkElement.style.display = "block";
            }
    
        }
    }
    if(popupId == "popup-island8"){
        if (answer && linkElement) {
            const userAnswer = answer.value.toLowerCase();
            if (userAnswer === "u") {
                linkElement.style.display = "block";
            }
    
        }
    }
}
