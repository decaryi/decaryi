window.addEventListener('load', function() {
    // Zufällige Reihenfolge der Bilder beim Laden der Seite
    var imageGrid = document.querySelector('.image-grid');
    var images = Array.from(imageGrid.getElementsByTagName('img'));
    
    shuffleArray(images);
    
    images.forEach(function(img) {
      imageGrid.appendChild(img);
    });
  });
  
  // Funktion zum Mischen des Arrays
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  