//programma che stampi numeri da 1 a 100 
// per i multipli di 3 stampi fizz al posto del nmr 
// per i multipli di 5 stampi buzz
// per i numeri che siano multipli di 3 e 5 stampi fizzbuzz
var output = document.getElementById('risultato');

for (var i = 1; i <= 100; i++) {
    
    if(i % 3 == 0 && i % 5 == 0){
    output.innerHTML += " <br/> FizzBuzz";
    } 
    else if(i % 5 == 0){
        output.innerHTML += "<br/> Buzz ";
    } else if(i % 3 == 0) {
        output.innerHTML += " <br/> Fizz ";
    }else{
        output.innerHTML += "<br/>" + i ;
    }
}

//ricorda che l'ordine delle condizioni è importante