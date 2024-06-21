function mobileMax575(){

    
}

function adjustHeight() {
    const container = document.getElementById('container');
    if (window.innerWidth <= 575.98) {
        container.style.height = 'auto';
    } else {
        container.style.height = '500px'; // Volta à altura original se necessário
    }
}

// Ajusta a altura ao carregar a página
adjustHeight();

// Ajusta a altura quando a janela é redimensionada
window.addEventListener('resize', adjustHeight);