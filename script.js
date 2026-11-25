const zegar = document.getElementById("zegar");

function pokazCzas(){
    const teraz = new Date();
    zegar.textContent = teraz.toLocaleTimeString();
}

pokazCzas();
setInterval(pokazCzas, 1000);

const loader = document.getElementById("loading-screen");

setTimeout(() => {
    loader.classList.add("hidden");
}, 500);