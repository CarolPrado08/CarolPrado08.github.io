function abrir(modalId) {
    let modal = document.querySelector(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function fechar(modalId) {
    let modal = document.querySelector(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}
