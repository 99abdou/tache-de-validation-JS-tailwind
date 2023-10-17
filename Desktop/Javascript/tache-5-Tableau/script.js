
var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];

// retirer le derniere valeur du tableau
console.log(mois.pop())

//Afficher les valeurs du tableau en utilisant la méthode document.write
for(var i in mois)
{
    document.write(mois[i]+'</br>');
}

// Afficher les valeurs du tableau en utilisant la méthode document.write
document.write("la taille du tableau est : " + mois.length);

// Ajouter la valeur ‘août’ à la fin du tableau
mois.push('août');
console.log(mois);

