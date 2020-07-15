// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola palindroma');

//check palindromicità della parola inserita evocando funzione palindromeCheck(stringa)
if (palindromeCheck(parola.toLowerCase())){
    alert('Parola palindroma!');
} else {
    alert('Parola non palindroma!');
}


//** FUNZIONI **//
function palindromeCheck (stringa){
    var stringaInversa = "";
    var check = true;
    // creo la seconda stringa composta dai caratteri invertiti dell'argomento della funzione
    for (var i = stringa.length-1; i >= 0; i--){
        stringaInversa += stringa[i];
    }
    // check frase palindroma
    for (var i = 0; i < stringa.length; i++){
        if (stringaInversa[i] != stringa[i]){
            check=false;
        }
    }
    // restituisce valore booleano (true se palindroma)
    return check;
}
