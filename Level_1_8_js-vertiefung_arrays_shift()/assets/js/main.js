/*
Die Methode shift() entfernt das erste Element eines Arrays.

Verwende das deutscheGerichte-Array aus der vorherigen Übung.
Entferne aus dem Array 3 Werte mit Hilfe der Methode shift();
Speichere diese als Array nichtGut.
Gib diese Variable in der Konsole aus.

*/

const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.shift("Speckkuchen");
deutscheGerichte.shift("Sauerbraten");
deutscheGerichte.shift("Quarkkeulchen");

const nichtGut = deutscheGerichte;
console.log(nichtGut);


console.log(deutscheGerichte);

