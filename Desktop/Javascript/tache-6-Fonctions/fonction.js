function somme() {
    var somme1 = document.getElementById("S1").value;
    var somme2 = document.getElementById("S2").value;

    var s = parseInt(somme1) * parseInt(somme2);

    document.getElementById("S3").value=s;
    // alert("somme =" *s);
}