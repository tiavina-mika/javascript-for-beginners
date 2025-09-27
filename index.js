/**
I.1. Les variables
	1.1. Définition variable
	1.2. Les types de variables
		Types primitifs
		Types complexes
        Savoir le type des variables avec typeof
I.2. Les opérateurs
	Arithmétiques
	Affectation
	Comparaison
	Logique
	Ternaire
	Incrémentation et décrémentation
I.3. Les bases de Javascript
	3.1. Les condition (if, else)
	3.2. Les boucles
	3.3. Les fonctions
	3.4. Les évenements

I.4. Les variables avancées
	4.1. Les chaînes de caractères (String)
		Déclaration d'une string
		Concaténation (assembler du texte)
		Interpolation avec backticks (recommandée ✅)
        Transformer un String en Array (split)
		Exemple complet avec Propriétés et méthodes utiles sur les strings
	4.2. Les nombres (Number)
		Déclaration de nombres
		Opérations de base
		Conversion en nombre (Number et +)
		Méthodes utiles pour les nombres

	4.3. Les booléens (Boolean)
		Déclaration de booléens
		Comparaisons
		Conversion en booléen (Boolean et !!)
    4.4. Les objects (Object)
        Déclaration d'un object
        Accéder aux propriétés
        Modifier une propriété
        Ajouter une nouvelle propriété
        Utiliser une méthode de l’objet
        Copier un objet
        Récupérer clés et valeurs d'un objet
    4.5. Les tableaux (Array)
        Déclaration d'un tableau
        Accéder aux éléments
        Modifier un élément
        Ajouter des éléments
        Supprimer des éléments
        Parcourir un tableau
        Ordonner un tableau (sort())
        Inverser l’ordre des éléments d’un tableau (reverse())
        Copier un tableau
        Fusionner un tableau (concat, spread operator)
        Transformer array en string (join)
        Méthodes utiles
          length
          indexOf
          includes
          push
          unshift
          pop
          shift
          slice
          splice
I.5. Les fonctions avancées
    Déclaration de fonction (Function Declaration)
    Expression de fonction (Function Expression)
    Fonction fléchée (Arrow Function)
    Fonction anonyme (Anonymous Function)
    Fonction nommée dans une expression
    Utilisation d’une fonction
      Fonction qui retourne une valeur
      Fonction qui ne retourne rien (void)
      Fonction avec paramètres par défaut
      Fonction avec paramètres obligatoires
I.6 . Les boucles avancées
        Méthodes classiques
            for...of
            for...in (arrays et objects)
        Méthodes modernes
            forEach
            map
            filter
            find
            reduce
            every
            some
        Tableau d’objet
            Déclaration d'un tableau d'objets
            Accéder à un élément spécifique
            Parcourir le tableau d'objets
            Méthode map pour transformer un tableau d'objets
            Méthode filter pour sélectionner certains objets
I.7. Les fonctionnalités natives de JavaScript
    Math (calculs mathématiques)
    Date (dates et heures)
    JSON (convertir objets en texte et inversement)
    setTimeout et setInterval (temporisation)
    console (outils de debug)
I.8. Bonnes pratiques en JavaScript
  Langue
  Nommage des variables
  Nommage des fonctions
  Nommage des constantes
  Les differents Naming styles
  Écrire du code lisible
  Éviter le code dupliqué
  Ajouter des commentaires utiles
*/
        
// ===============================
// I.1 LES VARIABLES
// ===============================
console.log("===== I.1 Les variables =====");

// 1.1 Définition variable
let nom = "Alice";
const age = 25;
var ville = "Antananarivo";

console.log("I.1.1 - nom:", nom); // Alice
console.log("I.1.1 - age:", age); // 25
console.log("I.1.1 - ville:", ville); // Antananarivo

// 1.2 Les types de variables
// Types primitifs

  const texte = "Bonjour";
  const nombre = 42;
  const estVrai = true;
  const indefini = undefined;
  const nul = null;

  // Types complexes
  const objet = { nom: "Alice", age: 25 };
  const tableau = [1, 2, 3];
  function maFonction() { return "Hello"; }

console.log("I.1.2 - texte:", texte); // Bonjour
console.log("I.1.2 - nombre:", nombre); // 42
console.log("I.1.2 - estVrai:", estVrai); // true
console.log("I.1.2 - objet:", objet); // { nom: "Alice", age: 25 }
console.log("I.1.2 - tableau:", tableau); // [1,2,3]
console.log("I.1.2 - maFonction():", maFonction()); // Hello

