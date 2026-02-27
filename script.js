const forward = document.getElementById("Advance");
const hidden = document.getElementById("hidden");
const messages = document.getElementById("message");
let sceneNumber = 1;
function AdvanceScene() {
    sceneNumber++
    console.log(sceneNumber)
    const img = document.getElementById("images");
    if (sceneNumber === 1) {
        img.src = "./images/forest1.jpg"
        document.getElementById("hidden").hidden = true;
    }
    else if (sceneNumber === 2) {
        img.src = "./images/forest2.webp"
        messages.textContent = "You have entered the spruce tree maze."
        document.getElementById("hidden").hidden = true;

    }
    else if (sceneNumber === 3) {
        img.src = "./images/forest3.webp"
        hidden.textContent = "You have reached the mighty observetory your journey ends here."
    }

}
addEventListener("click", AdvanceScene);
