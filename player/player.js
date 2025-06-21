const { definirRank } = require('../data/ranks');
const { definirTitulo } = require('../data/titles');

const player = {
    nome: "Tsu",
    xp: 0,
    danoExtra: 0,
    ultimoTreino: 0,
    titulo: definirTitulo(0),
    rank: definirRank(0),
    nivel: 1,
    vida: 100,
};

function atualizarNivel() {
    player.rank = definirRank(player.xp);
    player.titulo = definirTitulo(player.xp);
    player.nivel = Math.floor(player.xp / 1000) + 1;
}

function calcularDano() {
    const bonusXp = Math.floor(player.xp / 250);
    return 1 + player.danoExtra + bonusXp;
}

function resetarPlayer() {
    player.xp = 0;
    player.danoExtra = 0;
    player.ultimoTreino = 0;
    player.vida = 100;
    player.nivel = 1;
    atualizarNivel();
}

module.exports = { player, atualizarNivel, calcularDano, resetarPlayer };