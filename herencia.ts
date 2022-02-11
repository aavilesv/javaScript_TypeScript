class Vehiculo1{ 
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
    drive(){
        console.log(`conduciendo un ${this.nombre} modelo:${this.modelo} color:${this.color}`)
    }
}
const vehiculo1= new Vehiculo1('mazda','3','rojo',5) ;

//  herencia clase hija
class Carro extends Vehiculo1{
    drive(){
        console.log(`hola que tal ${this.nombre} modelo:${this.modelo} color:${this.color}`)
    }
}

const carro = new Carro('mazda','3','rojo',5)
console.log(carro.getprice)
carro.setprice=6;
console.log(carro.getprice)
carro.drive()

// puede hacer acceder sin necesidad e instancionar las clases
console.log(Carro.Pricetoconvertir(20,'USD'))