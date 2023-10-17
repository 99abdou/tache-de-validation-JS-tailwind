let nombre = parseInt(prompt("Entrez un nombre entre 0 et 5 :"));

if (isNaN(nombre) || nombre < 0 || nombre > 5) {
  alert("Le nombre entré n'est pas valide !");
} else {
  let nombresEnLettres = ["zéro", "un", "deux", "trois", "quatre", "cinq"];
  alert("Le nombre en toutes lettres est : " + nombresEnLettres[nombre]);
}
