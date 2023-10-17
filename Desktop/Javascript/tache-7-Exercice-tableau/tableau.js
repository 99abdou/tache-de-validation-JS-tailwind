// Créez un tableau de nombres et utilisez la méthode 
// .map() pour doubler chaque nombre du tableau.

// METHODE MAP()

let monTableau = [2, 4, 6, 8];
let mapped = monTableau.map(tab => tab * 2);

console.log(mapped);

// Créez un tableau de chaînes et utilisez la méthode .filter() 
// pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3.

const tableauDeChaines = ["chat", "chien", "oiseau", "poisson", "serpent", "lapin"];

const nouveauTableau = tableauDeChaines.filter(chaine => chaine.length > 3);

console.log(nouveauTableau);

// Utilisez la méthode .reduce() 
// pour résumer tous les nombres dans un tableau de nombres. 

const nombres = [1, 2, 3, 4, 5];

// la méthode .reduce() permet de réduire un tableau à une seule valeur 
// en utilisant une fonction d'agrégation (une opération qui combine deux valeurs).

const somme = nombres.reduce((accumulateur, nombre) => accumulateur + nombre, 0);

console.log(somme); // Résultat : 15

// Utilisez la méthode .sort() pour trier un tableau de 
// chaînes par ordre alphabétique.

const alphabé = ["j", "a", "d", "c", "f", "e", "h", "g", "i", "b"];

// la méthode .sort() permet de mettre notre tableau en ordre alphabétique ou numérique

alphabé.sort();

console.log(alphabé);
