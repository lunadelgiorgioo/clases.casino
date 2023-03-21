import JuegoCasino from "./JuegoDeCasino";
export default class Tragamonedas extends JuegoCasino{
    private btnCorrer: boolean;
    private premio: boolean;
    constructor(btnCorrer: boolean, nombreJuego: string, apuestaMin: boolean, descripcion: string, cartas: boolean) {
        super(nombreJuego, apuestaMin, descripcion, cartas);
        this.btnCorrer = false;
        this.premio = false;
        this.apuestaMin = false;
    }
    jugarTragamonedas(btnCorrer: boolean, premio: boolean, apuestaMin: boolean) {
        btnCorrer = true;
        apuestaMin = true;
        if (btnCorrer === true && apuestaMin === true){
            premio = true;
            console.log('FELICITACIONES, HA GANADO EL TRIPLE DE SU APUESTA:)');
        } else {
            console.log(`ha perdido, desea volver a apostar?`);
        }
    }
    getInfo(): Tragamonedas {
        return this;
    }
}