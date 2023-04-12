// Array mit den Dateinamen der Bilder
var bilder = ["bild1.png", "bild2.png", "bild3.png", "bild4.png", "bild5.png"];

// Variable für den Index des aktuellen Bildes
var aktuellesBildIndex = 0;

// Funktion zum Wechseln des Bildes
function wechselBild() {
  // Aktuelles Bild ausblenden
  document.getElementById("slideshow").style.backgroundImage = "url('" + bilder[aktuellesBildIndex] + "')";
  
  // Index für das nächste Bild erhöhen
  aktuellesBildIndex++;
  
  // Wenn Index größer als die Anzahl der Bilder ist, auf das erste Bild zurücksetzen
  if (aktuellesBildIndex >= bilder.length) {
    aktuellesBildIndex = 0;
  }
  
  // Funktion alle 10 Sekunden aufrufen
  setTimeout(wechselBild, 10000);
}

// Start der Diashow beim Laden der Webseite
window.onload = function() {
  wechselBild();
};
