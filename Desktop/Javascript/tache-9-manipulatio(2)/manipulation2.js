// 1. Demander a l'utilisateur de remplir deux tableaux (tab1 et tab2) dont la taille est 5

let tab1 = [];
let tab2 = [];

for (let i = 0; i < 5; i++) {
    tab1.push(prompt("Veilliez remplir le tableau 1 :"));
}

console.log(tab1);

for (let i = 0; i < 5; i++) {
    tab2.push(prompt("Veilliez remplir le tableau 2 :"));
}

// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2

let tab3 = tab1.filter(element => (element != tab2));

// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2

let tab4 = tab1.filter(element => (element = tab2));

console.log(tab4);

 