// Savoir le type des variables avec typeof
const nom3 = "Alice";
console.log("I.1.2 - typeof nom:", typeof nom3); // string
const age3 = 25;
console.log("I.1.2 - typeof age:", typeof age3); // number
const estMajgeur = true;
console.log("I.1.2 - typeof estMajgeur:", typeof estMajgeur); // boolean
const fruits2 = ["Pomme", "Banane"];
console.log("I.1.2 - typeof fruits:", typeof fruits2); // object
const personne = { nom: "Bob", age: 30 };
console.log("I.1.2 - typeof personne:", typeof personne); // object
let variableIndefinie;
console.log("I.1.2 - typeof variableIndefinie:", typeof variableIndefinie); // undefined
const rien = null;
console.log("I.1.2 - typeof rien:", typeof rien); // object (c'est un bug historique de JS)
const direBonjour2 = () => "Bonjour";
console.log("I.1.2 - typeof direBonjour:", typeof direBonjour2); // function
// ===============================
// I.2 LES OPÉRATEURS
// ===============================
console.log("\n===== I.2 Les opérateurs =====");

// Arithmétiques
let a = 10, b = 3;
console.log("I.2 - a + b:", a + b); // 13
console.log("I.2 - a - b:", a - b); // 7
console.log("I.2 - a * b:", a * b); // 30
console.log("I.2 - a / b:", a / b); // 3.3333333333333335
console.log("I.2 - a % b:", a % b); // 1
console.log("I.2 - a ** b:", a ** b); // 1000

// Affectation
let c = 10;
let d = 5;
c += d; console.log(c); // 15
c -= d; console.log(c); // 10
c *= d; console.log(c); // 50
c /= d; console.log(c); // 10
c %= d; console.log(c); // 0
c **= 3; console.log(c); // 0

// Comparaison
const e = 10;
const f = 5;
console.log("I.2 - e === 10:", e === 10); // true
console.log("I.2 - f !== 5:", f !== 5); // false

// Logique
console.log("I.2 - true && false:", true && false); // false
console.log("I.2 - true || false:", true || false); // true
console.log("I.2 - !true:", !true); // false
const ageMajeur = 18;
const boissons = ["Coca", "Fanta", "Café", "Bière"];
const estAlcool = boissons.includes("Bière");
console.log("I.2 - ageMajeur > 18 && estAlcool:", ageMajeur >= 18 && estAlcool); // true


// Ternaire
let agePersonne = 18;
let statut = agePersonne >= 18 ? "Majeur" : "Mineur";
console.log("I.2 - statut ternaire:", statut); // Majeur

// Incrémentation et décrémentation
let g = 10;
g++;
console.log("I.2 - g++:", g); // 11
g--;
console.log("I.2 - g--:", g); // 10

// ===============================
// I.3 LES BASES DE JAVASCRIPT
// ===============================
console.log("\n===== I.3 Les bases de JavaScript =====");

// 3.1 Les conditions (if / else)
if (agePersonne >= 18) {
  console.log("I.3.1 - Condition: Majeur"); // Majeur
} else {
  console.log("I.3.1 - Condition: Mineur");
}

// 3.2 Les boucles
for (let i = 1; i <= 3; i++) {
  console.log("I.3.2 - boucle for i:", i); // 1,2,3
}

// 3.3 Les fonctions
function saluer(nom) {
  console.log("I.3.3 - Bonjour", nom);
}
saluer("Alice"); // Bonjour Alice

// 3.4 Les événements
// Exemple frontend (à exécuter dans navigateur)
if (typeof document !== "undefined") { // Vérifie si on est dans un environnement navigateur, sinon ça plante si on est en Node.js
  const bouton = document.querySelector("button");
  if (bouton) {
    bouton.addEventListener("click", () => {
      console.log("I.3.4 - Bouton cliqué !");
    });
  }
}


// ===============================
// I.4 LES VARIABLES AVANCÉES
// ===============================
console.log("\n===== I.4 Les variables avancées =====");

// 4.1 Les chaînes de caractères (String)
console.log("\n--- 4.1 String (texte) ---");
const nom1 = "Alice";
const nom2 = 'Bob';
const message = `Bonjour`;

console.log("I.4.1 - nom1:", nom3); // Alice
console.log("I.4.1 - nom2:", nom3); // Bob
console.log("I.4.1 - message:", message); // Bonjour

// Concaténation
const phraseConcat = "Bonjour " + nom3 + " " + nom3;
console.log("I.4.1 - phraseConcat:", phraseConcat); // Bonjour Alice Bob

// Interpolation avec backticks
const phraseTemplate = `Bonjour ${nom3} ${nom3}`;
console.log("I.4.1 - phraseTemplate:", phraseTemplate); // Bonjour Alice Bob

// Transformer un String en Array (split)
const listeNoms = "Alice,Bob,Charlie";
const tableauNoms = listeNoms.split(",");
console.log("I.4.1 - tableauNoms:", tableauNoms); // ["Alice", "Bob", "Charlie"]
console.log("I.4.1 - tableauNoms[0]:", tableauNoms[0]); // Alice
console.log("I.4.1 - tableauNoms[1]:", tableauNoms[1]); // Bob

