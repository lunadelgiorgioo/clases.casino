import JuegoCasino from "./JuegoDeCasino";
enum Cartas{
    picas=1, corazon, trebol, rombo
}
export default class Poker extends JuegoCasino{
    private carta: Cartas;
    private crupier: boolean;
    private premio: number;
    constructor(nombreJuego: string, apuestaMin: boolean, descripcion: string, cartas: boolean, carta:Cartas, fichas: number, premio: number){
        super(nombreJuego, apuestaMin, descripcion, cartas);
        this.cartas = true;
        this.carta= carta;
        this.crupier = true;
        this.premio= 1;
        this.apuestaMin = false;
    }
    verInfo(): Poker{
        return this;
    }
    jugarPoker(carta: Cartas, apuestaMin: boolean){
        apuestaMin = true;
        if(carta === 1 || carta === 3){
            this.premio = this.premio + 1;
            console.log('has ganado esta cantidad :', this.premio,' de fichas');
        }
            
        else {
            console.log('ha perdido la mano, desea volver a apostar?');
        }
    }
}