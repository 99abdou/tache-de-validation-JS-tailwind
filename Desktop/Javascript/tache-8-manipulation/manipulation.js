// soit deux tableau (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur

const tab1 = [2,-4,6,-8,10,-12];

const tab2 = [3,-6,9,-12,15,-18];

// filtrer les éléments de tab1 et de copier dans tab3

const tab3 = tab1.filter((element) => element > 0)

console.log(tab3);

// Remplacer les éléments de tab2 par des zéros

const tab2Zero = tab2.map((element) => (element > 0 ? 0 : element));

console.log(tab2Zero);

// afficher le resultat dans le DOM

let resultat = document.getElementById('mYresultat');

const tab1Result = document.createElement('div');
tab1Result.textContent = 'tab1 :' + tab1.join(',');
document.body.appendChild(tab1Result);

const tab3Result = document.createElement('div');
tab3Result.textContent = 'tab3 (éléments de tab1) :' + tab3.join(',');
document.body.appendChild(tab3Result);

const tab2Result = document.createElement('div');
tab2Result.textContent = 'tab2 (les éléments positifs de tab2 sont remplacés par des zéros ) :' + tab3.join(',');
document.body.appendChild(tab2Result);