// Exemple complet avec méthodes
const phrase = "   JavaScript est génial !   ";
console.log("I.4.1 - trim():", phrase.trim()); // "JavaScript est génial !"
console.log("I.4.1 - toUpperCase():", phrase.toUpperCase()); // "   JAVASCRIPT EST GÉNIAL !   "
console.log("I.4.1 - includes('JS'):", phrase.includes("JS")); // false
console.log("I.4.1 - replace('génial','puissant'):", phrase.replace("génial", "puissant")); // "   JavaScript est puissant !   "

// 4.2 Les nombres (Number)
console.log("\n--- 4.2 Number (nombres) ---");
const entier = 10;
const decimal = 3.14;
const negatif = -7;

console.log("I.4.2 - entier:", entier); // 10
console.log("I.4.2 - decimal:", decimal); // 3.14
console.log("I.4.2 - negatif:", negatif); // -7

// Opérations
const x = 10, y = 3;
console.log("I.4.2 - x + y:", x + y); // 13
console.log("I.4.2 - x % y:", x % y); // 1

// Conversion en nombre
const texteNum = "42";
console.log("I.4.2 - Number(texteNum):", Number(texteNum)); // 42
console.log("I.4.2 - +texteNum:", +texteNum); // 42

// Méthodes utiles
const prix = 19.99, quantite = 3;
const total = prix * quantite;
console.log("I.4.2 - total:", total); // 59.97
console.log("I.4.2 - total.toFixed(1):", total.toFixed(1)); // "60.0"
console.log("I.4.2 - Math.round(total):", Math.round(total)); // 60

// 4.3 Les booléens (Boolean)
console.log("\n--- 4.3 Boolean (booléens) ---");
const vrai = true;
const faux = false;

console.log("I.4.3 - vrai:", vrai); // true
console.log("I.4.3 - faux:", faux); // false

// Comparaisons
const valA = 10, valB = 5;
console.log("I.4.3 - valA > valB:", valA > valB); // true
console.log("I.4.3 - valA < valB:", valA < valB); // false
console.log("I.4.3 - valA === 10:", valA === 10); // true

// Conversion en booléen
console.log("I.4.3 - Boolean(1):", Boolean(1)); // true
console.log("I.4.3 - Boolean(0):", Boolean(0)); // false
console.log("I.4.3 - Boolean('texte'):", Boolean("texte")); // true
console.log("I.4.3 - !!'texte':", !!"texte"); // true

// Opérateurs logiques
const majeur = true;
const permis = false;
console.log("I.4.3 - majeur && permis:", majeur && permis); // false
console.log("I.4.3 - majeur || permis:", majeur || permis); // true
console.log("I.4.3 - !majeur:", !majeur); // false
console.log("I.4.3 - !permis:", !permis); // true

// 4.4 Les objets (Object)
console.log("\n--- 4.4 Object (objets) ---");
const personne2 = {
  nom: "Alice",
  prenom: "Dupont",
  age: 25,
  majeur: true,
  saluer: function() {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
  }
};
console.log("I.4.4 - personne:", personne2); // { nom: "Alice", prenom: "Dupont", age: 25, majeur: true, saluer: [Function] }

// Accéder aux propriétés
console.log("I.4.4 - personne.nom:", personne2.nom); // Alice
console.log("I.4.4 - personne['prenom']:", personne2["prenom"]); // Dupont

// Modifier une propriété
personne2.age = 26;
console.log("I.4.4 - personne.age modifié:", personne2.age); // 26

// Ajouter une nouvelle propriété
personne2.ville = "Antananarivo";
console.log("I.4.4 - personne.ville ajouté:", personne2.ville); // Antananarivo

// Utiliser une méthode de l’objet
console.log("I.4.4 - personne.saluer():", personne2.saluer()); // Bonjour, je m'appelle Dupont Alice

// Copier un objet
const personneCopie = { ...personne2 };
console.log("I.4.4 - personneCopie:", personneCopie);
personneCopie.nom = "Bob";
console.log("I.4.4 - personneCopie modifié:", personneCopie); // { nom: "Bob", prenom: "Dupont", age: 25, majeur: true }
console.log("I.4.4 - personne original:", personne); // { nom: "Alice", prenom: "Dupont", age: 25, majeur: true }

// Récupérer clés et valeurs d'un objet
const personne3 = {
  nom: "Alice",
  age: 25,
  ville: "Antananarivo"
};

const cles = Object.keys(personne3);
console.log("I.4.4 - Clés de personne:", cles); // ["nom", "age", "ville"]
const valeurs = Object.values(personne3);
console.log("I.4.4 - Valeurs de personne:", valeurs); // ["Alice", 25, "Antananarivo"]
const entrees = Object.entries(personne3);
console.log("I.4.4 - Entrées de personne:", entrees); // [["nom", "Alice"], ["age", 25], ["ville", "Antananarivo"]]

