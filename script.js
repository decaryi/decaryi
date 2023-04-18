// JavaScript-Code zur Erkennung von mobilen Geräten und Anpassung der Schriftgröße
if (window.innerWidth <= 800 || window.innerHeight <= 800) {
    // Gerät hat maximale Bildschirmbreite oder -höhe von 768px (oder kleiner)
    document.querySelector('.overlay-link').style.fontSize = '80px'; // Schriftgröße für mobile Geräte anpassen
  }
  