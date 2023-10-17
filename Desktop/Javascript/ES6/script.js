// const couleur = "Jaune";



// function foo() {
//     if (true) {
//         const abc = "abc";

        

//         var bce = "bce";
//     }

//     console.log(abc);
// }

// foo();

// FONCTIONS FLéCHé


// const me = {
//     name: 'Jeremy',
//     presentFriend : function (friend) {
//         return "tu connais " + friend + " ?";
//     }
// };

// alert(me.presentFriend("Kevin"));

var a = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky",
  ];
  
  // Sans la syntaxe des fonctions fléchées
  var a2 = a.map(function (s) {
    return s.length;
  });
  // [31, 30, 31, 31]
  
  // Avec, on a quelque chose de plus concis
  var a3 = a.map((s) => s.length);
  // [31, 30, 31, 31]
  