// Shallow copy vs Deep copy
const personne4 = { nom: "Alice", adresse: { ville: "Antananarivo" } };
// Shallow copy avec spread operator
// ça modifie aussi l'original car c'est une référence
const copiePersonne4 = { ...personne4 };
copiePersonne4.adresse.ville = "Paris";
console.log("I.4.4 - personne après shallow copy modifié:", personne4.adresse.ville); // Paris
console.log("I.4.4 - original personne4:", personne4); // { nom: "Alice", adresse: { ville: "Paris" } }

// Deep copy avec JSON
const copieDeepPersonne4 = JSON.parse(JSON.stringify(personne4));
copieDeepPersonne4.adresse.ville = "New York";
console.log("I.4.4 - original personne4:", personne4); // { nom: "Alice", adresse: { ville: "Paris" } }
console.log("I.4.4 - copieDeep:", copieDeepPersonne4); // { nom: "Alice", adresse: { ville: "New York" } }

// 4.5 Les tableaux (Array)
// Déclaration d'un tableau
const fruits = ["Pomme", "Banane", "Cerise"];
console.log("I.4.5 - fruits:", fruits); // ["Pomme", "Banane", "Cerise"]

// Accéder aux éléments
console.log("I.4.5 - fruits[0]:", fruits[0]); // Pomme
console.log("I.4.5 - fruits[1]:", fruits[1]); // Banane
console.log("I.4.5 - fruits[2]:", fruits[2]); // Cerise

// Modifier un élément
fruits[1] = "Orange";
console.log("I.4.5 - fruits modifié:", fruits); // ["Pomme", "Orange", "Cerise"]

// Ajouter des éléments
fruits.push("Mangue");
console.log("I.4.5 - fruits après push:", fruits); // ["Pomme", "Orange", "Cerise", "Mangue"]

fruits.unshift("Fraise");
console.log("I.4.5 - fruits après unshift:", fruits); // ["Fraise", "Pomme", "Orange", "Cerise", "Mangue"]

// Supprimer des éléments
const dernierFruit = fruits.pop();
console.log("I.4.5 - fruits après pop:", fruits); // ["Fraise", "Pomme", "Orange", "Cerise"]
console.log("I.4.5 - dernierFruit pop:", dernierFruit); // Mangue

const premierFruit = fruits.shift();
console.log("I.4.5 - fruits après shift:", fruits);
console.log("I.4.5 - premierFruit shift:", premierFruit); // Fraise

// Parcourir un tableau
for (let i = 0; i < fruits.length; i++) {
  console.log("I.4.5 - boucle for fruit:", fruits[i]);
}

// Fraise
// Pomme
// Orange
// Cerise

// Ordonner un tableau (sort)
const nombres = [5, 2, 9, 1, 5, 6];
nombres.sort((a, b) => a - b); // Tri croissant
console.log("I.4.5 - nombres trié (sort):", nombres); // [1, 2, 5, 5, 6, 9]

const fruits1 = ["Banane", "Pomme", "Cerise", "Orange"];
fruits1.sort(); // Tri alphabétique
console.log("I.4.5 - fruits1 trié (sort):", fruits1); // ["Banane", "Cerise", "Orange", "Pomme"]

// Inverser l’ordre des éléments d’un tableau (reverse)
fruits1.reverse();
console.log("I.4.5 - fruits1 inversé (reverse):", fruits1); // ["Pomme", "Orange", "Cerise", "Banane"]
nombres.reverse();
console.log("I.4.5 - nombres inversé (reverse):", nombres); // [9, 6, 5, 5, 2, 1]

// Copier un tableau
const originalFruits = ["Pomme", "Banane", "Cerise"];
const copieFruits = [...originalFruits];
console.log("I.4.5 - copieFruits:", copieFruits); // ["Pomme", "Banane", "Cerise"]
copieFruits[0] = "Orange";
console.log("I.4.5 - copieFruits modifié:", copieFruits); // ["Orange", "Banane", "Cerise"]
console.log("I.4.5 - originalFruits:", originalFruits); // ["Pomme", "Banane", "Cerise"]

// Fusionner un tableau (concat, spread operator)
const legumes = ["Carotte", "Brocoli"];
const fruits3 = ["Pomme", "Banane"];
const viandes = ["Poulet", "Boeuf"];
const aliments = fruits3.concat(legumes, viandes);
console.log("I.4.5 - aliments (concat):", aliments); // ["Pomme", "Banane", "Carotte", "Brocoli", "Poulet", "Boeuf"]

const aliments2 = [...fruits3, ...legumes, ...viandes];
console.log("I.4.5 - aliments2 (spread operator):", aliments2); // ["Pomme", "Banane", "Carotte", "Brocoli", "Poulet", "Boeuf"]

