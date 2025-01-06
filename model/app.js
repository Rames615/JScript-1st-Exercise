const texte = document.getElementById('texte');

texte.addEventListener('click', () => {
    // Alterne entre deux couleurs
    texte.style.color = texte.style.color === 'crimson' ? 'gold' : 'crimson';
});