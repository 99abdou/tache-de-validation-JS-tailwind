// Écrivez une fonction qui prend en entrée un rayon 
// et calcule la surface d'un cercle. Appelez ensuite 
// cette fonction avec différentes valeurs de rayon

function calculerSurfaceCercle(rayon) {
    let surface = Math.PI * Math.pow (rayon, 2);
    return surface;
}

// J'appel la fonction avec les différentes valeur

let rayon1 = 2;
let rayon2 = 4;
let rayon3 = 6;

let surface1 = calculerSurfaceCercle(rayon1);
console.log("La surface du cercle ayant pour rayon " + rayon1+ " est de : "+surface1 );
let surface2 = calculerSurfaceCercle(rayon2);
console.log("La surface du cercle ayant pour rayon " + rayon2+ " est de : "+surface2 );
let surface3 = calculerSurfaceCercle(rayon3);
console.log("La surface du cercle ayant pour rayon " + rayon3+ " est de : "+surface3 );