// Exemple avec spread operator pour copier et ajouter
const nouveauxFruits = [...fruits3, "Orange", "Cerise"];
console.log("I.4.5 - nouveauxFruits (spread operator):", nouveauxFruits); // ["Pomme", "Banane", "Orange", "Cerise"]

// Exemple avec spread operator pour copier et modifier
const fruitsModifies = [...fruits3];
fruitsModifies[0] = "Mangue";
console.log("I.4.5 - fruitsModifies (spread operator):", fruitsModifies); // ["Mangue", "Banane"]
console.log("I.4.5 - fruits3 original:", fruits3); // ["Pomme", "Banane"]

// Transformer array en string (join)
const fruits4 = ["Pomme", "Orange", "Cerise"];
const fruitsString = fruits4.join(", ");
console.log("I.4.5 - fruitsString (join):", fruitsString); // "Pomme, Orange, Cerise"
const fruitsStringWithoutSeparator = fruits4.join("");
console.log("I.4.5 - fruitsStringWithoutSeparator (join):", fruitsStringWithoutSeparator); // "PommeOrangeCerise"
const fruitsStringWithOtherSeparator = fruits4.join(" - ");
console.log("I.4.5 - fruitsStringWithOtherSeparator (join):", fruitsStringWithOtherSeparator); // "Pomme - Orange - Cerise"

// Methode utiles
console.log("I.4.5 - fruits length:", fruits4.length); // 3
console.log("I.4.5 - fruits.indexOf('Orange'):", fruits4.indexOf("Orange")); // 1
console.log("I.4.5 - fruits.indexOf('Mangue'):", fruits4.indexOf("Mangue")); // -1
console.log("I.4.5 - fruits.includes('Banane'):", fruits4.includes("Banane")); // false
console.log("I.4.5 - fruits.includes('Cerise'):", fruits4.includes("Cerise")); // true
console.log("I.4.5 - fruits.includes('Raisin'):", fruits4.includes("Raisin")); // false
const fruits5 = ["Pomme", "Banane"];
fruits5.push("Cerise");
console.log("I.4.5 - fruits5 après push:", fruits5); // ["Pomme", "Banane", "Cerise"]

fruits5.unshift("Fraise");
console.log("I.4.5 - fruits5 après unshift:", fruits5); // ["Fraise", "Pomme", "Banane", "Cerise"]

const dernier = fruits5.pop();
console.log("I.4.5 - fruits5 après pop:", fruits5); // ["Fraise", "Pomme", "Banane"]
console.log("I.4.5 - dernier pop:", dernier); // Cerise

const premier = fruits5.shift();
console.log("I.4.5 - fruits5 après shift:", fruits5); // ["Pomme", "Banane"]
console.log("I.4.5 - premier shift:", premier); // Fraise

const legumes2 = ["Carotte", "Brocoli", "Chou"];
const tranche = legumes2.slice(0, 2);
console.log("I.4.5 - tranche (slice):", tranche); // ["Carotte", "Brocoli"]
console.log("I.4.5 - legumes2 original:", legumes2); // ["Carotte", "Brocoli", "Chou"]

const animaux = ["Chat", "Chien", "Lapin", "Poisson"];
animaux.splice(1, 1); // Supprime 1 élément à l'index 1
console.log("I.4.5 - animaux après splice:", animaux); // ["Chat", "Lapin", "Poisson"]
animaux.splice(1, 0, "Oiseau"); // Ajoute "Oiseau" à l'index 1
console.log("I.4.5 - animaux après ajout splice:", animaux); // ["Chat", "Oiseau", "Lapin", "Poisson"]

// ===============================
// I.5 LES FONCTIONS AVANCÉES
// ===============================
console.log("\n===== I.5 Les fonctions avancées =====");
// Déclaration de fonction (Function Declaration)
// Déclaration classique
function direBonjour(nom) {
  return `Bonjour ${nom}`;
}

console.log(direBonjour("Alice"));
// Bonjour Alice

console.log(direBonjour("Bob"));
// Bonjour Bob

// Expression de fonction (Function Expression)
const direSalut = function(nom) {
  return `Salut ${nom}`;
};

console.log(direSalut("Alice"));
// Salut Alice

console.log(direSalut("Bob"));
// Salut Bob

// Fonction fléchée (Arrow Function)
const somme = (a, b) => a + b;

console.log("I.5 - somme(3, 4):", somme(3, 4));
// 7

console.log("I.5 - somme(10, 20):", somme(10, 20));
// 30

// Fonction anonyme (Anonymous Function)
setTimeout(function() {
  console.log("I.5 - Fonction anonyme après 1 seconde");
}, 1000);
// I.5 - Fonction anonyme après 1 seconde

// Fonction nommée dans une expression
const superficie = function calculSuperficie(longueur, largeur) {
  return longueur * largeur;
};
console.log(superficie(5, 3)); // 15
console.log(superficie(10, 4)); // 40
// console.log(calculSuperficie(5, 3)); // Erreur: calculSuperficie is not defined

