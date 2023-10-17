function Produits(image, nom, prix) {
    this.image = image,
    this.nom = nom,
    this.prix = prix
}

const produit1 = new Produits("img/birkett.jpg", 'NN', 25000);
const produit2 = new Produits('img/cask.jpg', 'NN', 25000);
const produit3 = new Produits('img/hora.jpg', 'NN', 25000);
const produit4 = new Produits('img/marcin.jpg', 'NN', 25000);
const produit5 = new Produits('img/sebastian.jpg', 'NN', 25000);
const produit6 = new Produits('img/sport.jpg', 'NN', 25000);

// console.log(produit1, produit2, produit3, produit4, produit5, produit6);

let produits = [];
produits.push(produit1, produit2, produit3, produit4, produit5, produit6);

function tableList() {
    let listOfProduits = '';

    produits.forEach(prod =>
        listOfProduits += `
        
          <tr class="text-center">
            <td><img src="img/birkett.jpg" class="img-fluid img-thumbnail w-25"></td>
          </tr>
          `   
        )
     
    document.getElementById('produitList').innerHTML = listOfProduits;

}

// document.getElementById("creerChamp").addEventListener("click", tableList);

// console.log(produits);

