function somma(a: number,b: number){
    return a+b
}
console.log(somma(3, 5))

let prova1 = 5+5
let prova2: string 
let prova3: boolean = true

function somme(num1: number, num2: number){

}
//  questo serve ad assegnare una tipologia di valore ad una variabile
let persona: {
    nome: string;
    cognome: String;
    eta: number
    indirizzo: {
        via: string;
        civico: number;
        citta: string
    }
} 

persona = {
    nome: 'luca',
    cognome: 'rossi',
    eta: 45,
    indirizzo: {via: '',civico: 44, citta: ''}
}
console.log(persona);

function getData(data: {id: number; usurname: string; password:string}){
    const id =
    console.log(data.id)
   
}

getData({id:1, usurname: '', password: ''})

const arrgh = [1,2,true,'']
const arry: number[] = [1,2,3]

const game = {
    id: '',
    codiceAccesso: '',
    player: ['bobby', 'luca']
}
// da qui in poi le categorie utilizzate sono esclusive di typescript


// tupla serve a dare una dimensone prestabilita percio nell'esempio sotto sara possibile aggiungere solo due numeri perche nella prima parentesi quadra vengono specificati solo due elementi di categoria number

const tupla: [number,number] = [1,2]

// any serve a dare la possibilita di mettere qualsiasi elemento 

let prova4: any
let po:[any,boolean] = ['jbj', true]

// in questo caso con any[] potro mettere una stringa con tutti i tipi di valori che mi servono
let dell: string | number | any[] = ['',34]

// custom type serve per creare tipologie di dati a nostro piacimento

type Persone = {
    nome: string;
    cognome: String;
    eta: number
   
} 

type prova = string | number

const x: prova = 43

let persone: Persone

 persone = {
    nome: 'jack',
    cognome: 'sparrow',
    eta: 24
 
} 

function trovaPersone(persone: Persone){}

// enum serve per dare una numerazione e crearsi un sistema piu veloce per inserire i dati
enum Ruolo {
    ADMIN = 'simone',
    USEr = 100,
    GUEST = 'guest'
}

const simo = {
    nome: 'simone',
    cognome: 'canestri',
    ruolo: Ruolo.ADMIN
}

const sim = {
    nome: 'simone',
    cognome: 'canestri',
    ruolo: 100
}


// funzioni

function addict (num1: number, num2 = 1): number{
  return num1 + num2
}
function niente(stringa: string): void{
    console.log(stringa)
}

let prova: (x: number, y: number) => number
prova = addict

console.log(prova(3,1))

// classi

class Gruppo {

    constructor( protected nome: string,private cognome: string){
    }

    presenta(): void{
  console.log(`ciao sono ${this.nome} ${this.cognome}`)
    }
    saluta(Gruppo: Gruppo): void{

        console.log(`ciao ${Gruppo.nome} ${Gruppo.cognome}, molto piacere`)
    }

}
let gruppi1 : Gruppo = new Gruppo('luca', 'rosso')
let gruppi2 : Gruppo = new Gruppo('frank','sparrow')
let gruppi3 : Gruppo = new Gruppo('marco','pari')


gruppi1.presenta()
gruppi2.saluta(gruppi1)
gruppi3.presenta()

class Studente extends Gruppo{
constructor( 
     nome: string,
    cognome: string,
    private materiaPreferita: string
    )  {
super(nome,cognome);
}
cambia(){
    this.nome = 'carlo'
}

}

const studente: Studente = new Studente('giacomo', 'fabbri', 'storia')

studente.presenta()

// singleton cioe classe che non puo essere aumenteata con new 'oggetto' 


class Preside {
    private static instance: Preside;

    private constructor(private nome: string, private cognome: string){

    }
    static getInstance(){
        if(Preside.instance){
            return this.instance
        }

        this.instance = new Preside('marco', 'franchi')
        return this.instance
    }

    presentati(){
        console.log(`buongiorno, sono il perside ${this.nome} ${this.cognome}`)
    }
}

Preside.getInstance().presentati()


// 

interface Prova{
nome: string
salute(): void
}
interface qwerty{
    scrivi(): void
}

class k implements Prova,qwerty{
nome: string

constructor(nome:string){
    this.nome = nome
}
scrivi(): void {
    throw new Error("method not implement")

}
salute(): void {
   console.log('ciao')
}
}

// classe astratta e interfacce
interface Internet{
ip: string
connettiInternet(): void
}

abstract class Dispositivo{

    constructor(protected nome:string, protected anno: number){

    }

    abstract accendi(): void
    abstract spegni(): void
}

class Telefono extends Dispositivo{
    accendi(): void {
       console.log('il telefono si accende')
    }
    spegni(): void {
       console.log('il telefono si spegne')
    }


}
class Smartphone extends Dispositivo implements Internet{
    ip: string

    constructor(nome: string,anno:number,ip:string){
        super(nome,anno)
        this.ip = ip
    }

    accendi(): void {
        console.log('lo smartphone si accende')
     }
     spegni(): void {
        console.log('lo smartphone si spegne')
     }
     connettiInternet(){
        console.log('lo smartphone si connette')
     }
    
}
class Computer extends Dispositivo implements Internet{
    ip: string

    
    constructor(nome: string,anno:number,ip:string){
        super(nome,anno)
        this.ip = ip
    }

    accendi(): void {
        console.log('il computer si accende')
     }
     spegni(): void {
        console.log('il computer si spegne')
     }
     connettiInternet(){
        console.log('lo smartphone si connette')
     }
}
// estensione delle interfacce con altre interfacce multiple,si possono estendere con piu cose solo le interfacce

interface x{
    nome:string
}

interface y extends x {
    numeroTelefono: number
}
interface z{
    date: number
}

interface G extends y, z{
 via: string
}

class jack implements G{
    via: string
    numeroTelefono: number
    nome: string
    date: number


    constructor(via: string, numeroTelefono: number, nome: string, date: number ){
        this.nome= nome
        this.date= date
        this.numeroTelefono = numeroTelefono
        this.via = via
    }
}


// generic

const arr: Array<string> = ['xbsucbu', 'swgduw']

function creaArray<T>(item: T[]): T[]{
 return new Array().concat(item)
}

const arr1 = creaArray<number>([1,2,3,4])
const arr2 = creaArray<string>(['u','r','d'])



// decorator
function logger(messaggio: any){
    return function(constructor:any){
    console.log(messaggio)
    console.log(constructor)
}

}
@logger('ciao')
class Prova{
 constructor(){
   console.log('sto creando un oggetto di prova') 
 }  

}
@logger('ciao jack')
class Prova2{
 constructor(){
   console.log('sto creando un oggetto ') 
 }  

}

// const provax = new Prova()
function creaElemento(elemento:string,id: string, nome: string){
    return function(constructor:any){
     const contenuto = document.getElementById('contenuto') 
     const prova = new constructor(nome) 
     if(contenuto){
        contenuto.innerHTML = elemento
        contenuto.querySelector('h1')!.textContent = prova.nome

     }
    
    }
}
@creaElemento('<h1></h1>', 'contenuto', 'ste')
class Prova5{

    constructor(public nome:string){
      console.log('sto creando') 
    }  
}

import {addizzione, sottrazione, moltiplicazione} from './function.js'

console.log(addizzione(5,5))
console.log(sottrazione(5,5))
console.log(moltiplicazione(5,5))