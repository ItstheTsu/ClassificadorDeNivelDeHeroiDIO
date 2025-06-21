const readline = require('readline-sync');
const { monstrosPorRank } = require('../data/monsters');
const { player, atualizarNivel, calcularDano } = require('./player');

function aventura() {
    atualizarNivel();
    const monstros = monstrosPorRank[player.nivel];
    const monstro = monstros[Math.floor(Math.random() * monstros.length)];
    let vida = Math.floor(Math.random() * 100) + 50;
    const dano = calcularDano();

    console.log(`⚔️ Enfrentando: ${monstro} (HP: ${vida})`);

    while (vida > 0) {
        console.log(`➡️ Você causa ${dano} de dano`);
        vida -= dano;
        if (vida <= 0) {
            const xpGanho = Math.floor(Math.random() * 150) + 50;
            player.xp += xpGanho;
            console.log(`🏆 Venceu! Ganhou ${xpGanho} XP. Total: ${player.xp}`);
        } else {
            console.log(`😠 Vida restante do ${monstro}: ${vida}`);
        }
        readline.question("Pressione Enter para continuar...");
    }
}

module.exports = aventura;