// Utilisation d’une fonction
// 1. Fonction qui retourne une valeur
function multiplier(a, b) {
  return a * b;
}
console.log("I.5 - multiplier(4, 5):", multiplier(4, 5)); // 20
console.log("I.5 - multiplier(7, 3):", multiplier(7, 3)); // 21
// Réutiliser la valeur retournée 
const addition = (a, b) => a + b;
const trois = addition(1, 2);
console.log("I.5 - trois:", trois); // 3
const resultatMultiplication = multiplier(trois, 10);
console.log("I.5 - resultatMultiplication:", resultatMultiplication); // 30 = (1 + 2) * 10

// 2. Fonction qui ne retourne rien (void)
function afficherMessage(message) {
  console.log("I.5 - afficherMessage:", message);
}
afficherMessage("Hello World!"); // Hello World!
afficherMessage("JavaScript est génial!"); // JavaScript est génial!
const resultat = afficherMessage("Test"); // Test
console.log("I.5 - resultat de afficherMessage:", resultat); // undefined

// 3. Fonction avec paramètres obligatoires
function diviser(a, b) {
  if (b === 0) {
    return "Erreur: Division par zéro";
  }
  return a / b;
}
console.log("I.5 - diviser(10, 2):", diviser(10, 2)); // 5
console.log("I.5 - diviser(5, 0):", diviser(5, 0)); // Erreur: Division par zéro

// 4. Fonction avec paramètres par défaut
function saluerPersonne(nom = "Invité") {
  return `Bonjour ${nom}`;
}

console.log("I.5 - saluerPersonne():", saluerPersonne()); // Bonjour Invité
console.log("I.5 - saluerPersonne('Alice'):", saluerPersonne("Alice")); // Bonjour Alice
console.log("I.5 - saluerPersonne('Bob'):", saluerPersonne("Bob")); // Bonjour Bob

// ===============================
// I.6 LES BOUCLES AVANCÉES
// ===============================
console.log("\n===== I.6 Les boucles avancées =====");

// I.6.1. Méthodes classiques
console.log("\n--- I.6.1 Méthodes classiques ---");

// Boucle for
for (let i = 0; i < 5; i++) {
  console.log("I.6 - boucle for:", i);
}

// Boucle for ... of
const couleurs = ["Rouge", "Vert", "Bleu"];
for (const couleur of couleurs) {
  console.log("I.6 - boucle for...of couleur:", couleur);
}
// Rouge
// Vert
// Bleu

// Boucle for ... in (pour les objets)
const voitures = ["Toyota", "Honda", "Ford"];
for (const index in voitures) {
  console.log("I.6 - boucle for...in index:", index, voitures[index]);
}
// 0 Toyota
// 1 Honda
// 2 Ford

// Boucle while (Rarement utilisée mais à connaître)
let i = 0;
while (i < 5) {
  console.log("I.6 - boucle while:", i);
  i++;
}

// Boucle do ... while (Rarement utilisée mais à connaître)
let j = 0;
do {
  console.log("I.6 - boucle do...while:", j);
  j++;
} while (j < 5);

// I.6.2. Méthodes modernes
console.log("\n--- I.6.2 Méthodes modernes ---");

// Méthode forEach
const fleurs = ["Rose", "Tulipe", "Lys"];
fleurs.forEach((fleur, index) => {
  console.log("I.6 - forEach fleur:", index, fleur);
});
// 0 Rose
// 1 Tulipe
// 2 Lys

// Méthode map
const ordinateurs = ["Dell", "HP", "Apple"];
const ordinateursMajuscules = ordinateurs.map(ordi => ordi.toUpperCase());
console.log("I.6 - ordinateursMajuscules (map):", ordinateursMajuscules); // ["DELL", "HP", "APPLE"]
console.log("I.6 - ordinateurs original:", ordinateurs); // ["Dell", "HP", "Apple"]

// Méthode filter
const ordinateursFiltrés = ordinateurs.filter(ordi => ordi.startsWith("D"));
console.log("I.6 - ordinateursFiltrés (filter):", ordinateursFiltrés); // ["Dell"]

// Méthode find
const ordiTrouve = ordinateurs.find(ordi => ordi === "Apple");
console.log("I.6 - ordiTrouvé (find):", ordiTrouve); // "Apple"
const ordiNonTrouve = ordinateurs.find(ordi => ordi === "Asus");
console.log("I.6 - ordiNonTrouvé (find):", ordiNonTrouve); // undefined

// Méthode reduce
const nombres2 = [1, 2, 3, 4, 5];
const sommeNombres = nombres2.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
console.log("I.6 - sommeNombres (reduce):", sommeNombres); // 15

// Méthode every
const nombres3 = [2, 4, 6, 8];
const tousPositive = nombres3.every(num => num > 0);
console.log("I.6 - tousPositive (every):", tousPositive); // true

