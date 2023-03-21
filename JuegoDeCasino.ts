export default class JuegoCasino{
    protected nombreJuego: string;
    protected apuestaMin: boolean;
    protected descripcion: string;
    protected cartas: boolean;
    constructor(nombreJuego:string, apuestaMin:boolean, descripcion: string, cartas: boolean){
        this.nombreJuego = nombreJuego;
        this.descripcion = descripcion;
        this.apuestaMin = apuestaMin;
        this.cartas = cartas;
    }
}