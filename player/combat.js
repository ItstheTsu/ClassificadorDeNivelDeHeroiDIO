const readline = require('readline-sync');
const { monstrosPorRank } = require('../data/monsters');
const { player, atualizarNivel, calcularDano } = require('./player');

function aventura() {
    atualizarNivel();

    const monstros = monstrosPorRank[player.rank];
    if (!monstros || monstros.length === 0) {
        console.log(`Nenhum monstro disponível para o rank ${player.rank}.`);
        return;
    }

    const monstro = monstros[Math.floor(Math.random() * monstros.length)];
    let vida = Math.floor(Math.random() * 100) + 50;

    console.log(`⚔️ Enfrentando: ${monstro} (HP: ${vida})`);

    while (vida > 0) {
        const baseDano = calcularDano();

        // Chance crítica: 20%
        const critico = Math.random() < 0.20;
        const danoFinal = critico ? baseDano * 10 : baseDano;

        if (critico) {
            console.log(`💥 CRÍTICO! Você causa ${danoFinal} de dano!`);
        } else {
            console.log(`➡️ Você causa ${danoFinal} de dano`);
        }

        vida -= danoFinal;

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