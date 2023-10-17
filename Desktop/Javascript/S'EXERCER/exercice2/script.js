// Écrivez un programme qui demande à l'utilisateur 
// deux nombres et affiche leur somme, leur différence, 
// leur produit et leur quotient dans la console

// Demander à l'utilisateur deux nombres

let nombre1 = prompt("Entrez le premier nombre");
let nombre2 = prompt("Entrez le second nombre");

if (!nombre1 || !nombre2){
    console.log("Veuillez entrer des nombres valides.");
} else {
// Calculer la somme, la différence, le produit et le quotient

    let somme = nombre1 + nombre2;
    let difference = nombre1 - nombre2;
    let produit = nombre1 * nombre2;
    let quotient = nombre1 / nombre2;
    
// Afficher les résultats dans la console

    console.log("Somme : " + somme);
    console.log("Différence : " + difference);
    console.log("Produit : " + produit);
    console.log("Quotient : " + quotient);
}