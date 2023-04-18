// JavaScript-Code zur Erkennung von mobilen Geräten und Anpassung der Schriftgröße
if (window.innerWidth <= 768 || window.innerHeight <= 768) {
    // Gerät hat maximale Bildschirmbreite oder -höhe von 768px (oder kleiner)
    document.querySelector('.overlay-link').style.fontSize = '80px'; // Schriftgröße für mobile Geräte anpassen
  }
  