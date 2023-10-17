// Créez un programme qui génère un nombre aléatoire entre 1 et 100 
// et demandez à l'utilisateur de le deviner. Donnez des indications 
// telles que "trop haut" ou "trop bas" jusqu'à ce qu'il trouve le bon nombre.

// Génération d'un nombre aléatoire entre 1 et 100
let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

let nombreDeTentatives = 0; // Compteur de tentatives
let nombreUtilisateur;

// Fonction pour demander à l'utilisateur de deviner le nombre
function devinerLeNombre() {
    nombreUtilisateur = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));
    nombreDeTentatives++;

    if (nombreUtilisateur === nombreAleatoire) {
        alert("Bravo ! Vous avez trouvé le nombre en " + nombreDeTentatives + " tentatives.");
    } else if (nombreUtilisateur < nombreAleatoire) {
        alert("Trop bas. Essayez à nouveau.");
        devinerLeNombre(); // Appel récursif pour continuer à demander à l'utilisateur
    } else {
        alert("Trop haut. Essayez à nouveau.");
        devinerLeNombre(); // Appel récursif pour continuer à demander à l'utilisateur
    }
}

devinerLeNombre(); // Commencez le jeu en appelant la fonction
