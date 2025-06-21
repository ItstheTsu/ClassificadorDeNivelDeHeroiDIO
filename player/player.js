const { definirRank } = require('../data/ranks');

const player = {
    nome: "Tsu",
    xp: 0,
    nivel: "Ferro",
    danoExtra: 0,
    ultimoTreino: 0
};

function atualizarNivel() {
    player.nivel = definirRank(player.xp);
}

function calcularDano() {
    const bonusXp = Math.floor(player.xp / 250);
    return 1 + player.danoExtra + bonusXp;
}

module.exports = { player, atualizarNivel, calcularDano };
