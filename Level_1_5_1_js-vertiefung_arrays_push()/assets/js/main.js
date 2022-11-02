/*
Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
Definiere ein Array songs, das folgendes enthält:

Bohemian Rhapsody, Stairway to Heaven, Hotel California

Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
Speichere das Array als Variable totalSongs.
Gebe totalSongs in der Konsole aus.

Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:
die 5 besten Fußballspieler.
Füge 3 Torhüter hinzu.
Gebe es in der Konsole aus.
*/

/*
Du kannst mehrere Elemente zu Deinem Array hinzufügen.
Verwende das Komma zwischen den Werten.
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");

Füge Songs zum Array hinzu, die dir nicht gefallen.
Füge die besten 3 Trainer aller Zeiten zu Array hinzu.
*/



const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
songs.push("Sweet Child O'Min", "Hey Jude", "Smells Like Teen Spirit");
let totalSongs = songs;

console.table(totalSongs);
console.log(totalSongs.length);


const besteFussballerAllerZeiten = ["Zinedine Zidane", "Zlatan Ibrahimovic","Thierry Henry","Diego Maradona", "Didier Drogba"];
besteFussballerAllerZeiten.push("Oliver Kahn", "Iker Casilas", "Peter Schmeichel");

console.log(besteFussballerAllerZeiten)


const artists = ["Barbie Girl"];
artists.push("Arsene Wenger", "Otto Rehagel", "Jogi Löw");
console.log(artists)