const consoles = ["PS5", "Xbox", "Switch"];
const toutesConsolesAvecW = consoles.every(console => console.includes("w"));
console.log("I.6 - toutesConsoles (every):", toutesConsolesAvecW); // false

const personnes0 = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 35 }
];
const tousMajeurs = personnes0.every(personne => personne.age >= 18);
console.log("I.6 - tousMajeurs (every):", tousMajeurs); // true

// Méthode some
const nombres4 = [1, -2, 3, 4, -5];
const auMoinsUnNegatif = nombres4.some(num => num < 0);
console.log("I.6 - auMoinsUnNegatif (some):", auMoinsUnNegatif); // true

const pays = [
      { nom: "Angleterre", langue: "Anglais" },
      { nom: "Canada", langue: "Anglais" },
      { nom: "USA", langue: "Anglais" }
];

const auMoinsUnFrancophone = pays.some(pays => pays.langue === "Français");
console.log("I.6 - auMoinsUnFrancophone (some):", auMoinsUnFrancophone); // false

const auMoinsUnAnglophone = pays.some(pays => pays.langue === "Anglais");
console.log("I.6 - auMoinsUnAnglophone (some):", auMoinsUnAnglophone); // true

const personnes1 = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 35 }
];
const totalAge = personnes1.reduce((total, personne) => total + personne.age, 0);
console.log("I.6 - totalAge (reduce):", totalAge); // 90

const phraseNomsEtAges = personnes1.reduce((phrase, personne) => {
  return phrase + `${personne.nom} a ${personne.age} ans. `;
}, "");
console.log("I.6 - phraseNomsEtAges (reduce):", phraseNomsEtAges);
// "Alice a 25 ans. Bob a 30 ans. Charlie a 35 ans. "

// I.6.3. Tableau d’objet
console.log("\n--- I.6.3 Tableau d'objet ---");
// Déclaration d'un tableau d'objets
const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 35 }
];

// Affichage des personnes
personnes.forEach((personne, index) => {
  console.log(`I.6 - personne ${index}:`, personne);
});

// personne 0: { nom: "Alice", age: 25 }
// personne 1: { nom: "Bob", age: 30 }
// personne 2: { nom: "Charlie", age: 35 }

// Accéder à un élément spécifique
console.log("I.6 - personnes[1]:", personnes[1]); // { nom: "Bob", age: 30 }
console.log("I.6 - personnes[1].nom:", personnes[1].nom); // Bob
console.log("I.6 - personnes[1].age:", personnes[1].age); // 30

// Parcourir le tableau d'objets
personnes.forEach(personne => {
  console.log(`I.6 - ${personne.nom} a ${personne.age} ans`);
});
// Alice a 25 ans
// Bob a 30 ans
// Charlie a 35 ans

// Méthode map pour transformer un tableau d'objets
const nomsPersonnes = personnes.map(personne => personne.nom);
console.log("I.6 - nomsPersonnes (map):", nomsPersonnes); // ["Alice", "Bob", "Charlie"]
const agesPersonnes = personnes.map(personne => personne.age);
console.log("I.6 - agesPersonnes (map):", agesPersonnes); // [25, 30, 35]
const personnesAvecAnneeNaissance = personnes.map(personne => {
  return { ...personne, anneeNaissance: new Date().getFullYear() - personne.age };
});
console.log("I.6 - personnesAvecAnneeNaissance (map):", personnesAvecAnneeNaissance);
// [
//   { nom: "Alice", age: 25, anneeNaissance: 1999 },
//   { nom: "Bob", age: 30, anneeNaissance: 1994 },
//   { nom: "Charlie", age: 35, anneeNaissance: 1989 }
// ]

// Méthode filter pour sélectionner certains objets
const personnesMajeures = personnes.filter(personne => personne.age >= 18);
console.log("I.6 - personnesMajeures (filter):", personnesMajeures);
// [ { nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }, { nom: "Charlie", age: 35 } ]
const personnesJeunes = personnes.filter(personne => personne.age < 30);
console.log("I.6 - personnesJeunes (filter):", personnesJeunes);
// [ { nom: "Alice", age: 25 } ]
const personneBob = personnes.filter(personne => personne.nom === "Bob");
console.log("I.6 - personneBob (filter):", personneBob);
// [ { nom: "Bob", age: 30 } ]

