const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const gridItems = document.querySelectorAll('.grid-item');
const images = ['sketchbook/bild1.jpg', 'sketchbook/bild2.jpg', 
'sketchbook/bild3.jpg', 'sketchbook/bild4.jpg', 'sketchbook/bild5.jpg', 
'sketchbook/bild6.jpg', 'sketchbook/bild7.jpg', 'sketchbook/bild8.jpg', 
'sketchbook/bild9.jpg', 'sketchbook/bild10.jpg', 'sketchbook/bild11.jpg', 
'sketchbook/bild12.jpg', 'sketchbook/bild13.jpg', 'sketchbook/bild14.jpg', 
'sketchbook/bild15.jpg', 'sketchbook/bild16.jpg', 'sketchbook/bild17.jpg', 
'sketchbook/bild18.jpg', 'sketchbook/bild19.jpg', 'sketchbook/bild20.jpg', 
'sketchbook/bild21.jpg', 'sketchbook/bild22.jpg', 'sketchbook/bild23.jpg', 
'sketchbook/bild24.jpg', 'sketchbook/bild25.jpg', 'sketchbook/bild26.jpg',
'sketchbook/bild27.jpg', 'sketchbook/bild28.jpg', 'sketchbook/bild29.jpg', 'sketchbook/bild30.jpg',
'sketchbook/bild31.jpg', 'sketchbook/bild32.jpg', 'sketchbook/bild33.jpg',
'sketchbook/bild34.jpg', 'sketchbook/bild35.jpg', 'sketchbook/bild36.jpg',
'sketchbook/bild37.jpg', 'sketchbook/bild38.jpg', 'sketchbook/bild39.jpg',
'sketchbook/bild40.jpg', 'sketchbook/bild41.jpg', 'sketchbook/bild42.jpg',
'sketchbook/bild43.jpg', 'sketchbook/bild44.jpg'];

// Funktion zum Mischen der Bilder
function shuffleImages() {
  images.sort(() => Math.random() - 0.5);
  gridItems.forEach((item, index) => {
    item.querySelector('img').src = images[index];
  });
}

shuffleImages(); // Mische die Bilder beim Laden der Seite zum ersten Mal

gridItems.forEach((item) => {
  item.addEventListener('click', () => {
    overlayImage.src = item.querySelector('img').src;
    overlay.classList.add('active');
  });
});

overlay.querySelector('.overlay img').addEventListener('click', () => {
  overlay.classList.remove('active');
});
