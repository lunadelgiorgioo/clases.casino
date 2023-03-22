import JuegoCasino from "./JuegoDeCasino";

export default class Casino {
    private nombre:string;
    private entrada: boolean;
    private games: JuegoCasino[];
    private bar: string;
    constructor(nombre: string, entrada: boolean){ 
        this.nombre = nombre;
        this.entrada = entrada;
        this.games = [];
        this.bar = "Aperitivos";
    }
    setCasinoGames (juegos: JuegoCasino){
        this.games.push(juegos);
    }
    getInfo(): Casino {
        return this;
    }
}