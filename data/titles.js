function definirTitulo(xp) {
    if (xp >= 0) return "O Iniciante";
    else if (xp <= 1000) return "O Aventureiro";
    else if (xp <= 2000) return "O Explorador";
    else if (xp <= 3000) return "O Guerreiro";
    else if (xp <= 3000) return "O Imbatível";
    else if (xp <= 7000) return "O Veloz";
    else return "O Caçador de Dragões";
}

module.exports = { definirTitulo };