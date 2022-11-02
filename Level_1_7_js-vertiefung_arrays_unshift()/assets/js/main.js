/*
Die Methode unshift() fügt neue Elemente zum Anfang eines Arrays hinzu.

Definiere deutscheGerichte (die du kennen solltest) mit einem Array, das enthält: 
Speckkuchen, Thüringer Rostbratwurst, Quarkkeulchen, Sauerbraten.
Füge zum Array 5 deutsche Gerichte mit dem Befehl unshift() hinzu.
Gib es in der Konsole aus.
*/



const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("Königsberger Klopse");
deutscheGerichte.unshift("Currywurst Pommes");
deutscheGerichte.unshift("Kasseler mit Kartoffelpürree");
deutscheGerichte.unshift("Schnitzel");
deutscheGerichte.unshift("Frikadellen");


// console.log(deutscheGerichte);



// Mit Table sieht es ordentlicher aus ;)

console.table(deutscheGerichte);
