document.addEventListener("DOMContentLoaded", () => {
    const loadingMessage = document.getElementById("loading-message");
    const content = document.getElementById("content");

    // Simulamos una carga de 3 segundos (puedes ajustar el tiempo)
    setTimeout(() => {
        loadingMessage.style.display = "none";
        content.style.display = "block";
    }, 3000); // 3000 milisegundos = 3 segundos
});
