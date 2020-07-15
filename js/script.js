// //Crea una funzione che stampa la stringa che inserisco come
// //argomento.
// var frase = "Buongiorno!";
// saluta(frase);
//
// //*** Funzioni ***//
// function saluta(saluto){
//     alert(saluto);
// }
//
//
// //Dati due numeri, creare una funzione che restituisce la somma
// console.log(sommaNumeri(7,8,3));
//
// function sommaNumeri(num1, num2, num3){
//     var risultato= num1 + num2 + num3;
//     return risultato;
// }
//
//
// //Funzione che calcola l'area del rettangolo
// console.log(areaRettangolo(10,2));
// function areaRettangolo(base, altezza){
//     // var area = base*altezza;
//     // return area;
//     return base*altezza;
// }
//
// //Prende tre numeri e non fa una linea
//
// console.log(media(1,3,8));
//
// function media (num1, num2, num3){
//     var media = sommaNumeri(num1, num2, num3)/3;
//     return media
// }

//Funzione che genera numeri casuali

//  function numeroRandom(min, max){
//      return Math.floor((Math.random()*(max - min + 1) + min));
// }
//
//     // Genera 10 numeri random tra 1 a 10
//
//     for (var i=0; i<10; i++){
//         var numero = numeroRandom(1,10);
//         document.getElementById('numeri').innerHTML += " " + numero;
//     }


// // Verificare se il numero passato dall'utente è pari o dispari
// var numero;
// // console.log(pariDispari(2));
//
// if (pariDispari(numero)){
//     console.log('Il numero è pari');
// } else {
//     console.log('Il numero è dispari');
// }
//
// function pariDispari (num){
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
//

//Funzione che manipola una stringa estraendo solo le lettere di posto
//pari inserendole in un'altra stringa.

console.log(estraiPari("CiaoAmiciMiei"));

function estraiPari(parola){
    var parolaPari = " ";
    console.log(parola);
    for(var i=0; i < parola.length; i++) {
        if (i%2==0){
            parolaPari += parola[i];
        }
    }
    return parolaPari;
}