// ===============================
// I.7 LES FONCTIONNALITÉS NATIVES DE JAVASCRIPT
// ===============================
console.log("\n===== I.7 Les fonctionnalités natives de JavaScript =====");
// Math (calculs mathématiques)
console.log("\n--- I.7.1 Math ---");
console.log("I.7 - Math.PI:", Math.PI); // 3.141592653589793
console.log("I.7 - Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("I.7 - Math.pow(2, 3):", Math.pow(2, 3)); // 8

console.log("I.7. - Math.random():", Math.random()); // Nombre aléatoire entre 0 et 1
console.log("I.7 - Math.floor(4.7):", Math.floor(4.7)); // 4
console.log("I.7 - Math.ceil(4.3):", Math.ceil(4.3)); // 5
console.log("I.7 - Math.round(4.5):", Math.round(4.5)); // 5
console.log("I.7 - Math.max(3, 7, 2):", Math.max(3, 7, 2)); // 7
console.log("I.7 - Math.min(3, 7, 2):", Math.min(3, 7, 2)); // 2

// Date (dates et heures)
console.log("\n--- I.7.2 Date ---");
const maintenant = new Date();
console.log("I.7 - maintenant:", maintenant); // Date actuelle
console.log("I.7 - maintenant.getFullYear():", maintenant.getFullYear()); // Année actuelle
console.log("I.7 - maintenant.getMonth():", maintenant.getMonth()); // Mois (0-11)
console.log("I.7 - maintenant.getDate():", maintenant.getDate()); // Jour du mois (1-31)
console.log("I.7 - maintenant.getHours():", maintenant.getHours()); // Heures (0-23)
console.log("I.7 - maintenant.getMinutes():", maintenant.getMinutes()); // Minutes (0-59)
console.log("I.7 - maintenant.getSeconds():", maintenant.getSeconds()); // Secondes (0-59)

// JSON (convertir objets en texte et inversement)
console.log("\n--- I.7.3 JSON ---");
const objetPersonne = { nom: "Alice", age: 25, ville: "Antananarivo" };
const jsonString = JSON.stringify(objetPersonne);
console.log("I.7 - jsonString (stringify):", jsonString); // '{"nom":"Alice","age":25,"ville":"Antananarivo"}'
const objetParse = JSON.parse(jsonString);
console.log("I.7 - objetParse (parse):", objetParse); // { nom: "Alice", age: 25, ville: "Antananarivo" }
console.log("I.7 - objetParse.nom:", objetParse.nom); // Alice
console.log("I.7 - objetParse.age:", objetParse.age); // 25

// setTimeout et setInterval (temporisation)
console.log("\n--- I.7.4 setTimeout et setInterval ---");
setTimeout(() => {
  console.log("I.7 - setTimeout: Ceci s'affiche après 2 secondes");
}, 2000);

let compteur = 0;
setInterval(() => {
  if (compteur >= 5) return; // Pour arrêter après 5 affichages
  compteur++;
  console.log("I.7 - setInterval: Compteur =", compteur);
}, 1000); // Affiche le compteur toutes les secondes

// console (outils de debug)
console.log("\n--- I.7.5 console ---");
console.log("I.7 - console.log: Message de log");
console.warn("I.7 - console.warn: Message d'avertissement");
console.error("I.7 - console.error: Message d'erreur");
console.table([{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }]);


// ===============================
// I.8 LES BONNES PRATIQUES EN JAVASCRIPT
// ===============================
console.log("\n===== I.8 Les bonnes pratiques en JavaScript =====");

// Langue
const userName = "Alice"; // good

// Nommage des variables
const articleCount = 10; // camelCase
const maxHeight = 200; // camelCase
const isActive = true; // camelCase

// Constantes vs Variables
const birthYear = 1990; // Utiliser const si la valeur ne change pas
let currentYear = new Date().getFullYear(); // Utiliser let si la valeur peut changer
currentYear += 1; // Mise à jour de la variable

// Nommage des fonctions
const calculateArea = (length, width) => length * width; // camelCase pour les fonctions
const getUserInfo = (userId) => {
  // Logique pour récupérer les infos utilisateur
};
const isUserLoggedIn = () => {
  // Logique pour vérifier si l'utilisateur est connecté
};
const changeUserPassword = (userId, newPassword) => {
  // Logique pour changer le mot de passe de l'utilisateur
};

// Nommage des constantes
const MAX_USERS = 100; // UPPER_SNAKE_CASE pour les constantes
const API_ENDPOINT = "https://api.example.com"; // UPPER_SNAKE_CASE pour les constantes

// Les differents namming styles
const myVariable = 10; // camelCase
const my_variable = 10; // snake_case
const MyVariable = 10; // PascalCase
const MY_VARIABLE = 10; // UPPER_SNAKE_CASE

// Écrire du code lisible
// Espacer le code
const totalPrice = 100;
const taxRate = 0.2;
const taxAmount = totalPrice * taxRate;
const finalPrice = totalPrice + taxAmount;

// Bad
const total1=100;const taxRate1=0.2;const taxAmount1=total1*taxRate1;const finalPrice1=total1+taxAmount1;

// Utiliser des commentaires
// Calcul du montant de la taxe
const taxAmount2 = totalPrice * taxRate;
// Calcul du prix final
const finalPrice2 = totalPrice + taxAmount2; 
