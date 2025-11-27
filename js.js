// BOTÓN SÍ – abrir el modal usando el data-open del HTML
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    const modalId = this.dataset.open;
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.add("is-visible");
    }
});


// BOTÓN NO – se escapa correctamente
const noBtn = document.querySelector('#noBtn');

// Asegurar que el botón pueda moverse sin deformarse
noBtn.style.position = "absolute";

noBtn.addEventListener('mouseover', function () {

    // límites para que no desaparezca
    const maxX = 80;
    const maxY = 80;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.top = randomY + "%";
    noBtn.style.left = randomX + "%";
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
});
