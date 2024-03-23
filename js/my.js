// MILESTONE 1
// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
// prima ciclate con un ciclo for
// poi commentate il ciclo for e usate il forEach



const studenti = [
    {
        nome: 'Michele',
       cognome: 'Fedeli',
        eta: '32',
    },
    {
        nome: 'Giovanni',
        cognome: 'Calli',
        eta: '15',
    },
    {
        nome: 'Rosario',
        cognome: 'Montalbano',
        eta: '20',
    },
    {
        nome: 'Rachele',
        cognome: 'Loreto',
        eta: '56',
    },
    {
        nome: 'Ortensio',
        cognome: 'Marbelli',
        eta: '11',
    },
    {
        nome: 'Claudia',
        cognome: 'Shiffer',
        eta: '7',
    },]



    // for (let i = 0 ; i < studenti.length ; i++) {
    //    const studente = studenti[i]
    //    console.log (studente.nome, studente.cognome ) 
    // }
    

    studenti.forEach(function (studente){
        console.log (studente.nome, studente.cognome ) })
 


// MILESTONE 2
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Aggiungere il nuovo studente all’array di studenti
// Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
// prima ciclate con un ciclo for
// poi commentate il ciclo for e usate il forEach


//   let nomeStud = prompt( 'inserisci nome')
//   let cognomeStud = prompt( 'inserisci nome')
//   let etaStud = prompt('inserisci la tua età')
    
 function aggiungiStudente(studente){
    
       studenti.push = ({
        nome : prompt( 'inserisci nome'),
        cognome : prompt( 'inserisci nome'),
        eta :  prompt('inserisci la tua età')}) 
        
    } 

  
aggiungiStudente(studenti)

console.log(studenti)