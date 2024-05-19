document.addEventListener('DOMContentLoaded', function() {
    const fotos = document.querySelectorAll('.foto');

    fotos.forEach(foto => {
        foto.addEventListener('click', function() {
            // Remove a classe 'expanded' de todas as fotos
            fotos.forEach(f => f.classList.remove('expanded'));
            // Adiciona a classe 'expanded' apenas à foto clicada
            foto.classList.add('expanded');
        });
    });
});