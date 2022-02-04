export class Gato{
    public nombre:string;
    public raza:string;
    public edad:number;
    //public color:string
    constructor(nombre:string,raza:string,edad?:number){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad || -1;
        //this.color = color;
    }
}