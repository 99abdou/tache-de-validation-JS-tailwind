
function afficherImage() {
    let inputImage = document.getElementById("adresseImage").value;
    let imageContainer = document.getElementById("imageContainer");

    let imageObject = document.createElement("img");

    // Définir l'attribut src de l'image avec l'adresse saisie
    imageObject.src = inputImage;

    // ajouter l'image dans le conteneur
    imageContainer.innerHTML = "";
    imageContainer.appendChild(imageObject)

}

document.getElementById("afficherImage").addEventListener("click", afficherImage);