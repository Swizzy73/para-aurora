document.addEventListener('DOMContentLoaded', function() {
    const specialMessage = document.getElementById('specialMessage');
    const closeMessageBtn = document.getElementById('closeMessage');
    const galleryImage = document.getElementById('galleryImage');
    const nextPhotoBtn = document.getElementById('nextPhoto');
    const loveThoughtBtn = document.getElementById('loveThought');
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    // Exibir mensagem especial
    setTimeout(() => {
        specialMessage.style.display = 'block';
    }, 3000);

    // Fechar mensagem especial
    closeMessageBtn.addEventListener('click', () => {
        specialMessage.style.display = 'none';
    });

    // Galeria de fotos
    const photos = [
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&q=80',
        'https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&q=80',
        'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&q=80'
    ];
    
    let currentPhotoIndex = 0;
    
    nextPhotoBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        galleryImage.src = photos[currentPhotoIndex];
    });

    // Pensamentos românticos
    const loveMessages = [
        'Cada batida do meu coração é por você.',
        'Você ilumina minha vida como um raio de sol.',
        'O amor que sinto por você é infinito.',
        'Nada no mundo é mais bonito que o seu sorriso.'
    ];
    
    loveThoughtBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * loveMessages.length);
        showToast('Pensamento do Amor', loveMessages[randomIndex]);
    });

    function showToast(title, message) {
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toast.style.display = 'block';

        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000);
    }
});
