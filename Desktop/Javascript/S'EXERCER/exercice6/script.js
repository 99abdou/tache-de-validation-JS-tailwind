// Ecrire un programme qui demande à 
// un utilisateur d'écrire son age 
// et lui retourner sa catégorie d'age 

let age = prompt('Saisir votre age')

if (age < 14) {
    alert('Vous etes Enfants');
} else if (age <= 25 ) {
    alert('Vous etes Adolescents');
} else if (age <= 64) {
    alert('Vous etes Adultes');
} else {
    alert('Vous etes Aînés');
}