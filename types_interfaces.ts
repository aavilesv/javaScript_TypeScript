// definimos el tipo de datos
let vechiculo1:string;
let totalcantidad:number;
let isAutomovil:boolean;

// anotacion como es un valor por defecto
let vechiculo="automovil";
let totalcantidad1=1;
let isAutomovil1= true;

let persona: {nombre:string, edad:number,direccion:{
    nombre:string, isdireccion:boolean}}={
    nombre:'Rodrigo', edad:23,direccion:{
        nombre:'hola', isdireccion:true
    }
    };

console.log(persona)

let persona2 ={
    nombre:'Rodrigo', edad:23,direccion:{
        nombre:'hola', isdireccion:true
    },curso :['flutter','Android Studio']
    };

    console.log(persona2)

// tuplas restringimos valores strin,etc
let automovil: [string,number,string]=['hola',12,'rojo'];


// definir un tipo de dato personalizado para nuestros proyectos
type vehiculotype=[string,number,string];
let automovil12: vehiculotype=['Hondad',12,'rojo'];
let moticileta:vehiculotype=['yahamha',12,'blanca'];


//enum Enum que es una ayuda para los estandarizar nuestros tipos de datos numéricos  por defecto es 0 pero le puedes poner enum roles {estudiante=1, profesor};
enum roles {estudiante=1, profesor};
//enum roles {estudiante, profesor};
let persona2enum ={
    nombre:'Rodrigo', edad:23,direccion:{
        nombre:'hola', isdireccion:true
    },curso :['flutter','Android Studio'],
    roles:roles.estudiante
    };
console.log(persona2enum)
//tipo de dato any

let  hobbiess:any =['futbtol','jugarplys','leer'];
console.log(hobbiess)

//union es para poder usar los tipos de datos que existen en typescript
type stringornumber=string | number;
function paddinggleft(value:string,paddging:stringornumber){
    if(typeof paddging=='number'){
        return Array(paddging +1).join(' ')+value;
    }
    if(typeof paddging=='string'){
        return paddging+ value;
    }
    throw new Error(`Espera unstring pero recibí'${paddging}'`);
}

console.log(paddinggleft('hola mundo',23))


// funciones en typescript void,number,array,string,object, never para que no retorne nada
const sumar3 =(valor1:number, valor2:number):number=>{
    
    return valor1 +valor2;
}

const imprimir=():number=>{
    return sumar3(23,23)
}
console.log(imprimir())
const throwerror =(messege:string):never=>{
    throw new Error(messege)
    
}

// fucniones devoluciones de llamada -callbacks
function imprimir2(
    a:number,
    b:number,
    mostrar:(value:number)=>void
):void{
  let resultado=a+b;
  mostrar(resultado);
}

imprimir2(2,4,x => {
    console.log(x);
});

// enum 

enum Rolemedico{
    Doctor, Anesticia, 
    Administrativo
}
// interfeces 
interface Statt{
    nombre:string,
    email:string,
    role:Rolemedico
}

const medico = {
    nombre:'Angelo', 
    email:'email.@gmail.com',
    role:Rolemedico.Doctor
};
//const printstatt=(staff:{nombre:string,email:string,role:Rolemedico})=> 

const printstatt=(staff:Statt)=>
{
    console.log(staff)
}

printstatt(medico)

// interface
const medico1 = {
    nombre:'Angelo', 
    email:'email.@gmail.com',
    role:Rolemedico.Doctor,
    total:25,
    currentBill(){
        return `Valor actual de la factura`
    }
};
interface factura {
    total:number,
    Currenbill():string // esto esta puesto como una función
}

const printfactura =(bill:factura)=>{
 console.log(bill.Currenbill())
}
