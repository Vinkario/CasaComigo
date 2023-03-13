
function moveButton() {
    let simButton = document.querySelector(".sim");

    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    simButton.style.position = "absolute"; 
    simButton.style.left = x + "px"; 
    simButton.style.top = y + "px"; 
}

var simButton = document.querySelector(".sim"); 
simButton.addEventListener("click", moveButton); 
