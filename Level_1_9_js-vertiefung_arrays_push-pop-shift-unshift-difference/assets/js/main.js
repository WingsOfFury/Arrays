/*
Wenn Du Dinge am Anfang und Ende eines JavaScript-Arrays hinzufügst und entfernst, kann es schwierig sein, sich daran zu erinnern, welche Methode was tut. Hier sind einige Tipps:

Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
Push und Pop verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).
In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger.
*/


/*
Erstelle ein Array und ordne es einer Variablen zu.
Array mit Werte: 23, 54, 75;
Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
*/

let numbers = ["23", "54", "75"]
console.log(numbers)

numbers.push("11");
numbers.push("32");
numbers.push("42");
numbers.push("5");
numbers.push("71");
console.log(numbers);

numbers.unshift("14");
numbers.unshift("8");
numbers.unshift("7");
numbers.unshift("3");
numbers.unshift("1");
console.log(numbers)

numbers.pop("5")
numbers.pop("71")
console.log(numbers)

numbers.shift("1")
numbers.shift("3")
console.log(numbers)