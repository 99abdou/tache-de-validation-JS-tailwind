function JoursVecus() {
    let monAge = prompt("Quel est votre âge actuel ?");
    let ageVise = prompt("Quel est l'âge que vous visez ?");
    
    let joursVecus = monAge * 365; // On suppose que chaque année compte 365 jours
    let joursVise = ageVise * 365;
    let ecart = joursVise - joursVecus;
  
    document.write("Vous avez vécu" + joursVecus + " jours !" );
    document.write("Il y a encore " + ecart + " jours .");
}
  
  JoursVecus();