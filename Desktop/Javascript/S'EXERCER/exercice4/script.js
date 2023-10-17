// Calculez l'aire d'un rectangle en demandant à l'utilisateur 
// de saisir la longueur et la largeur, puis affichez le résultat.

let longeur;
let largeur;
let surface;

longeur = parseFloat(prompt("Saissisez la longeur"));
largeur= parseFloat(prompt ("saississez la largeur"));
surface=(longeur * largeur) ;
alert(`La surface de ce rectangle est de ${surface} mètre carré.`);
