import JuegoCasino from "./JuegoDeCasino";

export default class Casino {
    private nombre:string;
    private maquinas: boolean;
    private entrada: boolean;
    private games: JuegoCasino[];
    private sectorCartas: boolean;
    private bar: string;
    constructor(nombre: string, entrada: boolean){ 
        this.nombre = nombre;
        this.maquinas = true;
        this.entrada = entrada;
        this.games = [];
        this.sectorCartas = true;
        this.bar = "Aperitivos";
    }
    setCasinoGames (juegos: JuegoCasino){
        this.games.push(juegos);
    }
    getInfo(): Casino {
        return this;
    }
}