// EXERCICE F0
// demander deux nombres à l'utilisateur (dans deux champs distincts)
// au clic sur un bouton, afficher le résultat de la multplication
// exemple avec 4 et 5: "4 multiplié par 5 vaut 20"

function somme() {
    let number1 = document.getElementById("FormControlInput1").value; number1 = parseInt(number1)

    let number2 = document.getElementById("FormControlInput2").value; number2 = parseInt(number2)


    if(isNaN(number1) || isNaN(number2)) 
    {
    alert("Veuillez saisir les deux valeurs");
    }else{
    let total = number1*number2;

   document.getElementById("result").innerText = total;
    }

}