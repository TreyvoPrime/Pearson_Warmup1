const forward = document.getElementById("Advance");
const hidden = document.getElementById("hidden");
const messages = document.getElementById("message");
let sceneNumber = 1;

function AdvanceScene() {
    sceneNumber++;
    
    const img = document.getElementById("images");

    if (sceneNumber === 1) {
        img.src = "./images/forest1.jpg";
        hidden.hidden = true;
    }
    else if (sceneNumber === 2) {
        img.src = "./images/forest2.webp";
        messages.textContent = "You have entered the spruce tree maze.";
        hidden.hidden = true;
    }
    else if (sceneNumber === 3) {
        img.src = "./images/forest3.webp";
        messages.textContent = "You have reached the mighty observatory. Your journey ends here.";
        hidden.hidden = false;
        forward.disable = true;
    }
}

forward.addEventListener("click", AdvanceScene);
