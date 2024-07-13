document.addEventListener('DOMContentLoaded', () => {
    // Existing code can be removed as we're no longer using a slider
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.image-card img');

function openFullImage(img, index) {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');
    
    fullImage.src = img.src;
    fullImageOverlay.style.display = 'flex';
    currentImageIndex = index;
}

function closeFullImage() {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    fullImageOverlay.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    const fullImage = document.getElementById('fullImage');
    fullImage.src = images[currentImageIndex].src;
}

// Close the full image view when clicking outside the image
document.getElementById('fullImageOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'fullImageOverlay') {
        closeFullImage();
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('fullImageOverlay').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeFullImage();
        }
    }
});