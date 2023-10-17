 // Fonction pour créer un champ de texte et changer la couleur de fond
 function changerCouleurFond() {
    let couleur = prompt("Entrez une couleur de votre choix :");

    if (couleur) {
        document.body.style.backgroundColor = couleur; // Changer la couleur de fond
    }
}

// Ajouter un événement au bouton
document.getElementById("creerChamp").addEventListener("click", changerCouleurFond);