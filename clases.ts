class Vehiculo{ // no tenemos que poner let ni const cuando sean atributos
    // otra manera de poner el constructor
  /*  private nombre:string;
    modelo:string;
    color:string;
    constructor(nombre:string,modelo:string, color:string){
        this.nombre=nombre;
        this.modelo=modelo;
        this.color=color;

    }*/
    // también  puedes poner el constructor 
    
    /*constructor( private nombre:string, private modelo:string,private color:string ){
    }*/
    // readonly solo puedes usar su atributo en su inicias no puedes volver asignarle valores
    constructor( private  readonly nombre:string, 
        private readonly modelo:string,
        private readonly color:string ){
    }
    // metodos
    drive(){
        console.log(`conduciendo un ${this.nombre} modelo:${this.modelo} color:${this.color}`)
    }
}
const vehiculo= new Vehiculo('mazda','3','rojo') ;
//console.log(vehiculo.nombre) // console.log(vehiculo)  ahora es private
vehiculo.drive()

let motocicleta ={ // si le pones el atributo igual de la clase se agregama automaticamente 
    nombre:'Honda',
    drive:vehiculo.drive
}
console.log(motocicleta.drive())