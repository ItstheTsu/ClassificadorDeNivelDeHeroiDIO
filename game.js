const readline = require('readline-sync');
const { atualizarNivel, calcularDano, player } = require('./player/player');
const treinar = require('./player/trainer');
const aventura = require('./player/combat');

function menuAventura() {
    let ativo = true;
    while (ativo) {
        atualizarNivel();
        console.log(`\n🎖️ Herói: ${player.nome} | Rank: ${player.rank} | XP: ${player.xp} | Nível: ${player.nivel} | Dano: ${calcularDano()}`);
        console.log("1. Treinar");
        console.log("2. Aventura");
        console.log("3. Abandonar aventura");
        const opcao = readline.question("Escolha: ");

        switch (opcao) {
            case "1":
                treinar();
                break;
            case "2":
                aventura();
                break;
            case "3":
                console.log("Você abandonou a jornada.");
                ativo = false;
                break;
            default:
                console.log("Opção inválida.");
        }
    }
}

function start() {
    console.log("\n✨ BEM-VINDO AO MUNDO DOS HERÓIS ✨");
    console.log("1. Iniciar aventura");
    console.log("2. Abandonar");

    const escolha = readline.question("Escolha: ");

    switch (escolha) {
        case "1":
            const nome = readline.question("Digite o nome do seu herói: ");
            player.nome = nome;
            menuAventura();
            break;
        case "2":
            console.log("Adeus, viajante...");
            break;
        default:
            console.log("Opção inválida.");
    }
}

module.exports = { start };
