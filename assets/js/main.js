//PRIMO ESERCIZIO
// INDICE EMAIL REGISTRATE
var emailregistrate = ["claudio@claudio" , "raffa@raffa" , "alessandro@alessandro" , "fabrizio@fabrizio"]
console.log(emailregistrate);

// CHIEDO EMAIL UTENTE
var emailutente = prompt("inserire e-mail");
console.log("E-mail utente: " + emailutente);

// VAR DEL MAIL CHECKER
var checkmail = false;

// CHECK EMAIL REGISTRATE
for (var i = 0; i < emailregistrate.length; i++) {
  if (emailregistrate[i] == emailutente) {
    checkmail = true;
  }
}

// RISULTATO CHECK EMAIL REGISTRATE
if (checkmail){
  var checkmail = " , la tua mail è registrata"
  console.log("Ciao,la tua mail è registrata");
  //STAMPO IN HTML IL MESSAGGIO DI AVVISO
  document.getElementById('benvenuto').innerHTML = "Benvenuto, " + emailutente + checkmail;
} else{
  var nuovamail = prompt("Non sei registrato,inserisci una nuova mail.")
  //CREAZIONE NUOVA MAIL
  emailregistrate.push(nuovamail);
  console.log(emailregistrate);
  // STAMPO IN HTML LA NUOVA MAIL
  document.getElementById('benvenuto').innerHTML = "Benvenuto, " + emailutente + ", sei registrato nel nostro sistema.";
}

//SECONDO ESERCIZIO
//GENERO NUMERO ALL'UTENTE
var utente = Math.floor(Math.random() *6 + 1);
console.log(utente);

document.getElementById("utente").innerHTML ="Numero utente : " + utente;

//GENERO NUMERO AL COMPUTER
var pc = Math.floor(Math.random() *6 + 1);
console.log(pc);

document.getElementById("computer").innerHTML ="Numero computer : " + pc;

//CALCOLO DEL RISULTATO
if (utente < pc) {
  var utente = "Hai perso."
  console.log("hai perso");
}else if (utente == pc){
  var utente = "Pareggio."
  console.log("Pareggio");
}else {
  var utente = "Hai vinto."
  console.log("hai vinto");
}

//STAMPO RISULTATO IN HTML
document.getElementById("risultato").innerHTML ="Risultato del tiro dei dadi: " + utente;
