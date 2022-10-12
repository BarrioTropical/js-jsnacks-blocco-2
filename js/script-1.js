'use strict';

/* **Snack1**
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

**Snack2**
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

**Snack3**
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

**Snack4 (Bonus)**
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/
//___________________________________________________________________//


//SNACK 1: Inserisci un numero, 
//variabili
const btn = document.querySelector('button');
const result = document.getElementById('risultato');

// funzione button
function check(){
    let numeroUtente = parseInt(document.getElementById('numeroSnack1').value);
    // se è pari stampa il numero
    if(numeroUtente % 2 == 0){
        result.innerHTML = numeroUtente

    // se è dispari stampa il numero successivo
    }else{
        result.innerHTML = numeroUtente + 1 ;
    }
}
btn.addEventListener('click', check);

