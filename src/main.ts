// 🏆 Snack 1

// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

//     Se è una stringa: stampala in maiuscolo

//     Se è un numero: moltiplicalo per due e stampalo

//     Se è un booleano: stampa “Sì” o “No” in base al suo valore

//     In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS

//     Se è null: stampa “Il dato è vuoto”
//     Se è un array: stampa la sua lunghezza
//     Se è una Promise: attendi che si risolva e stampa il valore del resolve.


let dato: unknown;

if (dato === null) {
  console.log("Il dato è vuoto");

} else if (Array.isArray(dato)) {
  console.log(dato.length);

} else if (dato instanceof Promise) {
  dato.then((valore) => {
    console.log(valore);
  });

} else if (typeof dato === "string") {
  console.log(dato.toUpperCase());

} else if (typeof dato === "number") {
  console.log(dato * 2);

} else if (typeof dato === "boolean") {
  console.log(dato ? "Sì" : "No");

} else {
  console.log("Tipo non supportato");
}


// 🏆 Snack 2

// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

//     nome → stringa
//     cognome → stringa
//     annoNascita → numero
//     sesso → Può essere solo "m" o "f".
//     anniDiServizio → array di numeri, es. [2014, 2015, 2017, 2018]

// 🎯 BONUS

//     emailAziendale → Email assegnata al dipendente (non si può modificare)
//     contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

const dipendente: Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  annoNascita: 1990,
  sesso: "m",
  anniDiServizio: [2014, 2015, 2017, 2018],
  emailAziendale: "mario.rossi@azienda.it",
  contratto: "indeterminato",
};

console.log(dipendente);


// 🏆 Snack 3

// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

//     Developer
//         livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
//         linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
//         certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).

//     ProjectManager
//         teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
//         budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
//         stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};

const developer: Developer = {
  nome: "Giulia",
  cognome: "Bianchi",
  annoNascita: 1998,
  sesso: "f",
  anniDiServizio: [2024],
  emailAziendale: "giulia.bianchi@azienda.it",
  contratto: "determinato",
  livelloEsperienza: "Junior",
  certificazioni: [],
};

const projectManager: ProjectManager = {
  nome: "Laura",
  cognome: "Verdi",
  annoNascita: 1985,
  sesso: "f",
  anniDiServizio: [2015, 2016, 2017, 2018],
  emailAziendale: "laura.verdi@azienda.it",
  contratto: "indeterminato",
  teamSize: null,
  stakeholderPrincipali: [],
};

console.log(developer);
console.log(projectManager);
