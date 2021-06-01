//programma che stampi numeri da 1 a 100 
// per i multipli di 3 stampi fizz al posto del nmr 
// per i multipli di 5 stampi buzz
// per i numeri che siano multipli di 3 e 5 stampi fizzbuzz
var output = document.getElementById('risultato');
for (var i = 1; i <= 100; i++) {
    output.innerHTML += i;
    if(i % 3 == 0){
    output.innerHTML += " Fizz <br>";
    } 
    else if(i % 5 == 0){
        output.innerHTML += " Buzz <br>";
    } 
}

