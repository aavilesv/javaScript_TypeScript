abstract class  Vehiculo2{ 
    // readonly solo puedes usar su atributo en su inicias no puedes volver asignarle valores
    constructor( protected  readonly nombre:string, 
        protected readonly modelo:string,
        protected readonly color:string,
        protected price:number ){
    }
    // metodo get 
    get getprice(){
        return this.price
    }
    //metodo set 
    set setprice(value:number){
        this.price =value
    }
    // metodos estaticos podemos acceder a este metodo si poder la clase new vehiculo
    static Pricetoconvertir(valur:number, typeofconvertir:string){
        let result=""
        switch(typeofconvertir){
            case 'USD':
                result ='Us'+valur
                break
            case 'PERSO':
                result ='$'+valur
                break
        }
        return result;
    }
    // metodos
    abstract drive():void;
}
interface facturaa {
    //total:number,
    Currenbill():string // tienes que implementar todos las caractrerista que tenga

}
interface ubicacion {
    //total:number,
    direccion():string // tienes que implementar todos las caractrerista que tenga
    
}


//  herencia clase hija // se puede implementar varias funciones
class Carro1 extends Vehiculo2 implements facturaa,ubicacion{
    direccion(): string {
        return `tpyescript`   
    }
    drive(){
        console.log(`hola que tal ${this.nombre} modelo:${this.modelo} color:${this.color}`)
    }
    Currenbill(): string {
     return `tpyescript`   
    }

}

class avion extends Vehiculo2{
    drive(){
        console.log(`hola que tal ${this.nombre} modelo:${this.modelo} color:${this.color}`)
    }
}


const carro1 = new Carro('mazda','3','rojo',5)
console.log(carro1.getprice)
carro.setprice=6;
console.log(carro1.getprice)
carro.drive()

// puede hacer acceder sin necesidad e instancionar las clases
console.log(Carro1.Pricetoconvertir(20,'USD'))