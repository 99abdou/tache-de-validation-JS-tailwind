// Le script de la première question :
let a ;
do {
    a=prompt("Saisissez un nombre entier");
} while (isNaN(a))

document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
document.write("<table border>");

for (let i = 1; i <=10; i++) {
    document.write("<tr>")
    document.write("<td>"+a+" x "+i+" =</td>")
    document.write("<td>" +a*i+"</td>");
    document.write("</tr>");
}

document.write('</table');




