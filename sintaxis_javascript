import "./styles.css";
var edad = 0;
let as = [10, 12, 10];
as = [10, 12, 10, 123];
console.log([10, 12, 10]);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function sumar() {
  console.log("hola");
}
sumar();
const sumardato = (suma) => {
  console.log(suma);
};
sumardato(12);

const multiplicar = (n1, n2) => {
  console.log(n1 * n2);
};
multiplicar(12, 12);
const dividir = (n1, n2) => {
  return n1 * n2;
};
// esto es lo mismo que lo de arriba
// el segundo (n1,n2) es el que retorna
const restar = (n1, n2) => n1 - n2;

const resultado = multiplicar(19, 3);
console.log(resultado);

console.log(restar(3, 2));

const mensaje = (n) => {
  return n;
};
console.log(mensaje("hola"));

// alt + 96 se sale ``
// esto te sale para que puedas hacer
//una concatenacion
const raiz = (num, exp) => {
  return `Raíz  cuadrada es:${num ^ exp}`;
};
console.log(raiz(10, 3));

const cuadrado = (num = 2, lado2 = 2) =>
  `El resultado del cuadrado es:${num * lado2}`;
console.log(cuadrado(2, 3));

const diccionario = { nombre: "angelo", edad: 0 };

console.log(diccionario.nombre);
const animales = {
  mamiferos: ["Leon", "Perro", "Gato"],
  aves: ["Loro", "Pato", "Pinguino"],
  direccion: { nombre: "pedro" }
};
console.log(animales.direccion.nombre);
// esto se llama destrucctury 
const {mamiferos,aves}=animales;
console.log(mamiferos);


const usuario=(user)=> ({id:12,username:'Tony'})
const heroes =[{id:1, name:'Batman'},{id:2,name:'Superman'}]
const existe =heroes.some((heroe)=>heroe.id===2); 
//esto me retorna un valor true o false
const existe =heroes.find((heroe)=>heroe.id===2); 
const found = array1.find(element => element > 10);
console.log(existe);


// array 
const returnarray=([letras,nombers])=>([letras,nombers]);

const [letras,nombers]=returnarray(['letras',12]);
console.log('as');
console.log(letras,nombers);

const person={
  id:2,
  nombre:'neiser herrera',
  apellido:'Aviles valenzuela'
}
const personaarray=[
  2,
  'neiser herrera',
  'Aviles valenzuela'
]
/// de esta forma ingresas un nuevo dato al diccionario 
const {nombre,apellido,edad=3}=person;
console.log(person);

// para esto debe tener el mismo nombre el parametro con el dato del diccionario
const persona =({nombre,apellido})=>({id:1, nombre,apellido})


/*
const persona =(person)=>{
  return {
      id:1,
      nombre:person.nombre,
      apellido:person.apellido,
      
  }
}
*/
console.log(persona(person));
