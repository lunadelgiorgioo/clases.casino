import JuegoCasino from "./JuegoDeCasino";
import Poker from "./poker";
import Casino from "./casino";
import Tragamonedas from "./tragamondedas";
/*
Crear una superclase JuegoDeCasino.
Crear dos clases que hereden de ella (pueden ser juegos puntuales, craps,
tragamonedas, ruleta, BlackJack, etc…)
Luego, aplicar composición entre una clase Casino y las dos clases hijas de JuegodeCasino.
Crear los diagramas de clases de la solución que propongan.
*/
let casino = new Casino("CasinoPark", true);
let truco = new JuegoCasino("Truco", true, "Gana la Ronda mayor", true);
let poker = new Poker("Poker", true, " juego de cartas en el que los jugadores, con todas o parte de sus cartas ocultas, hacen apuestas en base a una puja inicial.", true, 3, 4, 2);
let monkey = new Tragamonedas(true, "monkey", true, "Maquina de la suerte", false);
casino.setCasinoGames(monkey);
casino.setCasinoGames(truco);
casino.setCasinoGames(poker);
//console.log(casino.getInfo());
//console.log(casino)
poker.jugarPoker(3, true);
console.log(poker);
poker.jugarPoker(2, true);
console.log(poker);
monkey.jugarTragamonedas(true, true, true);
console.log(monkey);