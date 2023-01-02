var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function somma(a, b) {
    return a + b;
}
console.log(somma(3, 5));
let prova1 = 5 + 5;
let prova2;
let prova3 = true;
function somme(num1, num2) {
}
//  questo serve ad assegnare una tipologia di valore ad una variabile
let persona;
persona = {
    nome: 'luca',
    cognome: 'rossi',
    eta: 45,
    indirizzo: { via: '', civico: 44, citta: '' }
};
console.log(persona);
function getData(data) {
    const id = console.log(data.id);
}
getData({ id: 1, usurname: '', password: '' });
const arrgh = [1, 2, true, ''];
const arry = [1, 2, 3];
const game = {
    id: '',
    codiceAccesso: '',
    player: ['bobby', 'luca']
};
// da qui in poi le categorie utilizzate sono esclusive di typescript
// tupla serve a dare una dimensone prestabilita percio nell'esempio sotto sara possibile aggiungere solo due numeri perche nella prima parentesi quadra vengono specificati solo due elementi di categoria number
const tupla = [1, 2];
// any serve a dare la possibilita di mettere qualsiasi elemento 
let prova4;
let po = ['jbj', true];
// in questo caso con any[] potro mettere una stringa con tutti i tipi di valori che mi servono
let dell = ['', 34];
const x = 43;
let persone;
persone = {
    nome: 'jack',
    cognome: 'sparrow',
    eta: 24
};
function trovaPersone(persone) { }
// enum serve per dare una numerazione e crearsi un sistema piu veloce per inserire i dati
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "simone";
    Ruolo[Ruolo["USEr"] = 100] = "USEr";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
const simo = {
    nome: 'simone',
    cognome: 'canestri',
    ruolo: Ruolo.ADMIN
};
const sim = {
    nome: 'simone',
    cognome: 'canestri',
    ruolo: 100
};
// funzioni
function addict(num1, num2 = 1) {
    return num1 + num2;
}
function niente(stringa) {
    console.log(stringa);
}
let prova;
prova = addict;
console.log(prova(3, 1));
// classi
class Gruppo {
    nome;
    cognome;
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    presenta() {
        console.log(`ciao sono ${this.nome} ${this.cognome}`);
    }
    saluta(Gruppo) {
        console.log(`ciao ${Gruppo.nome} ${Gruppo.cognome}, molto piacere`);
    }
}
let gruppi1 = new Gruppo('luca', 'rosso');
let gruppi2 = new Gruppo('frank', 'sparrow');
let gruppi3 = new Gruppo('marco', 'pari');
gruppi1.presenta();
gruppi2.saluta(gruppi1);
gruppi3.presenta();
class Studente extends Gruppo {
    materiaPreferita;
    constructor(nome, cognome, materiaPreferita) {
        super(nome, cognome);
        this.materiaPreferita = materiaPreferita;
    }
    cambia() {
        this.nome = 'carlo';
    }
}
const studente = new Studente('giacomo', 'fabbri', 'storia');
studente.presenta();
// singleton cioe classe che non puo essere aumenteata con new 'oggetto' 
class Preside {
    nome;
    cognome;
    static instance;
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static getInstance() {
        if (Preside.instance) {
            return this.instance;
        }
        this.instance = new Preside('marco', 'franchi');
        return this.instance;
    }
    presentati() {
        console.log(`buongiorno, sono il perside ${this.nome} ${this.cognome}`);
    }
}
Preside.getInstance().presentati();
class k {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    scrivi() {
        throw new Error("method not implement");
    }
    salute() {
        console.log('ciao');
    }
}
class Dispositivo {
    nome;
    anno;
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    accendi() {
        console.log('il telefono si accende');
    }
    spegni() {
        console.log('il telefono si spegne');
    }
}
class Smartphone extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log('lo smartphone si accende');
    }
    spegni() {
        console.log('lo smartphone si spegne');
    }
    connettiInternet() {
        console.log('lo smartphone si connette');
    }
}
class Computer extends Dispositivo {
    ip;
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log('il computer si accende');
    }
    spegni() {
        console.log('il computer si spegne');
    }
    connettiInternet() {
        console.log('lo smartphone si connette');
    }
}
class jack {
    via;
    numeroTelefono;
    nome;
    date;
    constructor(via, numeroTelefono, nome, date) {
        this.nome = nome;
        this.date = date;
        this.numeroTelefono = numeroTelefono;
        this.via = via;
    }
}
// generic
const arr = ['xbsucbu', 'swgduw'];
function creaArray(item) {
    return new Array().concat(item);
}
const arr1 = creaArray([1, 2, 3, 4]);
const arr2 = creaArray(['u', 'r', 'd']);
// decorator
function logger(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
let Prova = class Prova {
    constructor() {
        console.log('sto creando un oggetto di prova');
    }
};
Prova = __decorate([
    logger('ciao')
], Prova);
let Prova2 = class Prova2 {
    constructor() {
        console.log('sto creando un oggetto ');
    }
};
Prova2 = __decorate([
    logger('ciao jack')
], Prova2);
// const provax = new Prova()
function creaElemento(elemento, id, nome) {
    return function (constructor) {
        const contenuto = document.getElementById('contenuto');
        const prova = new constructor(nome);
        if (contenuto) {
            contenuto.innerHTML = elemento;
            contenuto.querySelector('h1').textContent = prova.nome;
        }
    };
}
let Prova5 = class Prova5 {
    nome;
    constructor(nome) {
        this.nome = nome;
        console.log('sto creando');
    }
};
Prova5 = __decorate([
    creaElemento('<h1></h1>', 'contenuto', 'ste')
], Prova5);
import { addizzione, sottrazione, moltiplicazione } from './function.js';
console.log(addizzione(5, 5));
console.log(sottrazione(5, 5));
console.log(moltiplicazione(5, 5));
