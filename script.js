const zegar = document.getElementById("zegar");

function pokazCzas(){
    const teraz = new Date();
    zegar.textContent = teraz.toLocaleTimeString();
}

pokazCzas();
setInterval(pokazCzas, 1000);