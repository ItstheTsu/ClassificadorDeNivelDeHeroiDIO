const { player, calcularDano } = require('./player');

function treinar() {
    const agora = Date.now();
    const cincoMin = 5 * 60 * 1000;
    if (agora - player.ultimoTreino < cincoMin) {
        const restante = ((cincoMin - (agora - player.ultimoTreino)) / 1000).toFixed(0);
        console.log(`⏳ Espere ${restante}s para treinar novamente.`);
        return;
    }

    const xpGanho = Math.floor(Math.random() * 100) + 1;
    player.xp += xpGanho;
    player.danoExtra += 1;
    player.ultimoTreino = agora;

    console.log(`💪 Treino completo! Ganhou ${xpGanho} XP. Dano atual: ${calcularDano()}`);
}

module.exports = treinar;